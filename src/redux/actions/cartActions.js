// src/redux/actions/cartActions.js
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const REMOVE_SINGLE_ITEM = "REMOVE_SINGLE_ITEM";
export const EMPTY_CART = "EMPTY_CART";

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const removeSingleItem = (item) => ({
  type: REMOVE_SINGLE_ITEM,
  payload: item,
});

export const emptyCart = () => ({
  type: EMPTY_CART,
});
