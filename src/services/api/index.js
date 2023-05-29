import axios from "axios";

export default class APIService {
    getUserList() {
        return axios.get('/api/products')
            .then((res) => {
                return res.data;
            })
    }
    getBookOrders() {
        return axios.get('/api/orders')
            .then((res) => {
                console.log(res.data)
                return res.data;
            })
    }
    getBooks() {
        return axios.get('/api/books')
            .then((res) => {
                console.log('LOX',res.data)
                return res.data;
            })
            .catch(error => {
                console.error(error)
            })
    }
}
