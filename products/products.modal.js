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

module.exports = { getAllProducts };