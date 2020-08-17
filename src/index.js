import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';


// Redux store setup
const initialState = {
    value: "",
    recipes: [{}],
    products: [],
    items: [],
    recipeString: "",
    recipeInfo: "",
    fridgeItems: [{}],
    user: null
  };

// Write functions for your reducer here
function reducer(state = initialState, action) {
    switch (action.type) {
      case "AUTHORIZED_USER":
        return {
          ...state,
          user: action.payload
        }
      case "LOGOUT":
        return {
          ...state,
          user: initialState.user
        }
      case "GET_RECIPE":
        return {
          ...state,
          recipes: action.payload,
          items: initialState.items,
        };
      case "ADD_INGREDIENT":
        return {
          ...state,
          items: state.items.concat(action.payload),
        };
      // // Reset the screen to default state
      // case "RESET_ITEM":
      //   return {
      //     ...state,
      //     items: initialState.items,
      //   };
      // case 'RESET_RECIPES':
      //   return {
      //     ...state,
      //     recipes: initialState.recipes
      //   }
      // case "DELETE_INGREDIENT":
      //   return {
      //     ...state,
      //     items: state.items.filter(
      //       (ingredient) => ingredient !== action.payload
      //     ),
      //   };
      case "ADD_ITEM_TO_FRIDGE":
        return {
          ...state,
          fridgeItems: action.payload,
        };
      default:
        return state;
    }
  }
  
  // Reducer store
  const store = createStore(reducer);

ReactDOM.render(
  
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.register(); // changed for firefox 
serviceWorker.unregister(); // default
