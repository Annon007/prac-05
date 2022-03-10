import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartItem",
    initialState: {
        item: [],
        totalQuantity: 0,
        changed: false,
    },
    reducers: {
        repalceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.item = action.payload.item || [];
        },
        addnewItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.item.find(item => item.id === newItem.id);
            state.totalQuantity = state.item.reduce((acc, cur) => cur.quantity + acc, 1);
            state.changed = true;
            if (!existingItem) {
                state.item.push({
                    id: newItem.id,
                    name: newItem.title,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                })
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;

            }
        },
        removeItem(state, action) {
            const rem = action.payload;
            const removeItem = state.item.find(item => item.id === rem.id);
            state.totalQuantity--;
            state.changed = true;
            if (removeItem.quantity === 1) {
                state.item = state.item.filter(item => item.id !== removeItem.id)
            } else {
                removeItem.quantity--;
                removeItem.totalPrice -= removeItem.price
            }
        }
    }
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer