
<template>
    <div class="product-in-cart">
        <div class="product-cart-wrapper" :class="this.getClassName">
            <div class="wrapper-title">{{this.getBasketCount}} товари у кошику</div>
            <p v-if="!this.getBasketItems.length" class="empty-basket">Кошик порожній, будь ласка, додайте товар</p>
            <BasketCard
               v-for="item in getBasketItems"
               :key="item"
               :book="item"
            />
            <div class="total-summary">
              Разом {{getTotalSummary}}
            </div>
        </div>

    </div>
</template>

<script>
import {defineComponent} from 'vue'
import BasketCard from "@/components/BasketCard/BasketCard.vue";
import { mapGetters } from "vuex";


export default defineComponent({
    name: "ProductInCart",
    props: ['products'],
    data() {
        return {}
    },
    components: { BasketCard },
    computed: {
        ...mapGetters(['getBasketItems', 'getTotalSummary', 'getBasketCount']),
        getClassName() {
            return this.getBasketCount > 3 ? 'cart-style' : '';
        },
    }

})
</script>


<style scoped>

.empty-basket{
    font-size: 20px;
    padding: 30px 20px;
}

.wrapper-title{
    padding: 9px 10px 5px;
}

.product-cart-wrapper{
    padding: 10px;
    width: 400px;
    background: white;
    border-radius: 10px;
}

.cart-style{
    height: 520px;
    overflow-y: scroll;
}


.product-cart__description p {
    margin-bottom: 5px;
}
.product-cart__description p:first-child {
    margin-top: 10px;
}

.product-cart__img img{
    width: 82px;
    height: 105px;
}
.total-summary{
    padding: 10px;
}


</style>