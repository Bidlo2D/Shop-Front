//import cors from 'cors';
//import { response } from 'express';
export const _count = 15;

export const loadProductsAll = async (_page) => {
    try {
        const response = await fetch(`http://192.168.56.1:8080/products?_limit=${_count}&_page=${_page}`)
        return await response.json()
    }
    catch (err) {
        console.log(err)
    }
}

export const loadProductsByType = async (_type, _page) => {
    try {
        const response = await fetch(`http://192.168.56.1:8080/products?_limit=${_count}&_page=${_page}&_type=${_type}`)
        return await response.json()
    }
    catch (err) {
        console.log(err)
    }
}