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
    height: 100vh;
    background-image: url('../View/img/bg.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
