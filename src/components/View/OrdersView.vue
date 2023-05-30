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
      isVisible: null,
      filtersData: null,
      editItemData: null,
      editConfig: {style: 'width: 6rem'},
      users: null
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
      console.log('updatedItem', updatedItem)
      const index = this.tableData.findIndex(task => task.order_id === updatedItem.order_id);
      if (index !== -1) {
        this.tableData[index] = updatedItem;
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