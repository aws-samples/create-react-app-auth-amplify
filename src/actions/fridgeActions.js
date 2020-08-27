import { API } from 'aws-amplify'

export const GET_FRIDGE = 'GET_FRIDGE'
export const GET_FRIDGE_SUCCESS = 'GET_FRIDGE_SUCCESS'
export const GET_FRIDGE_FAILURE = 'GET_FRIDGE_FAILURE'
export const ADD_ITEM_TO_FRIDGE = 'ADD_ITEM_TO_FRIDGE'
export const AUTHORIZED_USER = 'AUTHORIZED_USER'
export const GET_PRODUCTS = 'GET_PRODUCTS'
export const LOGOUT = 'LOGOUT'

// Create Redux action creators that return an action
export const authUser = (user) => ({
  type: AUTHORIZED_USER,
  payload: user,
})

export const logout = () => ({
  type: LOGOUT,
})

export const addToFridge = (itemInfo) => ({
  type: ADD_ITEM_TO_FRIDGE,
  payload: itemInfo
})

export const getProducts = (products) => ({
  type: GET_PRODUCTS,
  payload: products
})

export const getFridge = () => ({
  type: GET_FRIDGE,
})
  
export const getFridgeSuccess = (fridgeItems) => ({
  type: GET_FRIDGE_SUCCESS,
  payload: fridgeItems,
})

export const getFridgeFailure = () => ({
  type: GET_FRIDGE_FAILURE,
})

// Combine them all in an asynchronous thunk

// export function fetchFridge() {
//   let apiName = 'globalindextest';
//   let path = '/fridgeitems';
//   let params = {
//     response: true,
//     queryStringParameters: {
//       username: 'nick80'
//     }
//   }
//   return (dispatch) => {
//     dispatch(getFridge())
//     return API.get(apiName, path, params)
//   }

export function fetchFridge() {
  let apiName = 'globalindextest';
      let path = '/fridgeitems';
      let params = {
        response: true,
        queryStringParameters: {
          username: 'nick80'
        }
      }
  return async (dispatch) => {
    dispatch(getFridge())

    try {
      const response = await API.get(apiName, path, params)
      console.log(response) 
      const data = await response.json()
      console.log(data)
      dispatch(getFridgeSuccess(data))
    } 
    catch (error) {
      dispatch(getFridgeFailure())
    }
  }
}