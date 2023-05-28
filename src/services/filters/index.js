

const BASE_URL = 'http://127.0.0.1:5173';

const routes = {
    systemTasks: '/api/system-tasks',
}

export async function createFilterURL(filtersObject, route) {
    const params = new URLSearchParams();
    console.log('filtersObject', filtersObject)
    if (filtersObject.special_price) {
        params.append('special_price', filtersObject.special_price[0]);
    }

    if (filtersObject.is_top_sale) {
            params.append('is_top_sale', filtersObject.is_top_sale[0]);
    }

    if (filtersObject.pending) {
        params.append('pending', filtersObject.pending[0]);
    }

    if (filtersObject.papery) {
        console.log(filtersObject.papery)
        params.append('book_type', filtersObject.papery.code[0]);
    }

    if (filtersObject.availability) {
        console.log(filtersObject.availability)
        params.append('availability', filtersObject.availability[0]);
    }

    if (filtersObject.language && filtersObject.language.length > 0) {
        const languages = filtersObject.language.map(item => item).join(',');
        params.append('language', languages);
    }

    const queryString = params.toString();
    const url = `${BASE_URL}${routes[route]}${window.location.search
        ? window.location.search + '&' + queryString : '?' + queryString}`;

    console.log(url)

    // return axios
    //     .get(url)
    //     .then(response => {
    //         return response.data;
    //     })
    //     .catch(e => console.log(e));
}
