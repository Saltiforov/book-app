<template>
  <div class="wrapper_aside" v-if="books">
    <div style="padding: 20px">
      <div class="filter-block">
        <div class="filter-block-title">
          <p>Фільтри</p>
        </div>

        <div class="flex align-items-center filter-item">
          <Checkbox @change="handleFiltersData( 'special_price' , discount)" v-model="discount" inputId="ingredient1"
                    name="discount" value="true"/>
          <label for="ingredient1" class="ml-2"> Знижка </label>
        </div>
        <div class="flex align-items-center filter-item">
          <Checkbox @change="handleFiltersData( 'is_top_sale' ,sales_hits)" v-model="sales_hits" inputId="ingredient1"
                    name="sales_hits" value="true"/>
          <label for="ingredient2" class="ml-2"> Хіти продажу </label>
        </div>

      </div>
      <div class="filter-block">
        <div class="filter-block-title">
          <p>Тип книги</p>
        </div>
        <div class="flex align-items-center filter-item">
          <Checkbox @change="handleFiltersData( 'format_type' ,format_type)" v-model="format_type" inputId="ingredient1"
                    name="papery" value="papery"/>
          <label for="ingredient4" class="ml-2">
            Паперова
          </label>
        </div>
        <div class="flex align-items-center filter-item">
          <Checkbox @change="handleFiltersData( 'format_type' ,format_type)" v-model="format_type" inputId="ingredient2"
                    name="electronic" value="electronic"/>
          <label for="ingredient4" class="ml-2">
            Електронна
          </label>
        </div>
      </div>
      <div class="filter-block">
        <div class="filter-block-title">
          <p>Наявність</p>
        </div>
        <div class="flex align-items-center filter-item">
          <Checkbox @change="handleFiltersData( 'available' ,available)" v-model="available" inputId="ingredient3"
                    name="available" value="true"/>
          <label for="ingredient4" class="ml-2">
            Товар в наявності
          </label>
        </div>
      </div>
      <div class="filter-block">
        <div class="filter-block-title">
          <p>Мова</p>
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
          <h4 class="block-prices__title">Ціна</h4>
        <div class="block-prices ">

          <div class="max-price">
            <span class="max-price__text">від:</span>
            <span>{{ this.priceRange ? this.priceRange[0] : 0 }} <span style="font-size: 15px">₴</span></span>
          </div>
          <div class="min-price">
            <span  class="min-price__text">до:</span>
            <span>{{ this.priceRange ? this.priceRange[1] : 100 }}<span style="font-size: 15px">₴</span></span>
          </div>
        </div>
        <div class="filter-block_price">
          <Slider
              @change="handlePriceRange"
              v-model="priceRange"
              range class="w-14rem"
              :max="maxPrice"
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
  components: { Checkbox, InputNumber, Button },
  data() {
    return {
      discount: null,
      sales_hits: null,
      pending: null,
      format_type: null,
      languagesValue: [],
      languages: null,
      available: null,
      price: {
        minPrice: '',
        maxPrice: '',
      },
      priceBtn: false,
      filtersData: {},
      apiService: null,
      priceRange: [0, 100],
      books: null,
      maxPrice: 100,
    }
  },
  methods: {
    handleFiltersData(code, filtersValue) {
      if (filtersValue) {
        this.filtersData[code] = filtersValue;
        this.$emit('handleFiltersData', this.filtersData);
      }
    },
    handlePriceRange() {
      this.handleFiltersData('price', this.priceRange);
    },
    async calculateMaxPrice() {
      // Calculate the maximum price from the books
      let maxPrice = 0;
      this.books.forEach(book => {
        if (book.price > maxPrice) {
          maxPrice = book.price;
        }
      });
      this.priceRange[0] = 0;
      this.priceRange[1] = maxPrice;
      this.maxPrice = maxPrice;
    },
  },
  computed: {
    getMaxPrice() {
      return this.maxPrice;
    }
  },
  async mounted() {
    this.apiService = new APIService();
    this.languages = await this.apiService.getLanguages();
    this.books = await this.apiService.getBooks();
    await this.calculateMaxPrice();
  },
});
</script>

<style scoped>


.max-price__text, .min-price__text{
    margin-right: 5px;
    font-family: "Mabry Pro", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    font-style: normal;
    color: #626B77;
}
.block-prices__title{
    display: block;
    width: 100%;
    height: auto;
    color: #222;
    font-family: "Mabry Pro", sans-serif;
    font-weight: 500;
    font-size: 17px;
    line-height: 100%;
    font-style: normal;
    margin-bottom: 10px;
}
.p-slider.p-slider-horizontal{
    height: 0.6rem;
    border-radius: 10px;
}
:deep(.p-slider-handle:hover){
    background: white !important;
}


.max-price{
    font-size: 18px;
}
.min-price{
    font-size: 18px;
}

.block-prices{
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
}
.filter-block-title{
    margin-bottom: 15px;
    display: block;
    width: 100%;
    height: auto;
    color: #222;
    font-family: "Mabry Pro", sans-serif;
    font-weight: 500;
    font-size: 15px;
    line-height: 100%;
    font-style: normal;
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

.filter-item {
  margin-bottom: 15px;
    color: #626B77;
    font-family: "Mabry Pro", sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 120%;
    font-style: normal;
}

.search_publisher {
  border-radius: 10px;
}

:deep(.p-inputnumber-input) {
  width: 100px;
  border-radius: 10px;
}

.filter-block_price {
  display: flex;
  justify-content: space-between;

}

.p-button:disabled {
  background: #c4c4c4;
}

.p-button:enabled:hover {
  background: #2196F3;
  border: 1px solid #ffffff;
  border-radius: 10px;
}

.price-btn {
  margin-top: 10px;
}

:deep(.p-button) {
  border: 1px solid #ffffff;
  width: 100%;
  border-radius: 10px;
}

</style>
