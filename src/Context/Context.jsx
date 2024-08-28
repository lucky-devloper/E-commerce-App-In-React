import React, { createContext, useReducer } from 'react'
import { faker } from '@faker-js/faker'
import cartreducer from './cartreducer'
import reducer from './reducer'

export const CartContext = createContext()

faker.seed(99)
function Context({ children }) {
    const products = [...Array(20)].map(() => ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.imageUrl(640, 480, 'clothes', true, true),
        inStock: faker.helpers.arrayElement([0, 3, 6, 8]),
        fastDelivery: faker.datatype.boolean(),
        rating: faker.helpers.arrayElement([1, 2, 3, 4, 5])
    }))

    // ***************************** useReducer ***************************

    const [state, dispatch] = useReducer(cartreducer, {
        product: products,
        cart: []
    })

    const [productstate, productdispatch] = useReducer(reducer, {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuary: ""
    })

    return (
        <CartContext.Provider value={{ state, dispatch, productstate, productdispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export default Context