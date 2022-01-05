import React from 'react';
import './App.css';
import product from './Products';


function product(productData) {
    // const products1 = product.map((product) => (
    //     <div>{productsData.image}
    //     <p>{productsData.name}</p> 
    //     <p>{productsData.price}</p>
    //     </div>
    //      ));
    return (
  <div>
    <p>{productData.name}</p>
    <p>{productData.price}</p>
    <img src={productData.image}/>
  </div>
    );
}

export default product
