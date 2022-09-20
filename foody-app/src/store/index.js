import { createSlice, configureStore, current } from "@reduxjs/toolkit";

const cartInitialState = {
  meals: [],
  cartMeals: [],
  // foodVariety: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    setMeals(state, action) {
      state.meals = action.payload;
    },

    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = current(state).cartMeals.find(
        (meal) => meal.id === newItem.id
      );
      if (!existingItem) {
        state.cartMeals.push({
          id: newItem.id,
          price: newItem.price,
          amount: 1,
          name: newItem.name,
        });
        state.totalAmount += newItem.price;
      }
    },

    //TODO: chance for refactoring
    increaseAmount(state, action) {
      const item = action.payload;
      const updatedItemIndex = current(state).cartMeals.findIndex(
        (meal) => meal.id === item.id
      );
      const newCartMeals = [...current(state).cartMeals];
      const updatedAmount = newCartMeals[updatedItemIndex].amount + 1;
      if (updatedAmount > 7) {
        return;
      }
      newCartMeals[updatedItemIndex] = {
        id: item.id,
        price: item.price,
        name: item.name,
        amount: updatedAmount,
      };
      state.cartMeals = newCartMeals;
      state.totalAmount += item.price;
    },

    decreaseAmount(state, action) {
      const item = action.payload;
      const updatedItemIndex = current(state).cartMeals.findIndex(
        (meal) => meal.id === item.id
      );
      const newCartMeals = [...current(state).cartMeals];
      const updatedAmount = newCartMeals[updatedItemIndex].amount - 1;
      if (updatedAmount < 1) {
        state.cartMeals.splice(updatedItemIndex, 1);
        state.totalAmount -= item.price;
        return;
      }
      newCartMeals[updatedItemIndex] = {
        id: item.id,
        price: item.price,
        name: item.name,
        amount: updatedAmount,
      };
      state.cartMeals = newCartMeals;
      state.totalAmount -= item.price;
    },
  },
});

const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});

export const cartActions = cartSlice.actions;
export default store;
