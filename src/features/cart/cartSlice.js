import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import { checkout } from './../../app/api';

const initialState = {
  items: {},
  checkoutState: "LOADING" | "READY" | "ERROR",
  erroMessage: ""
}

export const checkoutCart = createAsyncThunk(
  "cart/checkout",
  async(_, thunkAPI) => {
  const state = thunkAPI.getState();
  const items = state.cart.items;
  const response = await checkout(items);
  return response;
  }
)

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action){
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++
      } else {
        state.items[id] = 1
      }

    },
    removeFromCart(state, action){
      delete state.items[action.payload];
    },
    updateQuantity(state, action){
      const { id, quantity } = action.payload;
      state.items[id] = quantity;
    }
  },
  extraReducers: function(builder){
    builder.addCase(checkoutCart.pending, (state) => {
      state.checkoutState = "LOADING";
    })
    builder.addCase(checkoutCart.fulfilled, (state, action) => {
      const { success } = action.payload;

      if (success) {
        state.checkoutState = "READY";
        state.items = {};

      } else {
        state.checkoutState = "ERROR";
      }
    })
    builder.addCase(checkoutCart.rejected, (state, action) => {
      state.checkoutState = "ERROR";
      state.erroMessage = action.error.message || "";
    })
  }
})


export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;

export function getNumItems(state){
  console.log("Calling getNumItems");

  let numItems = 0

  for(let id in state.cart.items) {
    numItems += state.cart.items[id];
  }

  return numItems
}

export const getMemoizedNumItems = createSelector(
  (state) => state.cart.items,
  (items) => {

    let numItems = 0;
    for(let id in items) {
      numItems += items[id];
    }
    return numItems;
  }
)

export const getTotalPrice = createSelector(
  (state) => state.cart.items,
  (state) => state.products.products,
  (items, products) => {
    let total = 0;
    for (let id in items) {
      total += products[id].price * items[id];
    }
    return total.toFixed(2);
  }
)
