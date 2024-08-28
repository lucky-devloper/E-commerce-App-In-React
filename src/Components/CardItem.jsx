import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rating from './Rating';
import { FaRupeeSign } from "react-icons/fa";
import { CartContext } from '../Context/Context';

function CardItem({ product }) {
  const { state: { cart }, dispatch } = useContext(CartContext)

  return (
    <Card style={{ width: '18rem', height: '30rem'}}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          <FaRupeeSign />{product.price.split(".")[0]}
        </Card.Text>
        <Card.Text>
          {product.fastDelivery ? "Fast Delivery" : "4 days Delivery"}
        </Card.Text>
        <Card.Text>
          <Rating rating={product.rating} style={{ cursor: 'pointer' }} />
        </Card.Text>

        {cart.some((cartprod) => cartprod.id === product.id) ? (
          <Button variant='danger' style={{ marginRight: "10px" }} onClick={() => dispatch({ type: "Remove-To-Cart", payload: product })}>Remove From List</Button>
        ) : (
          <Button disabled={!product.inStock} onClick={() => dispatch({ type: "Add-To-Cart", payload: product })}>
            {!product.inStock ? "Out of Stock" : "Add To Cart"}
          </Button>
        )}

      </Card.Body>
    </Card>
  )
}

export default CardItem