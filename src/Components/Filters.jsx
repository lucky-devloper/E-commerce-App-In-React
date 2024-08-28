import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Rating from './Rating';
import { CartContext } from '../Context/Context';

function Filters() {
    const { productstate: { byStock, byFastDelivery, sort, byRating }, productdispatch } = useContext(CartContext)

    return (
        <div className='menu-bar'>
            <span className='formtitle'>Filter Product</span>
            <div className='formtext'>
                <Form.Check
                    onChange={() => productdispatch({ type: 'Sort-By-Price', payload: 'lowToHigh' })}
                    checked={sort == 'lowToHigh' ? true : false}
                    inline
                    label="Ascending"
                    name="group1"
                    type="radio"
                    id={`inline-1`}
                />
            </div>
            <div className='formtext'>
                <Form.Check
                    onChange={() => productdispatch({ type: 'Sort-By-Price', payload: 'HighTolow' })}
                    checked={sort == 'HighTolow' ? true : false}
                    inline
                    label="Descending"
                    name="group1"
                    type="radio"
                    id={`inline-2`}
                />
            </div>
            <div className='formtext'>
                <Form.Check
                    onChange={() => productdispatch({ type: 'Filter-By-Stock' })}
                    checked={byStock}
                    inline
                    label="Include Out of Stock"
                    name="group1"
                    type='checkbox'
                    id={`inline-3`}
                />
            </div>
            <div className='formtext'>
                <Form.Check
                    onChange={() => productdispatch({ type: 'Filter-By-Delivery' })}
                    checked={byFastDelivery}
                    inline
                    label="Free Delivery Only"
                    name="group1"
                    type='checkbox'
                    id={`inline-4`}
                />
            </div>
            <div>
                <label style={{ paddingRight: 10 }}>Rating:</label>
                <Rating rating={byRating} onClick={(index) => productdispatch({ type: 'Filter-By-Rating', payload: index })} style={{ cursor: "pointer" }} />
            </div>
            <Button variant="light" size="lg" onClick={()=> productdispatch({type: 'Clear-Filter'})}>
                Clear Filter
            </Button>
        </div>
    )
}

export default Filters