import React from 'react'
import { PRODUCTS } from '../../products'
import Product from './Product';
import './shop.css';

function Shop() {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>Let's SHOP</h1>
        </div>
        <div className='products'>
            {PRODUCTS.map((product , i) => (
                <Product data={product} key={i}/>
            ))}
        </div>
    </div>
  )
}

export default Shop
