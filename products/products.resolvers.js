const productsModal = require('./products.modal')

module.exports = {
    Query: {
        products: () => {
            return productsModal.getAllProducts;
        },
        productsByPrice: (parent, args) => {
            args.min, args.max
        }
    }
}