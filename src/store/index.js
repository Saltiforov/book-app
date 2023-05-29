import {createStore} from 'vuex'

export default createStore({
    state() {
        return {
            count: 0,
            basket: [],
            books: [
                {
                    img: 'https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/i/m/img_0239_6.jpg',
                    name: 'Триста поезій',
                    author: 'Ліна Костенко',
                    id: 12332,
                    description: ['Акция', 'Хит',],
                    price: '350',
                    language: 'ukraine',
                    availability: true
                },
                {
                    img: 'https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/4/8/48677_80036_7.jpg',
                    name: '48 законів влади',
                    author: 'Роберт Грін',
                    id: 23443,
                    description: ['Акция', 'Хит'],
                    price: '210',
                    language: 'ukraine',
                    availability: true
                },
                {
                    img: 'https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/m/y/mystetstvo_vijny.jpg',
                    name: 'Мистецтво війни',
                    author: 'Сунь-цзи',
                    id: 23143,
                    description: ['Акция', 'Хит'],
                    price: '180',
                    language: 'ukraine',
                    availability: false
                },
                {
                    img: 'https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/m/i/misto_divchat_face_ean1_1.jpg',
                    name: 'Місто дівчат',
                    author: 'Елізабет Ґілберт',
                    id: 931443,
                    description: ['Акция', 'Хит'],
                    price: '380',
                    language: 'ukraine',
                    availability: true
                },
                {
                    img: 'https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/i/m/img018_1_26.jpg',
                    name: 'Ігри, у які грають люди',
                    author: 'Ерік Берн',
                    id: 231457,
                    description: ['Акция', 'Хит'],
                    price: '265',
                    language: 'ukraine',
                    availability: false
                },
                {
                    img: 'https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/i/m/img651_cr_3.png',
                    name: 'Емоційний інтелект',
                    author: 'Денiел Ґоулман',
                    id: 298457,
                    description: ['Акция', 'Хит'],
                    price: '340',
                    language: 'ukraine',
                    availability: true
                },
                {
                    img: 'https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/i/m/img347_144.jpg',
                    name: 'Тигролови',
                    author: 'Іван Багряний',
                    id: 392057,
                    description: ['Акция', 'Хит'],
                    price: '195',
                    language: 'ukraine',
                    availability: true
                },
                {
                    img: 'https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/i/m/img371_2_18.jpg',
                    name: 'Білий попіл',
                    author: 'Ілларіон Павлюк',
                    id: 934257,
                    description: ['Акция', 'Хит'],
                    price: '250',
                    language: 'ukraine',
                    availability: true
                },
                {
                    img: 'https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/i/m/img570_cr_3.jpg',
                    name: 'Тореадори з Васюківки',
                    author: 'Всеволод Нестайко',
                    id: 52343,
                    description: ['Акция', 'Хит'],
                    price: '250',
                    language: 'ukraine',
                    availability: false
                },
                {
                    img: 'https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/i/m/image00002_2_83.jpg',
                    name: 'Психологiя впливу',
                    author: 'Роберт Чалдіні',
                    id: 874321,
                    description: ['Акция', 'Хит'],
                    price: '390',
                    language: 'ukraine',
                    availability: true
                },
                {
                    img: 'https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/i/m/img_59712.jpg',
                    name: 'Квартира на двох',
                    author: "Бет О'лірі",
                    id: 7249901,
                    description: ['Акция', 'Хит'],
                    price: '240',
                    language: 'ukraine',
                    availability: true
                },
                {
                    img: 'https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/i/m/img_0002_28_69.jpg',
                    name: 'Груффало',
                    author: "Джулія Дональдсон",
                    id: 524411,
                    description: ['Акция', 'Хит'],
                    price: '232',
                    language: 'ukraine',
                    availability: false
                },
                {
                    img: 'https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/p/h/photo_2022-07-28_17-54-53.jpg',
                    name: 'Тіні забутих предків',
                    author: "Михайло Коцюбинський",
                    id: 450211,
                    description: ['Акция', 'Хит'],
                    price: '135',
                    language: 'ukraine',
                    availability: false
                },
                {
                    img: 'https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/5/5/55134_104216_1.jpg',
                    name: 'Карти на стіл',
                    author: "Агата Крісті",
                    id: 452201,
                    description: ['Акция', 'Хит'],
                    price: '220',
                    language: 'ukraine',
                    availability: true
                },
                {
                    img: 'https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/4/1/41816_4410066.jpg',
                    name: 'Гаррі Поттер і келих вогню',
                    author: "Джоан Роулінг",
                    id: 95301,
                    description: ['Акция', 'Хит'],
                    price: '350',
                    language: 'ukraine',
                    availability: true
                },
                {
                    img: 'https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/b/p/bpfpwjykm7ku8icrsam3qc6b9pqybbicfwc8q7pj.jpg',
                    name: 'Фантастичні звірі і де їх шукати',
                    author: "Дж. К. Роулінг",
                    id: 505351,
                    description: ['Акция', 'Хит'],
                    price: '250',
                    language: 'ukraine',
                    availability: true
                },
                {
                    img: 'https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/p/h/photo_2022-08-12_17-56-46_cr.jpg',
                    name: "Кайдашева сiм'я",
                    author: "Іван Нечуй-Левицький",
                    id: 614051,
                    description: ['Акция', 'Хит'],
                    price: '140',
                    language: 'ukraine',
                    availability: false
                },
                {
                    img: 'https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/4/9/49060_24872892.jpg',
                    name: "Гаррі Поттер і Напівкровний Принц",
                    author: "Джоан Роулінг",
                    id: 1146451,
                    description: ['Акция', 'Хит'],
                    price: '350',
                    language: 'ukraine',
                    availability: true
                },
                {
                    img: 'https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/i/m/img_8132.jpg',
                    name: "Бодьо вимовляє перші слова",
                    author: "Марта Галевська-Кустра",
                    id: 21351,
                    description: ['Акция', 'Хит'],
                    price: '550',
                    language: 'ukraine',
                    availability: true
                },
                {
                    img: 'https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/i/m/img_0001_26_44.jpg',
                    name: "Ukraїner. Ukrainian Insider",
                    author: "",
                    id: 810351,
                    description: ['Хит'],
                    price: '850',
                    language: 'english',
                    availability: true
                },
                {
                    img: 'https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/i/m/img658_1_30_1.jpg',
                    name: "Awesome Kyiv",
                    author: "Тамара Кравченко, Світлана Кострикіна",
                    id: 578263,
                    description: ['Акция', 'Хит'],
                    price: '256',
                    language: 'english',
                    availability: true
                },
                {
                    img: 'https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/f/i/file_1092.jpg',
                    name: "The Picture of Dorian Gray",
                    author: "Оскар Уайльд",
                    id: 67543,
                    description: ['Акция', 'Хит'],
                    price: '185',
                    language: 'english',
                    availability: true
                },
                {
                    img: 'https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/i/m/img907_cr_3.jpg',
                    name: "Маленький принц",
                    author: "Антуан де Сент-Екзюпері",
                    id: 948765,
                    description: ['Акция', 'Хит'],
                    price: '85',
                    language: 'french',
                    availability: true
                },
                {
                    img: 'https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/i/m/img364_5_21.jpg',
                    name: "Німецька мова за 4 тижні.",
                    author: "Михайло Смолій, Г. Рауш-Діяс, Пшемислав Вольскі",
                    id: 765321,
                    description: ['Акция', 'Хит'],
                    price: '234',
                    language: 'german',
                    availability: true
                },
                {
                    img: 'https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/i/m/image00001_69.jpg',
                    name: "Deutsch. Просто про найскладніше. Cамовчитель",
                    author: "Станіслав Дугін",
                    id: 198534,
                    description: ['Акция', 'Хит'],
                    price: '363',
                    language: 'german',
                    availability: true
                },
                {
                    img: 'https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/i/m/img900_cr_4.jpg',
                    name: "Самовчитель німецької мови",
                    author: "Сергій Носков",
                    id: 56433,
                    description: ['Акция', 'Хит'],
                    price: '168',
                    language: 'german',
                    availability: true
                },


            ],
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
                    if (item.id === book.id) {
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
        getProductListLength(state) {
            return state.books.length
        }

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
