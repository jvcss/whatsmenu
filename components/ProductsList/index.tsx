import { Product } from "../../types/Product";
import { List } from "@mui/material";

import ProductItems from "../ProductItems";

type Props = {
  products: Product[];
  addToCart: (product: Product) => void;
};

const ProductsList = ({ products, addToCart}: Props) => {
  return (
    <List>
      {products.map((product) => (
        <ProductItems
          key={product.id}
          product={product}
          addToCart={addToCart}
          
        />
      ))}
    </List>
  );
};

export default ProductsList;