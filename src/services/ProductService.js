import axios from "axios";
import apiUsers from "./ApiUsers";

const BASE_URL = 'http://35.174.36.141:8080/api/v1/productos';

class ProductService {

    getAllProducts(){
        return axios.get(BASE_URL);
    }

    getProductById(id){
        return axios.get(`${BASE_URL}/${id}`);
    }

    createProduct(product) {
        return apiUsers.post(BASE_URL,product);
    }

    updateProduct(id,product){
        return apiUsers.put(`${BASE_URL}/${id}`, product);
    }

    deleteProduct(id) {
        return apiUsers.delete(`${BASE_URL}/${id}`)
    }
}

export default new ProductService();