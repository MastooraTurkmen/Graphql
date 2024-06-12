const productsModal = require('./products.modal')

module.exports = {
    Query: {
        products: () => {
            return productsModal.getAllProducts;
        }
    }
}