const products = [
    {
        id: 'redshoe',
        description: 'Red shoe',
        price: 42.12,
    },
    {
        id: 'bluejeans',
        description: 'Blue Jeans',
        price: 55.55,
    }
]

function getAllProducts() {
    return products;
}

function getProductsByPrice(min, max) {
    return products.filter((product) => {
        return products.price >= min && product.price < max;
    })
}

function getAllProductById(id) {
    return products.find((product) => {
        return product.id === id
    })
}

module.exports = { getAllProducts, getProductsByPrice, getAllProductById };