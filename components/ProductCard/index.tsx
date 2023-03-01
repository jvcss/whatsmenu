import { Card, CardActionArea, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { Product } from "../../types/Product";
import styles from "../../styles/ProductCard.module.css";

type Props = {
  product: Product;
  addToCart: (product: Product) => void;
};

const ProductCard = ({ product, addToCart }: Props) => {
  const handleClick = () => addToCart(product);

  return (
    <Card className={styles.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description}
          </Typography>
          <Typography variant="h6" className={styles.price}>
            R$ {product.price.toFixed(2)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button size="small" color="primary" onClick={handleClick}>
        Adicionar ao carrinho
      </Button>
    </Card>
  );
};

export default ProductCard;
