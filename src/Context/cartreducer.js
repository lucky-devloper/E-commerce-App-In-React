const cartreducer = (state, action) => {
    switch (action.type) {
        case 'Add-To-Cart':
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, qty: 1 }]
            }
        case 'Remove-To-Cart':
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id)
            }
        case 'Change-Cart-Quantity':
            return {
                ...state,
                cart: state.cart.filter((item) => item.id === action.payload.id ? item.qty = action.payload.qty : item.qty)
            }
        default:
            return state;
    }
}

export default cartreducer