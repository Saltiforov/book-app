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
                return res.data;
            })
            .catch(error => {
                console.error(error)
            })
    }

    getSuppliers() {
        return axios.get('/api/suppliers')
            .then((res) => {
                return res.data;
            })
            .catch(error => {
                console.error(error)
            })
    }

    getAllUsers() {
        return axios.get('/api/users')
            .then((res) => {
                return res.data;
            })
            .catch(error => {
                console.error(error)
            })
    }

    getLanguages() {
        return axios.get('/api/languages')
            .then((res) => {
                return res.data;
            })
            .catch(error => {
                console.error(error)
            })
    }
    getSalesReports() {
        return axios.get('/api/sales-reports')
            .then((res) => {
                return res.data;
            })
            .catch(error => {
                console.error(error)
            })
    }

    getSupplierReports() {
        return axios.get('/api/supplier-report')
            .then((res) => {
                return res.data;
            })
            .catch(error => {
                console.error(error)
            })
    }
    deleteBook(id) {
        return axios.delete(`/api/books/${id}`)
    }
    deleteOrderItem(id) {
        return axios.delete(`/api/order-item/${id}`)
    }
}
