import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';
const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(state => state.cartItem.totalQuantity)

  const handelCart = () => {
    dispatch(uiActions.toogleCart());
  }
  return (
    <button onClick={handelCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItem}</span>
    </button>
  );
};

export default CartButton;
