import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/joy/Button';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>₹ {price}</p>
      </div>
     <center>
      <b1 onClick={() => addToCart(id)}>
      <IconButton color="black" aria-label="add to shopping cart">
  <AddShoppingCartIcon /> </IconButton>{cartItemCount > 0 && <> ({cartItemCount})</>}</b1>
  {/* <b2 Button variant="soft" endDecorator={<KeyboardArrowRight />} color="success">
        Checkout
      </Button> 
      </b2>*/}
    </center>
    </div>
    
  );
};
