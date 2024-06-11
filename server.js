const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql')

const schema = buildSchema(`
    type Query{
      products: [Product]
      orders: [Order]
    }

    type Product{
      id: ID!
      description: String!
      reviews: [Review]
      price: Float!
    }

    type Review {
      rating: Int!
      comment: String
    }
     
    type Order {
      date: String!
      subtotal: Float!
      items: [OderItem]
    }

    type OderItem {
      product: Product!
      quantity: Int!
    }
`);

const root = {
    products: [
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
    ],
    orders: [
        {
            date: '2005-05-05',
            subtotal: 90.22,
            items: [
                {
                    product: {
                        id: 'redshoe',
                        description: 'Old Red Shoe',
                        price: 45.11,
                    },
                    quantity: 2,
                }
            ]
        }
    ]
}

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(3000, () => {
    console.log('Running GraphQL server...');
});
