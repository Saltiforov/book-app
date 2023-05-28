<template>
  <div class="vtable">
      <DataTable :value="tableData" tableStyle="min-width: 50rem" paginator :rows="10">
          <Column
                  v-for="(item, idx) in tableConfig"
                  :key="idx"
                  :field="item.code"
                  :header="item.header"
                  :sortable="item.sortable"
                  :style="item.style">
          </Column>
      </DataTable>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import DataTable  from "primevue/datatable";
import Column from "primevue/column";

export default defineComponent({
    name: "VTable",
    components: { DataTable, Column },
    props: ['tableConfig', 'tableData'],
    data() {
        return {

        }
    }
})
</script>

<style scoped>

:deep(.p-datatable .p-datatable-thead > tr > th){
    background: #000;
    color: white;
}

:deep(.p-datatable .p-datatable-thead> tr > th:first-child ){
    border-top-left-radius: 15px;
}
:deep(.p-datatable .p-datatable-thead> tr > th:last-child ){
    border-top-right-radius: 15px;
}
:deep(.p-datatable .p-sortable-column:not(.p-highlight):hover ){
    background: #000;
    color: white;
}


</style>