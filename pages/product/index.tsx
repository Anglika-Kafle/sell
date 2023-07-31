// import React from 'react'
// import Test from './productid'
// function test1() {
//     let products = [
//         {id: 1, title: 'Germany', description: 'hello'},
//         {id: 2, title: 'Austria', description: 'hello1'},
//         {id: 3, title: 'Switzerland', description: 'hello2'}
//       ];

//   return (
//     <Test products = {products} />
//   )
// }

// export default test1

import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ProductDetails } from '../../types'; // Import the ProductDetails interface if defined in a separate file
import Product from './[productid]'
const products: ProductDetails[] = [
  { id: '1', title: 'Germany', description: 'hello' },
  { id: '2', title: 'Austria', description: 'hello1' },
  { id: '3', title: 'Switzerland', description: 'hello2' },
];

function Test() {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          
            <a href={`/product/${product.id}`}>{product.title}</a>
          
        </div>
      ))}
    </div>
  );
}

export default Test;
