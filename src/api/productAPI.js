export const _count = 15;

export const loadProducts = async (_category, _page) => {
    try {
        let request = "";
        if (_category === "all") {
            request = `http://192.168.56.1:8080/products?_limit=${_count}&_page=${_page}`;
        }
        else {
            request = `http://192.168.56.1:8080/products?_limit=${_count}&_page=${_page}&_category=${_category}`;
        }
        const response = await fetch(request)
        return await response.json()
    }
    catch (err) {
        console.log(err)
    }
}

/* export const loadProductsByType = async (_category, _page) => {
    try {
        const request = `http://192.168.56.1:8080/products?_limit=${_count}&_page=${_page}&_category=${_category}`;
        const response = await fetch(request)
        return await response.json()
    }
    catch (err) {
        console.log(err)
    }
} */