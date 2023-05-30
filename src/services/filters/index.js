import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:5173';

const routes = {
    books: '/api/books',
}

export async function createFilterURL(filtersObject, route) {
    const params = new URLSearchParams();
    console.log('filtersObject', filtersObject)
    if (filtersObject.format_type) {
        params.append('format_type', filtersObject.format_type[0]);
    }

    if (filtersObject.searchBooks) {
        params.append('searchQuery', filtersObject.searchBooks);
    }

    if (filtersObject.mainSearchValue) {
        params.append('searchQuery', filtersObject.mainSearchValue);
    }

    if (filtersObject.ordersText) {
        params.append('search', filtersObject.ordersText);
    }


    if (filtersObject.language_type && filtersObject.language_type.length > 0) {
        const languages = filtersObject.language_type.map(item => item).join(',');
        params.append('language_type', languages);
    }

    if (filtersObject.price) {
        params.append('min_price', filtersObject.price[0]);
        params.append('max_price', filtersObject.price[1]);
    }




/*
    if (filtersObject.max_price) {
        params.append('max_price', filtersObject.max_price);
    }*/

    const queryString = params.toString();
    const url = `${BASE_URL}${routes[route]}${window.location.search ? window.location.search + '&' + queryString : '?' + queryString}`;

    console.log(url)

     return axios
         .get(url)
         .then(response => {
            return response.data;
         })
         .catch(e => console.log(e));
}
