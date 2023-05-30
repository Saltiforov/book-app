import {createStore} from 'vuex'

export default createStore({
    state() {
        return {
            count: 0,
            basket: [],
            books: [],
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        ADD_TO_BASKET(state, book) {
            if (state.basket.length) {
                let isProductExists = false;
                state.basket.map(item => {
                    if (item.book_id === book.book_id) {
                        isProductExists = true
                        item.quantity++
                    }
                })
                if (!isProductExists) {
                    book.quantity = 1
                    state.basket.push(book);
                }
            } else {
                book.quantity = 1
                state.basket.push(book);
            }
            localStorage.setItem('cart', JSON.stringify(state.basket))
        },
        updateCartItems(state, items) {
            state.basket = items;
        },
        emptyBasket(state, item) {
             localStorage.removeItem('cart')
              state.basket = item
        }

    },
    getters: {
        getBasketItems(state) {
            return state.basket
        },
        getBasketCount(state) {
            return state.basket.reduce((acc, value) => {
                return acc += +value.quantity
            }, 0)
        },
        getTotalSummary(state) {
            return state.basket.reduce((acc, value) => {
                return acc += +value.price * value.quantity
            }, 0)
        },
        getProductList(state) {
            return state.books
        },

    },
    actions: {
        addToBasket({commit}, item) {
            commit('addToCart', item);
        },
        loadCartItems({commit}) {
            const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
            commit('updateCartItems', cartItems);
        },
        clearBasket({commit}) {
            commit('emptyBasket', [])
        }
    }
})
