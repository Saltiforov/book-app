<template>
    <div class="basket-view">
        <div class="basket-wrapper">
            <h2 v-if="!message" class="basket-title">Оформлення замовлення</h2>
            <Message v-show="message" severity="success">Success Message Content</Message>
           <div class="basket-wrapper__content">
               <VOrdering
                   @sendContactData="sendContactData"
               />
               <div class="basket-wrapper__content-right">
                   <ProductInCart/>
                   <ConfirmPayment class="confirm-product" v-show="this.getBasketCount" @confirmPayment="confirmPayment"/>
               </div>

           </div>
        </div>

    </div>
</template>

<script>

import ProductInCart from "@/components/ProductInCart/ProductInCart.vue";
import VOrdering from "@/components/Ordering/VOrdering.vue";
import ConfirmPayment from "@/components/ProductInCart/CofirmPayment/ConfirmPayment.vue";
import { mapGetters, mapActions } from "vuex";
import Message from 'primevue/message';
import axios from "axios";

export default {
    name: "BasketView",
    components: {  ProductInCart, VOrdering, ConfirmPayment, Message },
    props: {},
    data() {
        return {
            localeData: null,
            message: false
        }
    },
    methods: {
        ...mapActions(['clearBasket', 'loadCartItems']),
        confirmPayment() {
            console.log('confirmPayment', this.localeData)
            this.message = true
            setTimeout(() => {
                this.message = false
                this.$router.push('/')
                this.clearBasket()
            },2000)
            axios.post('/api/order-item', {
                ...this.localeData,
                delivery_city: this.localeData.delivery_city.name,
                delivery_res: this.localeData.delivery_res.name
            });
        },
        sendContactData(value) {
          this.localeData = value
        }
    },
    computed: mapGetters(['getBasketCount']),
}

</script>


<style scoped>

:deep(.p-message .p-message-wrapper){
    padding: 0.5rem 0.5rem;
}

.basket-wrapper{
    padding: 5px 30px 15px 30px;
    width: 1500px;
    margin: 0 auto;
}

.basket-wrapper__content-right{
  display: flex;
  flex-direction: column
}

.basket-wrapper__content{
    display: flex;
    justify-content: space-between;
}

.basket-title{
    font-family: 'Gruppo';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 23px;
    padding: 20px;
    color: black;
}

.form-item input{
    width: 100%;
    background: #F2F2F2;
}

.delivery-item input{
    width: 100%;
    border-radius: 10px;
    background: #F2F2F2;
    border: 1px solid rgba(0, 0, 0, 0.2);
}
.p-float-label > label{
    color: black;
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

.product-cart-item__availability p:first-child{
    margin-right: 70px;
}

.to-be-paid p{
    font-family: 'Gruppo';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 23px;
}
.to-be-paid span{
    font-family: 'Gruppo';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 23px;
}

.payment-btn label{
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
}



</style>