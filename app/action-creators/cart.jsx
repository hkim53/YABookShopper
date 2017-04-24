import { RECEIVE_CART } from '../constants'
import axios from 'axios'
// maybe import browserHistory when we add a delete action?

// Regular action
export const receiveCart = (cart) => ({
  type: RECEIVE_CART,
  cart
})

// THUNK
export const loadCart = function() {
  return function(dispatch) {
    axios.get('/api/cart')
    .then(function(res) {
      return res.data
    })
    .then(function(cart) {
      const action = receiveCart(cart)
      dispatch(action)
    })
    .catch(function(err) {
      console.error(err)
    })
  }
}