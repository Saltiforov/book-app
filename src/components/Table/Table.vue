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
          <Column
                  v-if="editColumn"
                  field="quantity"
                  :header="editConfig.header"
                  :style="editConfig.style"
          >
              <template #body="{ data }">
                  <div class="edit-task">
                      <Menu
                              @handleEditTask="handleEditTask"
                              @handledDelete="handledDelete"
                              :edit-task-data="data"
                      />
                  </div>
              </template>
          </Column>
      </DataTable>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import DataTable  from "primevue/datatable";
import Column from "primevue/column";
import Menu from "@/components/EditMenu/Menu.vue";

export default defineComponent({
    name: "VTable",
    components: { DataTable, Column, Menu },
    props: ['tableConfig', 'tableData', 'editColumn', 'editConfig'],
    data() {
        return {
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: () => {
                        this.$toast.add({severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000});
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    command: () => {
                        this.$toast.add({severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000});
                    }
                },
                {
                    label: 'Vue Website',
                    icon: 'pi pi-external-link',
                    url: 'https://vuejs.org/'
                },
                {
                    label: 'Router',
                    icon: 'pi pi-upload',
                    to: '/fileupload'
                }
            ],
            dataEdit: null
        }
    },
    methods: {
        handleEditTask(data) {
            this.$emit('handleEditTask', data)
            console.log(data)
        },
        handledDelete(data) {
            this.$emit('handledDelete', data)
        },
        extractSegment(str) {
            const regex = /^([a-zA-Z0-9]+)/;
            const match = str.match(regex);
            return match ? match[1] : '';
        },
    },
    computed: {

    }

})
</script>

<style scoped>

:deep(.p-datatable .p-datatable-thead > tr > th){
    background: #000;
    color: white;
}
:deep(.p-datatable .p-sortable-column.p-highlight:hover){
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