import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const cartItems = useSelector(state => state.cartItem.item)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.length > 0 && cartItems.map(pro => <CartItem key={pro.id} item={{ id: pro.id, title: pro.name, quantity: pro.quantity, price: pro.price, total: pro.totalPrice }} />)}
        {cartItems.length === 0 && "Please Add someting"}
      </ul>
    </Card>
  );
};

export default Cart;
