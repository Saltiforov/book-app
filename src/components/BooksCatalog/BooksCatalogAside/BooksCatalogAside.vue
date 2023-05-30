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
                            <label for="ingredient2" class="ml-2"> Хіти продажу </label>
                        </div>
                        <div class="flex align-items-center filter-item">
                            <Checkbox @input="handleFiltersData( 'pending' ,pending)" v-model="pending" inputId="ingredient1" name="pending" value="pending"/>
                            <label for="ingredient3" class="ml-2"> Хіти продажу </label>
                        </div>

                    </div>
                    <div class="filter-block">
                        <div class="filter-block-title">
                            <p >Тип книги</p>
                        </div>
                        <div class="flex align-items-center filter-item">
                            <Checkbox  @change="handleFiltersData( 'format_type' ,format_type)" v-model="format_type" inputId="ingredient1" name="papery" value="papery"/>
                            <label for="ingredient4" class="ml-2">
                                Паперова
                            </label>
                        </div>
                    </div>
                    <div class="filter-block">
                        <div class="filter-block-title">
                            <p >Наявність</p>
                        </div>
                        <div class="flex align-items-center filter-item">
                            <Checkbox  inputId="ingredient1" name="availability"
                                      value="true"/>
                            <label for="ingredient5" class="ml-2">
                                Товари в наявності
                            </label>
                        </div>
                    </div>
                    <div class="filter-block">
                        <div class="filter-block-title">
                            <p >Мова</p>
                        </div>


                        <div class="flex align-items-center filter-item" v-for="language in languages">
                            <Checkbox
                                @change="handleFiltersData( 'language_type' ,languagesValue)"
                                v-model="languagesValue"
                                inputId="ingredient1"
                                name="ukraine"
                                :value="language.code"
                            />
                            <label for="ingredient6" class="ml-2"> {{ language.name }} </label>
                        </div>

                    </div>

                    <div class="filter-block">
                        <div class="filter-block-title ">
                           <div class="min-price">
                               <span style="margin-right: 5px;">Максимальна ціна :</span>
                               <span>{{ this.priceRange ? this.priceRange[0] : 0 }}</span>
                           </div>
                           <div class="max-price">
                               <span style="margin-right: 5px;">Мінімальна ціна :</span>
                               <span>{{ this.priceRange ? this.priceRange[1] : 100 }}</span>
                           </div>
                        </div>
                        <div class="filter-block_price">
                            <Slider
                                @change="handleFiltersData('price', priceRange)"
                                v-model="priceRange"
                                range class="w-14rem"
                            />
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
import APIService from "@/services/api";

export default defineComponent({
    name: "BookGoodsAside",
    components: {Checkbox, InputNumber, Button },
    data() {
        return {
            discount: null,
            sales_hits: null,
            pending: null,
            format_type: null,
            languagesValue: [],
            languages: null,
            price: {
                minPrice: '',
                maxPrice: '',
            },
            priceBtn: false,
            filtersData: {},
            apiService: null,
            priceRange: null,
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

    },
    async mounted() {
        this.apiService = new APIService()
        this.languages = await this.apiService.getLanguages()
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
