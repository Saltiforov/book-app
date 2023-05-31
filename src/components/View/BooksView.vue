<template>
    <div class="books-view">

        <div class="books-search">

            <Button class="add-book" label="Додати книгу" @click="visible = true"/>
            <span class="p-input-icon-right"
                  style="margin-right: 100px"
            >
                    <i class="pi pi-search"/>
                    <InputText @input="handleFiltersData()" v-model="booksSearch" placeholder="Пошук"/>
            </span>
            <AddNewBookPopup
                    :is-visible="visible"
                    @clickCancelBtn="clickCancelBtn"
                    @addNewBook="addNewBook"
            ></AddNewBookPopup>

        </div>

        <EditModal
           :is-visible="isVisible"
           :languages="languages"
           :book-type="book_type"
           :edit-task-data="editTaskData"
           :users-list="usersList"
           :sup-id-list="supIdList"
           @close="closeEditWindow"
        />

        <Table
                :table-config="tableConfig"
                :table-data="tableData"
                :edit-column="true"
                :edit-config="editConfig"
                @handleEditTask="handleEditTask"
                @handledDelete="deleteItem"
        />

    </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Button from "primevue/button";
import Table from './../Table/Table.vue'
import Dropdown from "primevue/dropdown";
import AddNewBookPopup from "../Modal/AddNewBook.vue";
import APIService from "../../services/api";
import EditModal from "@/components/Modal/EditModal.vue";
import {createFilterURL} from "@/services/filters";
import moment from "moment";

export default {
    name: "VSignUp",
    components: {AddNewBookPopup, InputText, Button, Table, Dropdown, EditModal, moment},
    props: {},
    data() {
        return {
            tableConfig: [
                {
                    code: 'title',
                    header: 'Назва книги',
                    sortable: true,
                    style: 'width: 8rem'
                },
                {
                    code: 'price',
                    header: 'Ціна',
                    sortable: true,
                    style: 'width: 6rem',
                },
                {
                    header: 'Дата публікації',
                    code: 'publication_date',
                    sortable: true,
                    style: 'width: 5rem',
                },
                {
                    header: 'Автор',
                    sortable: true,
                    style: 'width: 3rem',
                    code: 'author'
                },
                {
                    header: 'Тип формату',
                    sortable: true,
                    style: 'width: 8rem',
                    code: 'format_type'
                },
                {
                    header: 'Мова',
                    sortable: true,
                    style: 'width: 2rem',
                    code: 'language_type'
                },
                {
                    header: 'Ідентифікатор книги',
                    sortable: true,
                    style: 'width: 10rem',
                    code: 'book_id'
                },
                {
                    header: 'Ідентифікатор користувача',
                    sortable: true,
                    style: 'width: 12rem',
                    code: 'user_id'
                },
                {
                    header: 'ID постачальника',
                    sortable: true,
                    style: 'width: 3rem',
                    code: 'sup_id'
                },


            ],
            editConfig: {style: 'width: 6rem', header: 'Редагування'},
            visible: false,
            tableData: [],
            cities: [
                {name: 'New York', code: 'NY'},
                {name: 'Rome', code: 'RM'},
                {name: 'London', code: 'LDN'},
                {name: 'Istanbul', code: 'IST'},
                {name: 'Paris', code: 'PRS'}
            ],
            selectedCity: '',
            selectedGenre: '',
            apiService: null,
            booksSearch: '',
            filtersData: null,
            languages: null,
            book_type: [
                { name: 'Паперова', code: 'papery' },
                { name: 'Електронна', code: 'electronic' },
            ],
            isVisible: false,
            editTaskData: null,
            usersList: null,
            supIdList: null
        }
    },
    methods: {
        clickCancelBtn() {
            this.visible = false
        },
        addNewBook() {
            this.visible = false
        },
        closeEditWindow(){
          this.isVisible = false
        },
        formatDate(date) {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        },
         async handleFiltersData() {
            this.tableData = await createFilterURL({searchBooks: this.booksSearch}, 'books')
        },
        handleEditTask(data) {
            this.editTaskData = data
            this.isVisible = true
        },

        async deleteItem(data) {
          console.log('deleteItem', data)
          const {book_id} = data;
          await this.apiService.deleteBook(book_id);
          this.tableData = await createFilterURL({}, 'books');
        },
        extractSegment(str) {
            const regex = /^([a-zA-Z0-9]+)/;
            const match = str.match(regex);
            return match ? match[1] : '';
        },



    },
    computed: {},
    async mounted() {
        this.apiService = new APIService()
        this.tableData = await this.apiService.getBooks()
        this.tableData = this.tableData.map(data => {
            return {
                ...data,
                publication_date: moment(data.publication_date).format('YYYY-MM-DD')
            }
        })
        this.languages = await this.apiService.getLanguages()
        this.usersList = await this.apiService.getAllUsers()
        this.supIdList = await this.apiService.getSuppliers()
        this.supIdList = this.supIdList.map(supplier => {
            return {
                name: supplier.supplier_name,
                code: supplier.sup_id
            }
        })
        this.usersList = this.usersList.map(user => {
            return {
                name: user.user_name,
                code: user.user_id
            }
        })
    }


}

</script>


<style scoped>

.books-search {
    padding: 30px;
}

.books-search__input{
    color: black;
    margin-right: 20px;
    font-size: 18px;
}
.books-view {
    padding: 30px;
}

:deep(.p-input-icon-right > .p-inputtext) {
    width: 320px;
    border-radius: 10px;
}

:deep(.p-button.p-button-icon-only) {
    background: #CE4CE4;
    border-radius: 10px;
}


.books-dropdown {
    margin-right: 30px;
    background: #F2F2F2;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    width: 185px;
}

.add-book {
    background: #CE4CE4;
    border-radius: 10px;
    padding: 10px 50px;
    margin-right: 70px;
}

</style>