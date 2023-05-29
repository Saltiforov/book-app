<template>
    <div class="report-view">

        <div class="report-search">
            <span style="color: white; margin-right: 20px">Пошук</span>
            <span class="p-input-icon-right"
                  style="margin-right: 20px"
            >
                    <i class="pi pi-search"/>
                    <InputText  placeholder="Search"/>
                </span>
            <Button icon="pi pi-search" aria-label="Search" />
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
export default {
    name: "VSignUp",
    components: { InputText, Button, Table },
    props: {},
    data() {
        return {
            tableConfig: [
                {
                    code: 'name',
                    header: 'Name',
                    sortable: true,
                    style: 'width: 8rem'
                },
                {
                    code: 'adress',
                    header: 'Address',
                    sortable: true,
                    style: 'width: 12rem',
                },
                {
                    header: 'Email Address',
                    code: 'email_adress',
                    sortable: true,
                    style: 'width: 12rem',
                },
                {
                    header: 'Phone Number',
                    sortable: true,
                    style: 'width: 8rem',
                    code: 'phone_number'
                },
                {
                    header: 'Amount',
                    sortable: true,
                    style: 'width: 8rem',
                    code: 'amount'
                },
            ],
            apiService: null,
            tableData: []
        }
    },
    methods: {},
    async mounted() {
        this.apiService = new APIService()
        this.tableData = await this.apiService.getBookOrders()
    }


}

</script>


<style scoped>

.report-search{
    padding: 30px;
}

.report-view {
    padding: 30px;
}

:deep(.p-input-icon-right > .p-inputtext){
    width: 320px;
    border-radius: 10px;
}
:deep(.p-button.p-button-icon-only){
    background: #CE4CE4;
    border-radius: 10px;
}

</style>