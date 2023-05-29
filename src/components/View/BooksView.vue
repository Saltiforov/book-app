<template>
    <div class="books-view">

        <div class="books-search">

            <Button class="add-book" label="Додати книгу" @click="visible = true"/>
            <span style="color: white; margin-right: 20px">Пошук</span>
            <span class="p-input-icon-right"
                  style="margin-right: 100px"
            >
                    <i class="pi pi-search"/>
                    <InputText placeholder="Search"/>
            </span>

            <Dropdown
                    v-model="selectedCity"
                    :options="cities"
                    optionLabel="name"
                    placeholder="Автор"
                    class="w-full md:w-14rem books-dropdown"
            />
            <Dropdown
                    v-model="selectedGenre"
                    :options="cities"
                    optionLabel="name"
                    placeholder="Жанр"
                    class="w-full md:w-14rem books-dropdown"
            />
            <AddNewBookPopup
                    :is-visible="visible"
                    @clickCancelBtn="clickCancelBtn"
                    @addNewBook="addNewBook"
            ></AddNewBookPopup>

            <Button
                    icon="pi pi-search"
                    aria-label="Search"
            />
        </div>

        <Table
                :table-config="tableConfig"
                :table-data="tableData"
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
import axios from "axios";

export default {
    name: "VSignUp",
    components: {AddNewBookPopup, InputText, Button, Table, Dropdown},
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
                    style: 'width: 8rem',
                    code: 'language_type'
                },
                {
                    header: 'book_id',
                    sortable: true,
                    style: 'width: 8rem',
                    code: 'book_id'
                },
                {
                    header: 'user_id',
                    sortable: true,
                    style: 'width: 8rem',
                    code: 'user_id'
                },
                {
                    header: 'sup_id',
                    sortable: true,
                    style: 'width: 8rem',
                    code: 'sup_id'
                },

            ],
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
            books: null,

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

    },
    computed: {},
    async mounted() {
        this.apiService = new APIService()
        this.tableData = await this.apiService.getBooks()

    }


}

</script>


<style scoped>

.books-search {
    padding: 30px;
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