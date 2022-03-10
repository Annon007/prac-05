import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from "./components/UI/Notification"
import { useSelector, useDispatch } from 'react-redux';
import { SendPutReq, FetchData } from "./store/cartItem-actions"
let initial = true;
function App() {
  const dispatch = useDispatch();
  const cartState = useSelector(state => state.uiCart.showrCart);
  const cart = useSelector(state => state.cartItem);
  const notification = useSelector(state => state.uiCart.notification);


  useEffect(() => {
    dispatch(FetchData());
  }, [])
  useEffect(() => {

    if (initial) {
      initial = false;
      return;
    }

    if (cart.changed) dispatch(SendPutReq({ item: cart.item, totalQuantity: cart.totalQuantity }));
  }, [cart])
  return (
    <>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {cartState && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
