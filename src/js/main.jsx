require('babel-polyfill')
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'
let store = createStore(todoApp)
let rootEl = document.getElementById('app')
const render = () => {
  ReactDOM.render(
    <AppContainer>
    <Provider store={store}>
    <App />
    </Provider>
    </AppContainer>, rootEl)
}

render()
