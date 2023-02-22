export const _count = 15;

export const loadProducts = async (_category, _page) => {
    try {
        let request = "";
        if (_category === "all") {
            request = `http://localhost:8080/products?_limit=${_count}&_page=${_page}`;
        }
        else {
            request = `http://localhost:8080/products?_limit=${_count}&_page=${_page}&_category=${_category}`;
        }
        const response = await fetch(request)
        return await response.json()
    }
    catch (err) {
        console.log(err)
    }
}
