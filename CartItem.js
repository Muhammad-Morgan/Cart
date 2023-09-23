import React, { useState } from 'react'
import { useGlobalContext } from './Context'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'
const CartItem = () => {
  const { cart, removeItem, counter, incCounter, decCounter } = useGlobalContext()
  return (
    <section className='main-list'>
      {cart.map(({ id, title, price, img, amount }) => {
        return (
          <article key={id} className="single-item">
            <div className="sub-list">
              <img className='mob-icon' src={img} alt="icon" />
              <div className="sub-mini-list">
                <h4>{title}</h4>
                <p>${price}</p>
                <button
                  onClick={() => removeItem(id)}
                >remove</button>
              </div>
            </div>
            <div className="buttons-container">
              <button
                onClick={() => incCounter(id)}
              >
                <FaAngleUp className='arrow-button' />
              </button>
              <h3
                style={{ margin: '0' }}
              >{amount}</h3>
              <button
                onClick={() => decCounter(id)}
              >
                <FaAngleDown className='arrow-button' />
              </button>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default CartItem