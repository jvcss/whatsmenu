import { Product } from "../../types/Product";
import { Button, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { styled, Theme } from '@mui/material/styles';

type Props = {
  product: Product;
  addToCart: (product: Product) => void;
};

const StyledListItem = styled(ListItem)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  marginBottom: theme.spacing(2),
}));

const StyledListItemAvatar = styled(ListItemAvatar)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

const StyledPriceTypography = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
}));

const ProductItems = ({ product, addToCart }: Props) => {
  const handleClick = () => addToCart(product);

  return (
    <StyledListItem>
      <StyledListItemAvatar>
        <img src={product.image} alt={product.name} width="80" height="80" />
      </StyledListItemAvatar>
      <StyledListItemText
        primary={product.name}
        secondary={product.description}
      >
        <StyledPriceTypography variant="body1">
          R$ {product.price.toFixed(2)}
        </StyledPriceTypography>
      </StyledListItemText>
      <Button variant="contained" onClick={handleClick}>
        Adicionar ao carrinho
      </Button>
    </StyledListItem>
  );
};

export default ProductItems;
