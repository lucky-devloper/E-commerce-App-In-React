import React, { useContext, useEffect } from 'react';
import { CartContext } from '../Context/Context';
import CardItem from './CardItem';
import Filters from './Filters';

function Home() {
  const { state: { product }, productstate: { searchQuary, byStock, byFastDelivery, sort, byRating } } = useContext(CartContext);


  const transformproducts = () => {
    let sortedproduct = product;

    if (sort) {
      sortedproduct = sortedproduct.sort((a, b) =>
        sort == "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (!byStock) {
      sortedproduct = sortedproduct.filter((prod)=> prod.inStock)
    }
    if (byFastDelivery) {
      sortedproduct = sortedproduct.filter((prod)=> prod.fastDelivery)
    }
    if (byRating) {
      sortedproduct = sortedproduct.filter((prod)=> prod.rating >= byRating)
    }
    if (searchQuary) {
      sortedproduct = sortedproduct.filter((prod)=> prod.name.toLowerCase().includes(searchQuary))
    }
    return sortedproduct
  };


  return (
    <div className='home'>
      <Filters />
      <div className="product-container">
        {transformproducts().map((item) => {
          return <CardItem product={item} key={item.id} />
        })}
      </div>
    </div>
  );
}

export default Home;
