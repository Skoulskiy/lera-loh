import React from 'react';
import { Product } from './components/Product';
import { products } from './data/products';


function App() {
   return (
    <div className='containet mx-auto max-w-2xl pt-5'>
      <h1>Lera Loh</h1>
      { products.map(product => <Product product={product} key={product.id}/>)}
    </div>
   )
}

export default App;
