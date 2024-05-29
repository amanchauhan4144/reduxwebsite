// src/redux/reducers/cartReducer.js
import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_SINGLE_ITEM, EMPTY_CART } from "../actions/cartActions";

const initialState = {
  carts: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);

      if (itemIndex >= 0) {
        const updatedCarts = state.carts.map((item, index) =>
          index === itemIndex ? { ...item, qnty: item.qnty + 1 } : item
        );
        return { ...state, carts: updatedCarts };
      } else {
        const newItem = { ...action.payload, qnty: 1 };
        return { ...state, carts: [...state.carts, newItem] };
      }

    case REMOVE_FROM_CART:
      return { ...state, carts: state.carts.filter((item) => item.id !== action.payload) };

    case REMOVE_SINGLE_ITEM:
      const decItemIndex = state.carts.findIndex((item) => item.id === action.payload.id);

      if (state.carts[decItemIndex].qnty > 1) {
        const updatedCarts = state.carts.map((item, index) =>
          index === decItemIndex ? { ...item, qnty: item.qnty - 1 } : item
        );
        return { ...state, carts: updatedCarts };
      }
      return state;

    case EMPTY_CART:
      return { ...state, carts: [] };

    default:
      return state;
  }
};

export default cartReducer;
