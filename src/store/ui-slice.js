import { createSlice } from "@reduxjs/toolkit";
const initial_ui_state = {
    showrCart: false,
}
const uiSlice = createSlice({
    name: "ui",
    initialState: initial_ui_state,
    reducers: {
        toogleCart(state) {
            state.showrCart = !state.showrCart;
        },
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;