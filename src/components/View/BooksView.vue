<template>
    <div class="books-view">

        <div class="books-search">

            <Button class="add-book" label="Додати книгу" />
            <span style="color: white; margin-right: 20px">Пошук</span>
            <span class="p-input-icon-right"
                  style="margin-right: 100px"
            >
                    <i class="pi pi-search"/>
                    <InputText  placeholder="Search"/>
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
export default {
    name: "VSignUp",
    components: { InputText, Button, Table, Dropdown },
    props: {},
    data() {
        return {
            tableConfig: [
                {
                    code: 'name',
                    header: 'Назва',
                    sortable: true,
                    style: 'width: 8rem'
                },
                {
                    code: 'genre',
                    header: 'Жанр',
                    sortable: true,
                    style: 'width: 12rem',
                },
                {
                    header: 'Автор',
                    code: 'author',
                    sortable: true,
                    style: 'width: 12rem',
                },
                {
                    header: 'Версія',
                    sortable: true,
                    style: 'width: 8rem',
                    code: 'version'
                },
                {
                    header: 'Обкладинка',
                    sortable: true,
                    style: 'width: 8rem',
                    code: 'envelope'
                },
                {
                    header: 'Редагування',
                    sortable: true,
                    style: 'width: 8rem',
                    code: 'editing'
                },

            ],
            tableData: [
                {name: 'Книга Триста поезій', genre: 'Художня Література', author: 'Ліна Костенко', version: '120x165 мм', envelope: 'Тверда',  },
                {name: 'Книга Триста поезій', genre: 'Художня Література', author: 'Ліна Костенко', version: '120x165 мм', envelope: 'Тверда',  },
                {name: 'Книга Триста поезій', genre: 'Художня Література', author: 'Ліна Костенко', version: '120x165 мм', envelope: 'Тверда',  },
                {name: 'Книга Триста поезій', genre: 'Художня Література', author: 'Ліна Костенко', version: '120x165 мм', envelope: 'Тверда',  },
                {name: 'Книга Триста поезій', genre: 'Художня Література', author: 'Ліна Костенко', version: '120x165 мм', envelope: 'Тверда',  },
                {name: 'Книга Триста поезій', genre: 'Художня Література', author: 'Ліна Костенко', version: '120x165 мм', envelope: 'Тверда',  },
                {name: 'Книга Триста поезій', genre: 'Художня Література', author: 'Ліна Костенко', version: '120x165 мм', envelope: 'Тверда',  },
                {name: 'Книга Триста поезій', genre: 'Художня Література', author: 'Ліна Костенко', version: '120x165 мм', envelope: 'Тверда',  },
            ],
            cities: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ],
            selectedCity: '',
            selectedGenre: '',
        }
    },
    methods: {},


}

</script>


<style scoped>

.books-search{
    padding: 30px;
}

.books-view {
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
:deep(.p-button:enabled:hover ){
    background: #CE4CE4;
    border-radius: 10px;
}
.books-dropdown{
    margin-right: 30px;
    background: #F2F2F2;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    width: 185px;
}
.add-book{
    background: #CE4CE4;
    border-radius: 10px;
    padding: 10px 50px;
    margin-right: 70px;
}

</style>