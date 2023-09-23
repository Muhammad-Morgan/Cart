import React from 'react'
import Nav from './Nav'
import CartItem from './CartItem'
import {useGlobalContext} from './Context'
const App = () => {
    const { isloading, clearAll, price } = useGlobalContext()
if (isloading) {
    return <main>
        <Nav />
        <h1
        style={{textAlign: 'center'}}
        >Loading...</h1>
    </main>
}
    return (
        <main>
            <Nav />
            <h2>Your Bag</h2>
            <section className="list-container">
                <CartItem />
            </section>
            <hr className='secret-line' />
            <section className="footer">
                <p className='margin-remove'>Total</p>
                <button className="clear-btn"
                onClick={clearAll}
                >
                    Clear Cart
                </button>
                <span className='margin-remove'>
                    ${price}
                </span>
            </section>
        </main>
    )
}

export default App