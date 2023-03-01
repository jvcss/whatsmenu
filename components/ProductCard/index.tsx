import { Product } from "../../types/Product";
import styles from "../../styles/ProductCard.module.css";

type Props = {
  product: Product;
  addToCart: (product: Product) => void;
};

const ProductCard = ({ product, addToCart }: Props) => {
  const handleClick = () => addToCart(product);

  return (
    <li className={styles.card}>
      <img src={product.image} alt={product.name} />
      <div className={styles.details}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <span className={styles.price}>R$ {product.price.toFixed(2)}</span>
        <button onClick={handleClick}>Adicionar ao carrinho</button>
      </div>
    </li>
  );
};

export default ProductCard;