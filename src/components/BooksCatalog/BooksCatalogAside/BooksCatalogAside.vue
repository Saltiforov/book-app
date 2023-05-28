<template>
            <div class="wrapper_aside">
                <div style="padding: 20px">
                    <div class="filter-block">
                        <div class="filter-block-title">
                            <p >Фільтри</p>
                        </div>

                        <div class="flex align-items-center filter-item">
                            <Checkbox  @change="handleFiltersData( 'special_price' , discount)" v-model="discount" inputId="ingredient1" name="discount" value="true"/>
                            <label for="ingredient1" class="ml-2"> Знижка </label>
                        </div>
                        <div class="flex align-items-center filter-item">
                            <Checkbox @change="handleFiltersData( 'is_top_sale' ,sales_hits)" v-model="sales_hits" inputId="ingredient1" name="sales_hits" value="true"/>
                            <label for="ingredient1" class="ml-2"> Хіти продажу </label>
                        </div>
                        <div class="flex align-items-center filter-item">
                            <Checkbox @input="handleFiltersData( 'pending' ,pending)" v-model="pending" inputId="ingredient1" name="pending" value="pending"/>
                            <label for="ingredient1" class="ml-2"> Хіти продажу </label>
                        </div>

                    </div>
                    <div class="filter-block">
                        <div class="filter-block-title">
                            <p >Тип книги</p>
                        </div>
                        <div class="flex align-items-center filter-item">
                            <Checkbox  @change="handleFiltersData( 'papery' ,book_type)" v-model="book_type.code" inputId="ingredient1" name="papery" value="papery"/>
                            <label for="ingredient1" class="ml-2">
                                Паперова
                            </label>
                        </div>
                    </div>
                    <div class="filter-block">
                        <div class="filter-block-title">
                            <p >Наявність</p>
                        </div>
                        <div class="flex align-items-center filter-item">
                            <Checkbox  @change="handleFiltersData( 'availability' ,available)" v-model="available" inputId="ingredient1" name="availability"
                                      value="true"/>
                            <label for="ingredient1" class="ml-2">
                                Товари в наявності
                            </label>
                        </div>
                    </div>
                    <div class="filter-block">
                        <div class="filter-block-title">
                            <p >Мова</p>
                        </div>
                        <div class="flex align-items-center filter-item">
                            <Checkbox @change="handleFiltersData( 'language' ,languages)" v-model="languages" inputId="ingredient1" name="ukraine" value="ukraine"/>
                            <label for="ingredient1" class="ml-2"> Українська </label>
                        </div>
                        <div class="flex align-items-center filter-item">
                            <Checkbox @change="handleFiltersData( 'language' ,languages)" v-model="languages" inputId="ingredient1" name="german" value="german"/>
                            <label for="ingredient1" class="ml-2"> Німецька </label>
                        </div>
                        <div class="flex align-items-center filter-item">
                            <Checkbox @change="handleFiltersData( 'language' ,languages)" v-model="languages" inputId="ingredient1" name="spanish" value="spanish"/>
                            <label for="ingredient1" class="ml-2"> Іспанська </label>
                        </div>
                        <div class="flex align-items-center filter-item">
                            <Checkbox @change="handleFiltersData( 'language' ,languages)" v-model="languages" inputId="ingredient1" name="english" value="english"/>
                            <label for="ingredient1" class="ml-2"> Англійська </label>
                        </div>
                        <div class="flex align-items-center filter-item">
                            <Checkbox @change="handleFiltersData( 'language' ,languages)" v-model="languages" inputId="ingredient1" name="french" value="french"/>
                            <label for="ingredient1" class="ml-2"> Французька </label>
                        </div>

                    </div>
                    <div class="filter-block">
                        <div class="filter-block-title ">
                            <p >Ціна</p>
                        </div>
                        <div class="filter-block_price">
                            <InputNumber class="input-price" v-model="price.minPrice"  inputId="percent" prefix="Від  " />
                            <InputNumber  class="input-price" v-model="price.maxPrice" inputId="percent" prefix="До  " />
                        </div>
                        <div class="price-btn">
                            <Button @click="handleFiltersData( 'price' ,price)"  label="Застосувати" :disabled="priceBtn" />
                        </div>
                    </div>
                </div>
            </div>
</template>

<script>
import {defineComponent} from 'vue'
import Checkbox from 'primevue/checkbox';
import InputNumber from 'primevue/inputnumber';
import Button from "primevue/button";

export default defineComponent({
    name: "BookGoodsAside",
    components: {Checkbox, InputNumber, Button },
    data() {
        return {
            discount: null,
            sales_hits: null,
            pending: null,
            book_type: {title: 'Паперова', code: ''},
            languages: [],
            price: {
                minPrice: '',
                maxPrice: '',
            },
            priceBtn: false,
            filtersData: {},
        }
    },
    methods: {
        handleFiltersData(code, filtersValue) {
            if(filtersValue){
                this.filtersData[code] = filtersValue;
                this.$emit('handleFiltersData', this.filtersData)
            }
        },
    },
    computed: {

    }

})
</script>

<style scoped>

.quantity-books{
    padding: 20px 40px 10px 40px;
    font-family: inherit;
    font-weight: 500;
    font-size: 20px;
    line-height: 100%;
    font-style: normal;
}

.book-goods {
    background: #dad7d7;
    height: auto;
}
.wrapper_main{
    background: white;
    width: 1250px;
    border-radius: 10px;

}

.wrapper-main_content{
    padding: 10px 0px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
    justify-items: center;
}

.wrapper {
    width: 1600px;
    margin: 30px auto;
    height: 100%;
    padding: 20px 20px;
    display: flex;
    justify-content: space-between;
}
.filter-block-title{
    margin-bottom: 10px;
}
.filter-block-title p{
    font-size: 18px;
}
.wrapper_aside {
    width: 270px;
    height: 100%;
    background: white;
    border-radius: 10px;
}

.filter-block {
    margin-bottom: 30px;
}
.filter-item{
    margin-bottom: 15px;
}
.search_publisher{
    border-radius: 10px;
}
:deep(.p-inputnumber-input) {
    width: 100px;
    border-radius: 10px;
}
.filter-block_price{
    display: flex;
    justify-content: space-between;

}
.p-button:disabled{
    background: #c4c4c4;
}
.p-button:enabled:hover{
    background: #2196F3;
    border: 1px solid #ffffff;
    border-radius: 10px;
}
.price-btn{
    margin-top: 10px;
}
:deep(.p-button) {
    border: 1px solid #ffffff;
    width: 100%;
    border-radius: 10px;
}

</style>
