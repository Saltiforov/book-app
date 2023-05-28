<template>
    <div class="confirm-product">
        <div class="ConfirmPayment">
            <div class="confirm-summary">
                <p>До сплати </p>
                <p>{{getTotalSummary}} грн</p>
            </div>
            <div class="repeat-confirm-summary">
                <p>До сплати </p>
                <p>{{getTotalSummary}} грн</p>
            </div>
            <hr>
            <p style="margin: 20px 0px">Відправляючи замовлення, я підтверджую, що прочитав і згоден(а) з Умовами використання</p>
            <hr>
            <Button
                class="confirm-button"
                label="Підтвердити замовлення"
            />
        </div>
    </div>
</template>

<script>
import {defineComponent} from 'vue'
import { mapGetters } from "vuex";
import Button from "primevue/button";


export default defineComponent({
    name: "ConfirmPayment",
    props: ['products'],
    components: { Button },
    computed: mapGetters(['getTotalSummary',])

})
</script>


<style scoped>

.confirm-button{
    margin-top: 20px;
    width: 100%;
    border-radius: 5px;
    background: #2d079d;
}
.confirm-button:enabled:hover{
    margin-top: 20px;
    width: 100%;
    border-radius: 5px;
    background: #2d079d;
}
.repeat-confirm-summary{
    width: 100%;
    line-height: 110%;
    color: #555;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}
.confirm-summary{
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    color: #111;
}
.confirm-product{
    width: 400px;
    margin-top: 20px;
    background: white;
    border-radius: 10px;
    padding: 20px;
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

.confirm-button{
    margin-top: 20px;
    width: 100%;
    border-radius: 5px;
    background: #2d079d;
}
.confirm-button:enabled:hover{
    margin-top: 20px;
    width: 100%;
    border-radius: 5px;
    background: #2d079d;
}
.repeat-confirm-summary{
    width: 100%;
    line-height: 110%;
    color: #555;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}
.confirm-summary{
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    color: #111;
}
.confirm-product{
    width: 400px;
    margin-top: 20px;
    background: white;
    border-radius: 10px;
    padding: 20px;
}

</style>