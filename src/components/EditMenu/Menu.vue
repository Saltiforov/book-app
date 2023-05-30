<template>
    <div class="card flex justify-content-center" @click="toggle">
        1
        <Menu ref="menu" :model="items" :popup="true"/>
    </div>
</template>

<script>
import Menu from 'primevue/menu';

export default {
    components: {Menu},
    props: ['editTaskData'],
    data() {
        return {
            items: [
                {
                    label: 'Edit',
                    icon: 'pi pi-plus',
                    command: () => {
                        this.$emit('handleEditTask', {...this.editTaskData})
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    command: () => {
                        this.$emit('handledDelete', this.editTaskData)
                    }
                },
            ]
        }
    },
    methods: {
        toggle(event) {
            this.$refs.menu.toggle(event);
        }
    },
}

</script>


<style scoped>
:deep(.p-menu p-component p-menu-overlay){
    background: red;
}
.p-menu p-component p-menu-overlay p-ripple-disabled{
    background: red;
}
</style>
