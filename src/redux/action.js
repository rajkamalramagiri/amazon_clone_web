export const addToBasket = (payload) => {
  return {
    type: "ADD_TO_BASKET",
    payload,
  };
};

export const removeFromBasket = (payload) => {
  return {
    type: "REMOVE_FROM_BASKET",
    payload,
  };
};
