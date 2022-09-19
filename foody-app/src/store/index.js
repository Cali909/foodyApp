import { createSlice, configureStore } from "@reduxjs/toolkit";

const cartInitialState = { meals: [], foodVariety: 0, totalAmount: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addToCart(state, action) {
      state.meals.push();
    },
    changeQuantity(state) {},
  },
});

const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});

export const cartActions = cartSlice.actions;
export default store;
