<template>
    <div>
        <div class="bookCard" >
            <div class="wrapper-book">
                <div class="book-card-content">
                    <div class="book-poster">
                        <span class="book-id">{{this.extractSubstringId}}</span>
                        <a href="">
                            <img src="https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/i/m/img_0239_6.jpg" alt="" class="book-img-item">
                        </a>
                        <div class="book-description">
                        <span
                            class="book-desc-item"
                            v-for="desc in this.book.description"
                            :key="desc"
                        >
                            {{desc}}
                        </span>
                        </div>
                    </div>

                    <div class="book-name">
                        <p>{{truncateNameWord}}</p>
                    </div>

                    <div class="author">
                        <p>{{truncateAuthorWord || 'Ліна Костенко'}}</p>
                    </div>

                    <div class="book-price">
                        <p>{{this.book.price}} грн</p>
                    </div>

                    <p  class="availability">В наявності</p>
                    <p class="status-text" >Доставка по Києву кур'єром завтра</p>
<!--                    <p v-else class="unavailability">Не в наявності</p>-->
                </div>

                <div class="card-buttons">
                    <div class="add-to-card">
                        <Button
                            label="До кошика"
                            @click="addToBasket(book)"
                            class="add-to-card-btn"
                        />
                    </div>
                    <div class="buy-book">
                        <button class="buy-book-btn">Купити</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {defineComponent} from 'vue'
import { mapMutations } from "vuex";
import Button from 'primevue/button';


export default defineComponent({
    name: "BookCard",
    components: { Button },
    props: [ 'book' ],
    data() {
        return {

        }
    },
    methods: {
        ...mapMutations(['ADD_TO_BASKET']),
        addToBasket(book) {
            this.ADD_TO_BASKET(book)
        },
    },
    mounted() {

    },
    computed: {
         truncateNameWord() {
             if(this.book.title.length > 20) {
              return  this.title.name.slice(0, 20) + '...'
             }
             return  this.book.name
         },
         truncateAuthorWord() {
             if(this.book.author) {
                 if (this.book.author.length > 20){
                     return  this.book.author.slice(0, 20) + '...'
                 }
             }
             return  this.book.author
         },
        extractSubstringId() {
            const regex = /^([^-.]+)/;
            const str = '5661304a-96bc-482d-babe-2f4e166e8b85';
            const result = this.book.book_id.match(regex)[0];
            return result
        }
    }
})

</script>


<style scoped>

.status-text{
    font-size: 14px;
    line-height: 15px;
    color: #4A934A;
}
.bookCard{
    height: 360px;
    background: #f8f6f6;
    width: 210px;
    margin-bottom: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.25);
}

.wrapper-book{
    padding: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.book-img-item{
    height: 170px;
    width: 120px;
}

.book-poster{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center
}

.book-id{
    position: absolute;
    z-index: 5;
    background: #ffffff;
    border-radius: 5px;
    padding: 2px;
    left: 10px;
}

.book-description{
    align-self: center;
    margin-bottom: 5px;
}

.book-desc-item{
    color: white;
    padding: 3px;
    background: #9c67d9;
    margin-right: 10px;
    font-weight: 400;
    font-size: 13px;
    line-height: 1;
    font-style: normal;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
}

.book-desc-item:last-child{
    margin-right: 0;
}

.book-name {
    color: black;
    margin-bottom: 5px;
}

.author{
    color: #969292;
    margin-bottom: 5px;
}

.book-price{
    margin-bottom: 5px;
}

.availability{
    color: green;
    margin-bottom: 5px;
}

.unavailability{
    color: red;
    margin-bottom: 5px;
}

.card-buttons{
    display: flex;
    justify-content: space-around;
}

.add-to-card-btn{
    border: 1px solid #ffffff;
    color: white;
    background: orangered;
    padding: 9px;
    cursor: pointer;
    border-radius: 10px
}

.add-to-card-btn:enabled:hover{
    border: 1px solid #ffffff;
    color: white;
    background: orangered;
    padding: 9px;
    cursor: pointer;
    border-radius: 10px
}

.buy-book-btn{
    border: none;
    background: mediumpurple;
    color: white;
    padding: 12px;
    cursor: pointer;
    border-radius: 10px
}

</style>