

interface ProductDetails {
    title : string;
    description : string;
    id : string;
}

interface Product {
    product : ProductDetails;
}

// function Test({products} : Products) {


//     return (
//         <div>{products.map(product => (
//             <>
//             <a href={"/product/"+product.id}> {product.title}</a><br />
//             <h2>{product.id}</h2><br />
//             <p>{product.description}</p>
//             </>
//             )) }</div>
//     );
// }

// export default Test;


import React from 'react';
import { useRouter } from 'next/router';

function ProductId({ product } : Product) {
  return (
    <div>
      <h2>{product['title']}</h2>
      <p>{product['description']}</p>
      <p>{product['id']}</p>
    </div>
  );
}

export default ProductId;
