<template>
    <div class="basket-card">

      <a style="margin-right: 15px" href="">      <img class="basket-img" :src="getBase64Image(book.image)" alt="Book Image">
      </a>
        <div class="basket-card-info">
            <p class="basket-card__name-book">{{ book.name }}</p>
            <p class="basket-card__author-name">{{ book.author }}</p>
            <div class="basket-card-price">{{ book.price }} грн <span>Паперова</span></div>
            <div>Кількість: {{ book.quantity }}</div>
            <span class="basket-card-availability" >
                <span style="color: green">В наявності</span>
<!--                <span v-else style="color: red">Не в наявності</span>-->
            </span>
            <span class="basket-card-code">Код товару {{ this.extractSubstringId }}</span>
            <p class="basket-delivery" >Доставка по Києву кур'єром сьогодні</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'BasketCard',
    components: {},
    props: ['book'],
    data() {
        return {

        }
    },
    methods: {
      getBase64Image(image) {
        if (image) {
          return `data:image/jpeg;base64, ${image}`;
        }
        return null;
      }
    },
    computed: {
        extractSubstringId() {
            const regex = /^([^-.]+)/;
            const str = '5661304a-96bc-482d-babe-2f4e166e8b85';
            const result = this.book.book_id.match(regex)[0];
            return result
        }
    },
    mounted() {
    }
}
</script>

<style scoped>


.basket-card-info {
    width: 100%;
}

.basket-card {
    padding: 20px;
    display: flex;
    border-bottom: 4px solid #F2F3F6;
}

.basket-img {
    width: 45px;
    height: 56px;
}

.basket-card__name-book {
    font-family: inherit;
    font-weight: 400;
    font-size: 15px;
    line-height: 110%;
    font-style: normal;
    color: #222;
    margin-bottom: 6px;
}

.basket-card__author-name {
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 110%;
    font-style: normal;
    color: #78818D;
    margin-bottom: 6px;
}

.basket-card-price {
    color: black;
    font-weight: 500;
    padding-bottom: 10px;
}

.basket-card-price span {
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    font-style: normal;
    color: #78818D
}
.basket-card-availability{
    margin-right: 10px;
    font-family: inherit;
    font-weight: 400;
    font-size: 15px;
    line-height: 1;
    font-style: normal;

}
.basket-card-code{
    margin-right: 10px;
    font-family: inherit;
    font-weight: 400;
    font-size: 15px;
    line-height: 1;
    font-style: normal;
    color: #78818D
}
.basket-delivery{
    font-size: 14px;
    line-height: 15px;
    color: #4A934A;
}
</style>
