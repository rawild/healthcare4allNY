import React, {Component} from 'react'
import Countdown from './Countdown'
import './App.css';
import MediaForm from './MediaForm'
import SocialMedia from './SocialMedia'
import CalltoAction from './CalltoAction'
import Calendar from './Calendar'
import { Textfit } from 'react-textfit';
import arrow from '../../img/ic_keyboard_arrow_right_black_24px.svg'
import Hannon from "../../img/Hannon.jpeg"

class App extends Component {
  
  
  render () {
    
  var endDate = new Date(2017,5,21,22,0,0,0)
  return  (
    <div className="App">
      <MediaForm />
      <div className="Section-1">
        <div className="starter">    
          We only have
        </div>
        <Countdown targetDate={endDate}/>
        <div className="interlude1">
            to get  
        </div>
        <div className="interlude2">
        1 more Senator to sign on and a vote held for
        </div>
        <div className="title">
          <Textfit mode="single">
            <b>Health Care for All NY</b>
          </Textfit>
        </div>
        
        <div className="interlude2">
        To make this happen we have to act today! Follow the steps below.
        </div>
      </div>
      <div className="Section-2">
        <CalltoAction title="STEP 1 = Call + Tweet + Facebook"/>
        <Calendar title="STEP 2 = Join the movement"/>
      </div>
      <div className="footer">
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
