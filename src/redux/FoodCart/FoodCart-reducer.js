import * as actionTypes from "./FoodCart-types";
import { useState } from "react";
import { useEffect } from "react";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Nutritious Food",
      description:
        "This cube will keep you busy the entire day and it is very fun to play with",
      price: 15.0,
      image:
     " https://previews.123rf.com/images/elnur/elnur1203/elnur120300961/12531092-circle-with-lots-of-food-items.jpg"
    },
    {
      id: 2,
      title: "Large Coffee Cup",
      description:
        "Get a big cup of coffee every morning before the day starts",
      price: 20.0,
      image:
        "https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "Pizza",
      description:
        "Bring home the happiness",
      price: 150.0,
      image:
        "https://post.healthline.com/wp-content/uploads/2020/09/AN138-Pizza-732x549-Thumb_0.jpg",
    },
    
    
  ],
  cart: [],
  currentItem: null,

};

/*useEffect(() => {
  axios.get("http://8082/items").then((res) => {
      console.log(res);
      this.setState({ products: res.data });
    });
  
const [state=INITIAL_STATE, setState] = useState([])
*/
const shopReducer = (state =INITIAL_STATE, action) => {
  
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
