<template>
    <div class="placing-order">
        <h3 class="order-title">Контактні дані</h3>
        <form action="" class="form-order">

                 <span class="p-float-label form-item">
                      <InputText id="username" type="text" v-model="contactData.first_name"/>
                       <label for="username">Ваше ім’я *</label>
                 </span>

            <span class="p-float-label form-item">
                      <InputText id="username" type="text" v-model="contactData.last_name"/>
                       <label for="username">Ваше прізвище *</label>
                 </span>

            <span class="p-float-label form-item">
                      <InputText id="username" type="text" v-model="contactData.email"/>
                       <label for="username">Електронна пошта *</label>
                 </span>

            <span class="p-float-label form-item">
                        <InputMask id="basic" mask="999-99-9999-999"
                                   placeholder="999-99-9999-999" v-model="contactData.phone"/>
                        <label for="phone">Номер телефону *</label>
                </span>

            <div class="delivery-adress">
                <h3 class="delivery-title">Доставка</h3>
                <div class="delivery-wrapper">
                    <div class="delivery-item">
                        <Dropdown
                                v-model="contactData.delivery_city"
                                editable :options="delivery_cities"
                                optionLabel="name"
                                placeholder="Оберіть назву міста"
                                class="w-full md:w-14rem "
                        />
                    </div>
                    <div class="delivery-item">
                        <Dropdown
                                v-model="contactData.delivery_res"
                                editable :options="delivery_res"
                                optionLabel="name"
                                placeholder="Оберіть номер відділення"
                                class="w-full md:w-14rem"
                        />
                    </div>
                </div>
            </div>

            <div class="comment-order">
                <h4 class="comment-title">Коментар до замовлення</h4>
                <Textarea class="order-textarea" v-model="contactData.comment" autoResize rows="5" cols="116" />
            </div>

        </form>
    </div>
</template>

<script>
import {defineComponent} from 'vue'
import InputText from "primevue/inputtext";
import InputMask from 'primevue/inputmask'
import Textarea from 'primevue/textarea';
import Dropdown from "primevue/dropdown";
import { mapGetters, } from "vuex";

export default defineComponent({
    name: "VOrdering",
    components: { InputText, InputMask, Textarea, Dropdown },
    data() {
        return {
            contactData: {
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                delivery_city: '',
                delivery_res: '',
                comment: '',
                books: this.extractValuesById(this.getBasketItems(), 'book_id') ,
            },
            delivery_cities: [
                { name: 'Київ', code: 'Kyiv' },
                { name: 'Харків', code: 'Kharkiv' },
                { name: 'Одеса', code: 'Odesa' },
                { name: 'Суми', code: 'Sumy' },
                { name: 'Кременчук', code: 'Kremenchuk' },
                { name: 'Ужгород', code: 'Uzhhorod' },
                { name: 'Бровари', code: 'Breweries' },
                { name: 'Рівне', code: 'Rivne' },
            ],
            delivery_res: [
                { name: 'Відділення №1', code: 'number1' },
                { name: 'Відділення №2', code: 'number2' },
                { name: 'Відділення №3', code: 'number3' },
                { name: 'Відділення №4', code: 'number4' },
                { name: 'Відділення №5', code: 'number5' },
                { name: 'Відділення №6', code: 'number6' },
                { name: 'Відділення №7', code: 'number7' },
                { name: 'Відділення №8', code: 'number8' },
            ],
            selectedCity: null,
            selectedDepartment: null,
        }
    },
    methods: {
        ...mapGetters(['getBasketItems']),
        extractValuesById(array, idKey) {
            return array.map(item => item[idKey]);
        }
    },
    watch: {
        contactData: {
            deep: true,
            handler(newValue) {
               this.$emit('sendContactData', newValue )
            },
            immediate: true,
        },
    },
    computed: {
    }

})
</script>


<style scoped>
.order-title{
    padding: 20px 20px 40px 40px;
    font-family: 'Gruppo';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 23px;
}

.placing-order{
    background: white;
    width: 970px;
    height: 776px;
    border-radius: 10px;
    padding: 0 10px;
}

.form-item{
    width: 900px;
    margin: 0  auto 40px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
}

.delivery-adress{
    width: 900px;
    margin: 0 auto;
    padding-bottom: 40px;
}
.delivery-wrapper{
    display: flex;
    justify-content: space-between;
}
.delivery-title{
    padding: 10px;
    font-family: 'Gruppo';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 23px;
    margin-bottom: 20px;
}
.delivery-item{
    width: 430px;
}
.delivery-item div{
    width: 100%;
    border-radius: 10px;
}

.form-item input{
    width: 100%;
    background: #F2F2F2;
}
.comment-order{
    padding: 30px 40px 30px 40px;
}
.comment-title{
    font-family: 'Gruppo';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 23px;
    margin-bottom: 20px;
}
.order-textarea{
    border-radius: 10px;
}

</style>