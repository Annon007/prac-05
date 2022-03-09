import { createSlice } from "@reduxjs/toolkit";
const initial_ui_state = {
    showrCart: false,
    notification: null,
}
const uiSlice = createSlice({
    name: "ui",
    initialState: initial_ui_state,
    reducers: {
        toogleCart(state) {
            state.showrCart = !state.showrCart;
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                message: action.payload.message,
                title: action.payload.title
            }
        },
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;