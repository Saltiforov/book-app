<template>
  <div class="confirm-product">
    <div class="ConfirmPayment">
      <div class="confirm-summary">
        <p>До сплати </p>
        <p>{{ getTotalSummary }} грн</p>
      </div>
      <div class="repeat-confirm-summary">
        <p>До сплати </p>
        <p>{{ getTotalSummary }} грн</p>
      </div>
      <hr>
      <p style="margin: 20px 0px">Відправляючи замовлення, я підтверджую, що прочитав і згоден(а) з Умовами
        використання</p>
      <hr>
      <Button
          class="confirm-button"
          label="Підтвердити замовлення"
          @click="this.$emit('confirmPayment')"
      />
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import {mapGetters} from "vuex";
import Button from "primevue/button";
import axios from "axios";

export default defineComponent({
  name: "ConfirmPayment",
  props: ['products'],
  components: {Button},
  computed: mapGetters(['getTotalSummary',]),
  methods: {
    confirmPayment() {
      // TODO ADD DATA FOR NEW ORDER ITEM
      const orderData = {
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@example.com',
        phone: '1234567890',
        delivery_city: 'City',
        delivery_res: 'Residence',
        comment: 'Additional comments',
        books: ['e384489c-b332-47b8-b88f-0db9a522c1bb', '5661304a-96bc-482d-babe-2f4e166e8b85']
      };

      axios.post('/api/order-item', orderData);
      },
    }
})
</script>


<style scoped>

.confirm-button {
  margin-top: 20px;
  width: 100%;
  border-radius: 5px;
  background: #2d079d;
}

.confirm-button:enabled:hover {
  margin-top: 20px;
  width: 100%;
  border-radius: 5px;
  background: #2d079d;
}

.repeat-confirm-summary {
  width: 100%;
  line-height: 110%;
  color: #555;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.confirm-summary {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  color: #111;
}

.confirm-product {
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

.product-cart__img img {
  width: 82px;
  height: 105px;
}

.confirm-button {
  margin-top: 20px;
  width: 100%;
  border-radius: 5px;
  background: #2d079d;
}

.confirm-button:enabled:hover {
  margin-top: 20px;
  width: 100%;
  border-radius: 5px;
  background: #2d079d;
}

.repeat-confirm-summary {
  width: 100%;
  line-height: 110%;
  color: #555;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.confirm-summary {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  color: #111;
}

.confirm-product {
  width: 400px;
  margin-top: 20px;
  background: white;
  border-radius: 10px;
  padding: 20px;
}

</style>