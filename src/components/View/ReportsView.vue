<template>
    <div class="report-view">
      <h1>Reports</h1>
    </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Button from "primevue/button";
import Table from './../Table/Table.vue'
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
            tableData: [
                {name: 'Rusik', adress: 'Specialistov 24', email_adress: 'rusik@ukr.net', phone_number: 380936890777, amount: '325$'},
                {name: 'Rusik', adress: 'Specialistov 24', email_adress: 'rusik@ukr.net', phone_number: 380936890777, amount: '325$'},
                {name: 'Rusik', adress: 'Specialistov 24', email_adress: 'rusik@ukr.net', phone_number: 380936890777, amount: '325$'},
                {name: 'Rusik', adress: 'Specialistov 24', email_adress: 'rusik@ukr.net', phone_number: 380936890777, amount: '325$'},
                {name: 'Rusik', adress: 'Specialistov 24', email_adress: 'rusik@ukr.net', phone_number: 380936890777, amount: '325$'},
                {name: 'Rusik', adress: 'Specialistov 24', email_adress: 'rusik@ukr.net', phone_number: 380936890777, amount: '325$'},
                {name: 'Rusik', adress: 'Specialistov 24', email_adress: 'rusik@ukr.net', phone_number: 380936890777, amount: '325$'},
                {name: 'Rusik', adress: 'Specialistov 24', email_adress: 'rusik@ukr.net', phone_number: 380936890777, amount: '325$'},
                {name: 'Rusik', adress: 'Specialistov 24', email_adress: 'rusik@ukr.net', phone_number: 380936890777, amount: '325$'},
                {name: 'Rusik', adress: 'Specialistov 24', email_adress: 'rusik@ukr.net', phone_number: 380936890777, amount: '325$'},
                {name: 'Rusik', adress: 'Specialistov 24', email_adress: 'rusik@ukr.net', phone_number: 380936890777, amount: '325$'},
            ]
        }
    },
    methods: {},



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