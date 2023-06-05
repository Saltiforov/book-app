<template>
    <div class="main-header">
        <div class="main-logo">
            <router-link to="/"><img src="../MainHeader/img/logo.png" alt=""></router-link>
        </div>
        <div class="pages-links">

            <div class="item-link">
                <router-link to="/wrapper-links/books"><p class="item-link-text"> Книги</p></router-link>
            </div>

            <div class="item-link">
                <router-link to="/wrapper-links/orders"><p class="item-link-text">Замовлення</p></router-link>
            </div>

            <div class="item-link">
                <router-link to="/wrapper-links/reports"><p class="item-link-text">Звіти</p></router-link>
            </div>

        </div>

        <div class="profile">
            <img src="../MainHeader/img/profile-img.png" alt="" class="profile-img">
            <p class="profile-name">{{ getUserName }}</p>
            <span></span>
        </div>

    </div>
</template>

<script>
import {defineComponent} from 'vue'
import { RouterLink } from "vue-router";

export default defineComponent({
    name: "MainHeader",
    components: { RouterLink },
    computed: {
      getUserName() {
        return JSON.parse(localStorage.getItem('user'))?.user_name;
      }
    },
})
</script>


<style scoped>


.main-header {
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    padding: 10px 30px;
}
.pages-links{
    display: flex;
}
.item-link a{
    text-decoration: none;
    color: #757575;
}
.item-link{
    padding: 5px 20px;
    margin: 0 30px;
}
.item-link-text{
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;
}
.profile{
    display: flex;
    align-items: center;
}
.profile-img{
    width: 41px;
    height: 41px;
    border-radius: 50%;
    margin-right: 20px;
}
.profile-name{
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 33px;
}
.router-link-active {
    color: black !important;
}
</style>