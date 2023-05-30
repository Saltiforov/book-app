<template>
    <div class="books-view">

        <div class="books-search">

            <Button class="add-book" label="Додати книгу" @click="visible = true"/>
            <span class="books-search__input">Пошук</span>
            <span class="p-input-icon-right"
                  style="margin-right: 100px"
            >
                    <i class="pi pi-search"/>
                    <InputText @input="handleFiltersData()" v-model="booksSearch" placeholder="Search"/>
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
        />

        <Table
                :table-config="tableConfig"
                :table-data="tableData"
                :edit-column="true"
                :edit-config="editConfig"
                @handleEditTask="handleEditTask"
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

export default {
    name: "VSignUp",
    components: {AddNewBookPopup, InputText, Button, Table, Dropdown, EditModal},
    props: {},
    data() {
        return {
            tableConfig: [
                {
                    code: 'title',
                    header: 'title',
                    sortable: true,
                    style: 'width: 6rem'
                },
                {
                    code: 'price',
                    header: 'price',
                    sortable: true,
                    style: 'width: 6rem',
                },
                {
                    header: 'publication_date',
                    code: 'publication_date',
                    sortable: true,
                    style: 'width: 5rem',
                },
                {
                    header: 'format_type',
                    sortable: true,
                    style: 'width: 8rem',
                    code: 'format_type'
                },
                {
                    header: 'language_type',
                    sortable: true,
                    style: 'width: 5rem',
                    code: 'language_type'
                },
                {
                    header: 'book_id',
                    sortable: true,
                    style: 'width: 10rem',
                    code: 'book_id'
                },
                {
                    header: 'user_id',
                    sortable: true,
                    style: 'width: 10rem',
                    code: 'user_id'
                },
                {
                    header: 'sup_id',
                    sortable: true,
                    style: 'width: 6rem',
                    code: 'sup_id'
                },
            ],
            editConfig: {style: 'width: 6rem'},
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
        }
    },
    methods: {
        clickCancelBtn() {
            this.visible = false
        },
        addNewBook() {
            this.visible = false
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
        }



    },
    computed: {},
    async mounted() {
        this.apiService = new APIService()
        this.tableData = await this.apiService.getBooks()
        this.languages = await this.apiService.getLanguages()
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

:deep(.p-button:enabled:hover ) {
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