import React, {Component} from 'react'
import Countdown from './Countdown'
import './App.css';
import { Textfit } from 'react-textfit';
import arrow from '../../img/ic_keyboard_arrow_right_black_24px.svg'

class App extends Component {
  
  
  render () {
    
  var endDate = new Date(2017,5,21,22,0,0,0)
  return  (<div className="App">
    <div className="App-header">
    <div className="interlude">
      <Textfit mode="single">
        We have only
      </Textfit>
    </div>
      <Countdown targetDate={endDate}/>
      <div className="interlude">
          Left to get
      </div>
      <div className="title">
        <Textfit mode="single">
          Healthcare for all NY
        </Textfit>
      </div>
      <button className="button-primary" onClick={() => {this._goto('http://passnyhealth.com')}}>
        <div className="button-children">
          Find out more 
        </div>
        <div className="button-children">
          <img className="icon" src={arrow} />
        </div>
      </button>
    </div>
  </div>);
  }
  _goto = (url) => {
    window.location = url
  }
}

export default App
