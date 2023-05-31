<template>
    <div class="book-goods">
        <div class="wrapper">
            <BookGoodsAside
                @handleFiltersData="handleFiltersData"
            />
            <div class="wrapper_main">
                <div class="quantity-books">{{ this.books.length || '0' }} товари</div>
                <div class="wrapper-main_content">
                    <BookCard
                            v-for="book in books"
                            :key="book.id"
                            :book="book"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {defineComponent} from 'vue'
import BookCard from "@/components/BooksCatalog/BookCard/BookCard.vue";
import BookGoodsAside from "@/components/BooksCatalog/BooksCatalogAside/BooksCatalogAside.vue";
import {createFilterURL} from "@/services/filters";
// import { mapGetters } from "vuex";
import APIService from "../../services/api";

export default defineComponent({
    name: "BookGoods",
    props: ['searchText'],
    components: {BookCard, BookGoodsAside},
    data() {
        return {
            books: null,
            filtersData: {},
            apiService: null,
            book: null,
        }
    },

    methods: {
        async handleFiltersData(filtersData) {
            this.books = await createFilterURL(filtersData, 'books');
        }
    },
    computed: {

    },
    async mounted() {
        this.apiService = new APIService()
        this.books = await this.apiService.getBooks()
    },
    watch: {
        searchText: {
            immediate: true,
            handler(newText) {
                this.books = this.handleFiltersData({mainSearchValue: newText})
            }
        }
    },


})
</script>

<style scoped>

.quantity-books {
    padding: 20px 40px 10px 40px;
    font-family: inherit;
    font-weight: 500;
    font-size: 20px;
    line-height: 100%;
    font-style: normal;
}

.book-goods {
    min-height: 89.4vh;
}

.wrapper_main {
    background: white;
    width: 1250px;
    border-radius: 10px;

}

.wrapper-main_content {
    padding: 10px 0px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
    justify-items: center;
}

.wrapper {
    width: 1600px;
    margin: 30px auto 0px;
    height: 100%;
    padding: 20px 20px;
    display: flex;
    justify-content: space-around;
}

.filter-block-title p {
    font-size: 18px;
}

:deep(.p-button) {
    border: 1px solid #ffffff;
    width: 100%;
    border-radius: 10px;
}

</style>
