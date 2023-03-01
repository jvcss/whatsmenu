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
  marginLeft: theme.spacing(2),
  alignSelf: "center",
}));

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

const StyledPriceTypography = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  alignSelf: "flex-end",
}));

const ProductItems = ({ product, addToCart }: Props) => {
  const handleClick = () => addToCart(product);

  return (
    <StyledListItem>
      <StyledListItemText>
        <Typography variant="h6" component="h2">
          {product.name}
        </Typography>
        <Typography variant="body1">{product.description}</Typography>
        <Button variant="contained" onClick={handleClick}>
          Adicionar ao carrinho
        </Button>
      </StyledListItemText>
      <StyledListItemAvatar>
        <img src={product.image} alt={product.name} width="80" height="80" />
        <StyledPriceTypography variant="body1">
          R$ {product.price.toFixed(2)}
        </StyledPriceTypography>
      </StyledListItemAvatar>
    </StyledListItem>
  );
};

export default ProductItems;
