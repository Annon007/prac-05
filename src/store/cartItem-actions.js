import { uiActions } from "./ui-slice";
import { cartActions } from "./cartItem-slice";

export const FetchData = () => {
    return async (dispatch) => {
        const getCArtData = async () => {
            const sendReq = fetch("https://react-prac-adae1-default-rtdb.firebaseio.com/cart.json");

            const res = await sendReq;

            if (!res.ok) {
                return;
            }
            const data = await res.json();
            return data;
        }
        try {
            const cartData = await getCArtData();
            dispatch(cartActions.repalceCart(cartData))
        } catch (err) {
            dispatch(uiActions.showNotification({
                status: "error",
                title: "Error!",
                message: err.message
            }));
        }
    }
}

export const SendPutReq = (cart) => {
    return (dispatch) => {
        const sendReq = async () => {
            dispatch(uiActions.showNotification({
                status: "pending",
                title: "Pending!",
                message: "Please Wait!"
            }));
            const cartHTTP = fetch("https://react-prac-adae1-default-rtdb.firebaseio.com/cart.json",
                {
                    method: "PUT",
                    body: JSON.stringify(cart)
                });
            const res = await cartHTTP;
            if (!res.ok) {
                throw new Error("Something went wrong!")
            }
            dispatch(uiActions.showNotification({
                status: "success",
                title: "Success!",
                message: "Successfully sent cart data!"
            }))


        };
        sendReq().catch(err => dispatch(uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: err.message
        })));
    }
};