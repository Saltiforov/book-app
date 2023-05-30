<template>
    <div class="report-view">

        <div class="report-search">
            <span style="color: white; margin-right: 20px">Пошук</span>
            <span class="p-input-icon-right"
                  style="margin-right: 20px"
            >
                    <i class="pi pi-search"/>
                    <InputText @input="handleFiltersData()" placeholder="Search" v-model="ordersText"/>
                </span>
            <Button icon="pi pi-search" aria-label="Search"/>
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
import APIService from "../../services/api";
import {createFilterURL} from "@/services/filters";

export default {
    name: "VSignUp",
    components: {InputText, Button, Table},
    props: {},
    data() {
        return {
            tableConfig: [
                {
                    code: 'first_name',
                    header: 'Name',
                    sortable: true,
                    style: 'width: 6rem'
                },
                {
                    code: 'last_name',
                    header: 'last_name',
                    sortable: true,
                    style: 'width: 6rem',
                },
                {
                    header: 'Email Address',
                    code: 'email',
                    sortable: true,
                    style: 'width: 6rem',
                },
                {
                    header: 'Phone Number',
                    sortable: true,
                    style: 'width: 6rem',
                    code: 'phone'
                },
                {
                    header: 'delivery_city',
                    sortable: true,
                    style: 'width: 8rem',
                    code: 'delivery_city'
                },
                {
                    header: 'delivery_res',
                    sortable: true,
                    style: 'width: 8rem',
                    code: 'delivery_res'
                },
                {
                    header: 'order_id',
                    sortable: true,
                    style: 'width: 8rem',
                    code: 'order_id'
                },
                {
                    header: 'user_id',
                    sortable: true,
                    style: 'width: 8rem',
                    code: 'user_id'
                },
                {
                    header: 'books',
                    sortable: true,
                    style: 'width: 8rem',
                    code: 'books'
                },

            ],
            apiService: null,
            tableData: [],
            orders: null,
            filtersData: null,
        }
    },
    methods: {
        async handleFiltersData() {
            this.tableData = await createFilterURL({ordersText: this.ordersText}, 'books')
        },
    },
    async mounted() {
        this.apiService = new APIService()
        this.tableData = await this.apiService.getBookOrders()
        this.tableData = await  this.tableData.map(book => {
            return {
                ...book,
                books: book.books.map(item => item.book_id).join(', ')
            }
        })
    },
}

</script>


<style scoped>

.report-search {
    padding: 30px;
}

.report-view {
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

</style>