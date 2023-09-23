const reducer = (state, action) => {
    if (action.type === 'LOADING-START') {
        return { ...state, isloading: true }
    }
    if (action.type === 'LOADING-END') {
        return { ...state, cart: action.payload, isloading: false }
    }
    if (action.type === 'CLEAR-ALL') {
        return { ...state, cart: [] }
    }
    if (action.type === 'REMOVE-ITEM') {
        return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) }
    }
    if (action.type === 'INC') {
        return {
            ...state, cart: state.cart.map((item) => {
                if (action.payload === item.id) {
                    return { ...item, amount: item.amount + 1 }
                }
                return item
            })
        }
    }
    if (action.type === 'DEC') {
        return {
            ...state, cart: state.cart.map((item) => {
                if (action.payload === item.id) {
                    return { ...item, amount: item.amount - 1 }
                }
                return item
            }).filter((item) => item.amount !== 0)
        }
    }
    if (action.type === 'UPDATE') {
        let { totalAmount, totalPrice } = state.cart.reduce((acc, cur) => {
            const { price, amount } = cur
            acc.totalAmount += amount
            acc.totalPrice += amount * price
            return acc
        }, { totalAmount: 0, totalPrice: 0 })
        totalPrice = parseFloat(totalPrice.toFixed(2))
        return { ...state, amount: totalAmount, price: totalPrice }
    }
}

export default reducer