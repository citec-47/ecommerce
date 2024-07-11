import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../Components/Breadrums/Breadrums';
import { ShopContext } from '../Contex/ShopContex'; 
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { id } = useParams();
  const product = all_product.find((e) => e.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='product'>
      <Breadcrumbs product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
}

export default Product;
