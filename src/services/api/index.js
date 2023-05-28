import axios from "axios";

export default class APIService {
    getUserList() {
        return axios.get('/api/products')
            .then((res) => {
                return res.data;
            })
    }
}
