<template>
    <div class="main-page">
        <div class="main-header">
            <div class="main-logo">
                <router-link to="/"><img src="../MainHeader/img/logo.png" alt=""></router-link>
            </div>

            <div class="header-search">
                <InputText type="text" v-model="searchText" placeholder="Знайти книгу"/>
            </div>


            <div class="basket-link">
                <img  class="basket-link__image" src="./../View/img/basket-img.svg" alt="">
                <Badge :value="this.getBasketItems.length" class="basket-badge-count"></Badge>
                <p class="basket-link__title" style="cursor: pointer;" @click="visibleRight = true" >Кошик</p>
                    <Sidebar v-model:visible="visibleRight" position="right" style="width: 30rem">
                        <div class="side-bar-content">
                            <p style="margin-bottom: 10px">Кошик</p>
                            <hr>
                            <p style="padding: 20px" v-show="!this.getBasketItems.length">
                                Ваш кошик порожній.
                                Не вагайтеся і перегляньте наш каталог, щоб знайти щось гарне для Вас!
                            </p>
                            <p v-show="this.getBasketItems.length"  style="margin-top: 10px">{{ this.getBasketCount }} шт</p>
                            <div class="basket-products">
                                <BasketCard
                                    v-for="item in getBasketItems"
                                    :key="item"
                                    :book="item"
                                />
                            </div>
                        </div>
                        <div v-show="this.getBasketItems.length" class="basket-summary">
                            <span class="summary">
                                <span>Всього</span>
                                <span>{{ this.getTotalSummary }} грн</span>
                            </span>
                            <Button
                                class="summary-button"
                                label="Перейти до оформлення замовлення"
                                @click="goToBasket"
                            />
                        </div>
                    </Sidebar>
            </div>

            <div class="login-profile">
                <router-link to="/login"><p class="profile-name">Увійти</p></router-link>
            </div>

        </div>
        <router-view
            :searchText="searchText"
            class="content"/>
    </div>
</template>

<script>

import {defineComponent} from 'vue'
import Button from "primevue/button";
import Sidebar from "primevue/sidebar";
import BasketCard from "@/components/BasketCard/BasketCard.vue";
import { mapGetters, mapActions } from "vuex";
import Badge from 'primevue/badge';
import {createFilterURL} from "@/services/filters";


export default defineComponent({
    name: "MainView",
    components: {Button, Sidebar, BasketCard, Badge },
    props: [],
    data() {
        return {
            visibleRight: false,
            searchText: '',
            filtersData: null
        }
    },
    methods: {
        ...mapActions(['loadCartItems']),
        goToBasket(){
            this.$router.push('basket')
            this.visibleRight = false
        },
        async handleFiltersData(code, filtersValue) {
            if(filtersValue){
                this.filtersData[code] = filtersValue;
                this.$emit('handleFiltersData', this.filtersData)
            }
        },

    },
    mounted() {
        this.loadCartItems()
    },
    computed: mapGetters(['getBasketItems', 'getTotalSummary', 'getBasketCount'])
})

</script>


<style scoped>


.side-bar-content{
    height: 719px;
    overflow: auto;
}
.basket-badge-count{
    position: absolute;
    top: -14px;
    right: 46px;
}
.basket-link__image{
    margin-right: 10px;
}

.basket-summary{
    padding: 20px;
    display: flex;
    flex-direction: column;
}
.summary{
    display:flex;
    justify-content:space-between;
    margin-bottom: 20px;
    font-family: inherit;
    font-weight: 500;
    font-size: 20px;
    line-height: 110%;
    font-style: normal;
    color: #111;
}

.basket-products{

}

.summary-button:hover{
    background: #2d079d !important;
    border-radius: 10px !important;
}
.summary-button{
    background: #2d079d !important;
    border-radius: 10px !important;
}

:deep(.p-sidebar p-component p-ripple-disabled){
    width: 30rem !important;
}
.p-sidebar p-component p-ripple-disabled{
    width: 30rem;
}
.main-page {
    width: 100%;
    height: 100%;
}

.content {
    width: 100%;
}

.main-header {
    background: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    width: 100%;
    padding: 10px 30px;
}

.main-header a {
    text-decoration: none;
    color: black;
}

.item-link a {
    text-decoration: none;
    color: #757575;
}

.login-profile {
    display: flex;
    align-items: center;
}

.profile-name {
    font-family: 'Gruppo';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 15px;
}

.header-search {
    width: 746px;
}

.header-search input {
    width: 100%;
    background: #F1F1F1;
    border: 1px solid #C5C5DB;
    border-radius: 6px;
}

.header-search__btn button {
    padding: 10px 27px;
    background: #CE4CE4;
    border: 1px solid #C5C5DB;
    border-radius: 6px;
}

.basket-link {
    display: flex;
    position: relative;
}

.basket-link a {
    font-family: 'Gruppo';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 20px;
}

:deep(.p-sidebar-right .p-sidebar) {
    width: 30rem;
}


</style>