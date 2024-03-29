import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import useStyles from "./styles";
const CartItem = ({ item, handleUpdateCartQuantity, handleRemoveFromCart }) => {
  const classes = useStyles();

  const handleIncreaseItemQuanity = () => {
    handleUpdateCartQuantity(item.id, item.quantity + 1);
  };

  const handleDecreaseItemQuantity = () => {
    handleUpdateCartQuantity(item.id, item.quantity - 1);
  };

  const handleItemRemoval = () => {
    handleRemoveFromCart(item.id);
  };
  return (
    <Card>
      <CardMedia
        image={item.media.source}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography vaiant="h5">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small"
            onClick={handleDecreaseItemQuantity}
          >
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button
            type="button"
            size="small"
            onClick={handleIncreaseItemQuanity}
          >
            +
          </Button>
        </div>
        <Button
          variant="contained"
          type="button"
          color="secondary"
          onClick={handleItemRemoval}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
