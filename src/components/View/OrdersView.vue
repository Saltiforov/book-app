<template>
    <div class="report-view">

        <div class="report-search">
            <span class="p-input-icon-right"
                  style="margin-right: 20px"
            >
                    <i class="pi pi-search"/>
                    <InputText @input="handleFiltersData()" placeholder="Пошук" v-model="ordersText"/>
                </span>
        </div>
        <OrdersModal
                :is-visible="isVisible"
                :users="users"
                :edit-task-data="editItemData"
                @close="isVisible = false"
                @update-data="updateListItem"
        />

        <Table
                :table-config="tableConfig"
                :table-data="tableData"
                :edit-config="editConfig"
                :edit-column="true"
                @handleEditTask="handleEditItem"
                @handledDelete="deleteItem"
        />

    </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Button from "primevue/button";
import Table from './../Table/Table.vue'
import APIService from "../../services/api";
import {createFilterURL} from "@/services/filters";
import OrdersModal from "@/components/Modal/OrdersModal.vue";

export default {
    name: "VSignUp",
    components: {OrdersModal, InputText, Button, Table},
    props: {},
    data() {
        return {
            tableConfig: [
                {
                    code: 'first_name',
                    header: "Ім'я",
                    sortable: true,
                    style: 'width: 6rem'
                },
                {
                    code: 'last_name',
                    header: 'Прізвище',
                    sortable: true,
                    style: 'width: 3rem',
                },
                {
                    header: 'Адреса електронної пошти',
                    code: 'email',
                    sortable: true,
                    style: 'width: 10rem',
                },
                {
                    header: 'Номер телефону',
                    sortable: true,
                    style: 'width: 8rem',
                    code: 'phone'
                },
                {
                    header: 'Місто доставки',
                    sortable: true,
                    style: 'width: 8rem',
                    code: 'delivery_city'
                },
                {
                    header: 'Номер відділення',
                    sortable: true,
                    style: 'width: 8rem',
                    code: 'delivery_res'
                },
                {
                    header: 'ID замовлення',
                    sortable: true,
                    style: 'width: 8rem',
                    code: 'order_id'
                },
                {
                    header: 'Видавець',
                    sortable: true,
                    style: 'width: 8rem',
                    code: 'user_id'
                },
                {
                    header: 'Книги',
                    sortable: true,
                    style: 'width: 8rem',
                    code: 'books'
                },

            ],
            apiService: null,
            tableData: [],
            orders: null,
            isVisible: null,
            filtersData: null,
            editItemData: null,
            editConfig: {style: 'width: 6rem', header: 'Редагування'},
            users: null,
            ordersText: ''
        }
    },
    methods: {
        async handleFiltersData() {
            this.tableData = await createFilterURL({ordersText: this.ordersText}, 'books')
        },
        handleEditItem(data) {
            this.editItemData = data
            this.isVisible = true
        },
        updateListItem(updatedItem) {
            const index = this.tableData.findIndex(task => task.order_id === updatedItem.order_id);
            if (index !== -1) {
                this.tableData[index] = { ...updatedItem, books: updatedItem.books.map(item => item.book_id).join(', ')}
            }
        },
        async deleteItem(data) {
            const {order_id} = data;
            await this.apiService.deleteOrderItem(order_id);
            this.tableData = await this.apiService.getBookOrders()
        },
    },
    async mounted() {
        this.apiService = new APIService()
        this.tableData = await this.apiService.getBookOrders()
        this.users = await this.apiService.getAllUsers()
        this.tableData = await this.tableData.map(book => {
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