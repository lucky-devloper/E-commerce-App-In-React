import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Container, FormControl, Navbar, Dropdown } from 'react-bootstrap'
import { CartContext } from '../Context/Context'
import { FaRupeeSign } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'
import Button from 'react-bootstrap/Button';


function Header() {
    const { state: { cart }, dispatch, productstate: {searchQuary}, productdispatch } = useContext(CartContext)

    return (
        <Navbar bg="dark" variant="dark" style={{ height: 60 }}>
            <Container>
                <Navbar.Brand>
                    <Link to='/'>THE SHOPEASE</Link>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl style={{ width: 500 }} placeholder='search a product...' className='m-auto' onChange={(e)=> productdispatch({type: 'Filter-By-Search', payload: e.target.value})}/>
                </Navbar.Text>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <i className="fa-solid fa-cart-shopping"></i> <sup>{cart.length}</sup>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ width: "450px", maxHeight: "250px", overflowY: 'auto', padding: '10px 10px' }} className='dropdown'>
                        {cart.length > 0 ? (
                            <>
                                {cart.map((item) => {
                                    return <span className='cartitem' key={item.id}>
                                        <img src={item.image} alt="" className='cartItemImg' />
                                        <span>
                                            <p>{item.name}</p>
                                            <p><FaRupeeSign />{item.price}</p>
                                        </span>
                                        <AiFillDelete fontSize='30px' cursor='pointer' onClick={() => dispatch({ type: "Remove-To-Cart", payload: item })} />
                                    </span>
                                })}
                                <Link to='/cart'><Button variant="primary" size="lg" style={{ width: '100%' }}>Go To Cart</Button></Link>
                            </>
                        ) : (
                            <Dropdown.Item href="#2">Card is Empty</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Navbar>
    )
}

export default Header