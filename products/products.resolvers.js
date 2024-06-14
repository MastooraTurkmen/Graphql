const productsModal = require('./products.modal')

module.exports = {
    Query: {
        products: () => {
            return productsModal.getAllProducts;
        },
        productsByPrice: (_, args) => {
            return productsModal.getProductsByPrice(args.min, args.max);
        },
        product: (_, args) => {
            return productsModal.getAllProductById(args.id)
        }
    }
}