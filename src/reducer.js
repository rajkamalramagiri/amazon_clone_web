export const initialState = {
  basket: [],
  money: 20,
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;

    case "REMOVE_FROM_BASKET":
      // let newbasket = state.basket.filter((prod) => prod.id != action.item.id);
      // console.log("nb", newbasket);

      return {
        ...state,
        basket: state.basket.filter((prod) => prod.id != action.item.id),
      };

      break;

    default:
      return state;
  }
};

export default reducer;
