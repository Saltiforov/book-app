<template>
    <div class="wrapper-links">
       <MainHeader/>
        <router-view/>
    </div>
</template>

<script>
import MainHeader from "@/components/MainHeader/MainHeader.vue";

export default {
    name: 'WrapperLinks',
    components: { MainHeader },
    data(){
        return {

        }
    },
    methods: {

    }
}
</script>

<style scoped>
.wrapper-links{
    min-height: 100vh;
}
</style>
