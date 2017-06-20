import Immutable from 'immutable'
import { action } from './'


export const open = action('modal', 'open', {
  expectedParams: ['message', 'primaryActionText', 'callback',
    'cancelActionText', 'style']
})
export const openModal = open
export const close = action('modal', 'close', {
  expectedParams: []
})
export const closeModal = close

const initialState = Immutable.fromJS({
  open: false,
  message: '',
  primaryActionText: 'OK',
  callback: null, // stores a global callback when OK is pressed
  cancelActionText: '',
  style: {}
})

export default function reducer(state = initialState, action = {}) {
  console.log('state: '+ state)
  switch (action.type) {
    case open.id:
      return state.merge({open: true, ...open.getParams(action)})
    case close.id:
      return state.set('open', false)
    default:
      return state
  }
}