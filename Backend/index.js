const redux = require("redux");

//Actions

const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";

//Action Creators functions
function addToCart() {
  return {
    type: ADD_TO_CART,
    payload: "",
  };
}

function removeFromCart() {
  return {
    type: REMOVE_FROM_CART,
    payload: "",
  };
}

function addProduct() {
  return {
    type: ADD_PRODUCT,
  };
}

//Reducers

//Reducers are pure pridictable function which change the state in redux store

function reducer(state = initialStore, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, items: state.items++ };

    case REMOVE_FROM_CART:
      return { ...state, items: state.items-- };

    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, { id: 1, name: "abc", price: 3000 }],
      };
    default:
      return state;
  }
}

const initialStore = {
  items: 0,
  products: [],
  auth: {},
};

const store = redux.createStore(reducer);

store.dispatch(addProduct());
console.log(store.getState());
