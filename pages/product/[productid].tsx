// import React from 'react'
// import { useRouter } from 'next/router'
// import test1 from './index';
// function productid() {
//     const router = useRouter();
//     const productid = router.query.productid
//     // let product = test1.products[id=1];
//   return (

//     <div>{productid}</div>
//   )
// }

// export default 



import React from 'react';
import { useRouter } from 'next/router';
import ProductId from './productid';

interface ProductDetails {
  title: string;
  description: string;
  id: string;
}

interface Products {
  products: ProductDetails[];
}

interface ProductIdProps {
  product: ProductDetails;
}

const products: ProductDetails[] = [
  { id: '1', title: 'Germany', description: 'hello' },
  { id: '2', title: 'Austria', description: 'hello1' },
  { id: '3', title: 'Switzerland', description: 'hello2' },
];

function Product() {
  const router = useRouter();
  const { productid } = router.query;

  // Find the product with matching ID
  const foundProduct = products.find((product) => product.id === productid);

  if (!foundProduct) {
    return <div>Loading...</div>; // Handle the case when product is not found
  }

  return <ProductId product={foundProduct} />;
}

export default Product;
