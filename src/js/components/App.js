import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import logo from '../../img/logo.svg';
import './App.css';

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Welcome to React</h1>
    </div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
