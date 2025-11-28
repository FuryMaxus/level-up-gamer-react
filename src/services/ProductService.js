import axios from "axios";
import axiosProtected from "../config/axiosConfig";
import { URL_PRODUCTOS } from "../config/urls";


class ProductService {

    getAllProducts(){
        return axios.get(URL_PRODUCTOS);
    }

    getProductById(id){
        return axios.get(`${URL_PRODUCTOS}/${id}`);
    }

    createProduct(product) {
        return axiosProtected.post(URL_PRODUCTOS, product);
    }

    updateProduct(id,product){
        return axiosProtected.put(`${URL_PRODUCTOS}/${id}`, product);
    }

    deleteProduct(id) {
        return axiosProtected.delete(`${URL_PRODUCTOS}/${id}`)
    }
}

export default new ProductService();