const ordersModel = require('./orders.modal');

module.exports = {
    Query: {
        orders: () => {
            return ordersModel.getAllOrders;
        },
    }
}