import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../Context/Context'
import { FaRupeeSign } from 'react-icons/fa';
import Rating from './Rating';
import { AiFillDelete } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';

function Cartproduct() {
  const [total, setTotal] = useState()
  const { state: { cart }, dispatch } = useContext(CartContext)
  // console.log(cart);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0))
  }, [cart])

  return (
    <div className="home">
      <div className="cart-product-container">
        {cart.map((prod) => {
          return <div key={prod.id} className="cart-container">
            <div className='prodDetails'>
              <img src={prod.image} alt="" />
              <h3>{prod.name}</h3>
              <h3><FaRupeeSign />{prod.price}</h3>
            </div>
            <div className="quantity">
              <div className="rating"><Rating rating={prod.rating} /></div>
              <select value={prod.qty} onChange={(e)=> dispatch({type: 'Change-Cart-Quantity', payload: {id: prod.id, qty: e.target.value}})}>
                {[...Array(prod.inStock)].map((_, index) => {
                  return <option key={index} value={index + 1}>{index + 1}</option>
                })}
              </select>
              <AiFillDelete fontSize='30px' cursor='pointer' onClick={() => dispatch({ type: 'Remove-To-Cart', payload: prod })} />
            </div>
          </div>
        })}
      </div>
      <div className="menu-bar">
        <h1 className="title">SubTotal ({cart.length}) Items</h1>
        <h3 className='total-price'>Total: <FaRupeeSign />{total}</h3>
        <Button variant="success" size="lg" disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  )
}

export default Cartproduct