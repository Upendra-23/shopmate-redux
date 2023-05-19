const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    total: 0,
  },
  reducers: {
    add(state, action) {
      const updatedList = state.cartList.concat(action.payload);
      const updatedTotal = state.total + action.payload.price;
      return { ...state, total: updatedTotal, cartList: updatedList };
    },
    remove(state, action) {
      const updatedList = state.cartList.filter(
        (item) => item.id !== action.payload.id
      );
      const updatedTotal = state.total - action.payload.price;
      return { ...state, total: updatedTotal, cartList: updatedList };
    },
  },
});

export const { add, remove } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
