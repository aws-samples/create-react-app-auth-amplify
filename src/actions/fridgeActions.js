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

export const getFridge = () => ({
  type: GET_FRIDGE,
})
  
export const getFridgeSuccess = (fridgeItems) => ({
  type: GET_FRIDGE_SUCCESS,
  // Likely need to change this into list object since you're returning the fridge
  payload: fridgeItems,
})

export const getFridgeFailure = () => ({
  type: GET_FRIDGE_FAILURE,
})

// Combine them all in an asynchronous thunk
export function fetchFridge() {
  // This will be the AWS Amplify API.Get logic
  return async (dispatch) => {
    dispatch(getFridge())

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()

      dispatch(getFridgeSuccess(data))
    } catch (error) {
      dispatch(getFridgeFailure())
    }
  }
}