import { localhost } from './ip.js';
export const _count = 15;

export const loadProducts = async (_category, _page) => {
    try {
        let request = `${localhost}/products/category/${_category}?_limit=${_count}&_page=${_page}`;
        return await fetch(request).then(res => res.json())
    }
    catch (err) {
        console.log(err)
    }
}
/* 
export const loadProducts = async (_category, _colors, _materials, _prices, _page) => {
    try {
        let request = "";
        if (_category === "all") {
            request = `${localhost}/products?_limit=${_count}&_page=${_page}`;
        }
        else {
            request = `${localhost}/products?_limit=${_count}&_page=${_page}&_category=${_category}`;
        }
        return await fetch(request).then(res => res.json())
    }
    catch (err) {
        console.log(err)
    }
} */

export const searchProducts = async (_name) => {
    try {
        return await fetch(`${localhost}/products?_search=${_name}`).then(res => res.json())
    }
    catch (err) {
        console.log(err)
    }
}
