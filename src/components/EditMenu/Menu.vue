<template>
    <div class="card flex justify-content-center" @click="toggle">
        <img class="edit-image" src="../../assets/dots.png" alt="">
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
.edit-image{
    width: 30px;
    height: 30px;
    cursor: pointer;
}
</style>
