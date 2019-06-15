import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';

const exampleInitialState = {
  transactions: [],
  payload: {
    name: '',
    paymentMode: '',
    amount: ''

  },
  success: false
}

export const actionTypes = {
  GET_TRANSACTION: 'GET_TRANSACTION',
  POST_TRANSACTION: 'POST_TRANSACTION',
  GET_PAYLOAD: 'GET_PAYLOAD'
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  console.log('ACTION', action.type);
  switch (action.type) {
    case actionTypes.GET_TRANSACTION:
      return Object.assign({}, state, {
        transactions: action.data
      }, {success: true})
    case actionTypes.POST_TRANSACTION:
      return Object.assign({}, state, {success: true})
    case actionTypes.GET_PAYLOAD:
      switch (action.details) {
        case "USER":
          return Object.assign({}, state, {
            payload: {
              ...state.payload,
              name: action.data
            }
          })
        case "CARD":
          return Object.assign({}, state, {
            payload: {
              ...state.payload,
              paymentMode: action.data
            }
          })
        case "AMOUNT":
          return Object.assign({}, state, {
            payload: {
              ...state.payload,
              amount: action.data
            }
          })
      }
    default:
      return state
  }
}

// ACTIONS
export const getTransaction = (data) => {
  return {type: actionTypes.GET_TRANSACTION, data}
}
export const postTransaction = () => {
  return {type: actionTypes.POST_TRANSACTION}
}
export const getPayload = (data, details) => {
  return {type: actionTypes.GET_PAYLOAD, data, details}
}
export function initializeStore(initialState = exampleInitialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)))
}
