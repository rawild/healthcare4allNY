import React, {Component} from 'react'
import Countdown from './Countdown'
import './App.css';
import MediaForm from './MediaForm'
import SocialMedia from './SocialMedia'
import CalltoAction from './CalltoAction'
import Block from './Block'
import Calendar from './Calendar'
import Footer from './Footer'
import Button from './Button'
import { Textfit } from 'react-textfit';

import Hannon from "../../img/Hannon.jpeg"

class App extends Component {
  
  
  render () {
    
  var endDate = new Date(2017,5,21,22,0,0,0)
  return  (
    <div className="App">
      <MediaForm />
      <div className="Section-1">
      <div>
      <Textfit mode="single">
        <b>Did you know:</b>
      </Textfit>
      </div>
        <Countdown targetDate={endDate}/>
      
        <div className="interlude2">
        1 more Senator to sign on and a vote held for
        </div>
        <div >
          <Textfit mode="single">
            <b>Health Care for All NY</b>
          </Textfit>
        </div>
      </div>
      <div className="Transition-1" >
        <span className="interlude3">
        What can you do?
        </span>
      </div>
      <div className="Section-2">
        <CalltoAction title="STEP 1" subtitle="Call + Tweet + Facebook"/>
        <Block title="STEP 2" subtitle="Get all your friends to do it" backgroundColor="#142c74">
          (It helps if you share our page)
          <div>
          <SocialMedia />
          </div>
        </Block>
        
        <Calendar title="STEP 3" subtitle="Join the movement"/>
      </div>
      <Block subtitle="How have I not heard about this?" backgroundColor="#09153b">
        <div className="blurb">
          Why? Because the conventional wisdom is that passing this bill is not politically possible.
          But that is no longer the case.
          </div>
          <div className="blurb">
          <div className="highlight">We determine what is politically possible.</div>
          As a Bloomberg article <a className="embedded-link" href="https://www.bloomberg.com/view/articles/2017-05-30/states-where-single-payer-health-care-could-work-if-it-could-work-anywhere" >said recently</a> “Say what you want about single-payer advocates, but say this too: You can’t stop them with much less than a Howitzer.”
          </div>
        
        <Button url='https://medium.com/@healthcare4allny/campaign-for-single-payer-in-new-york-why-havent-i-heard-of-this-cb6cf77eda8c'>
          Read More
        </Button>
      </Block>
      <Block title="Learn More" backgroundColor="#464F6C">
        <Button url='https://medium.com/@healthcare4allny/health-care-for-all-bill-in-new-york-approaches-majority-support-in-state-senate-9f1ced896208'>
          A simple explainer
        </Button>
        <Button url='http://passnyhealth.com'> 
          More info from our friends
        </Button>
        <Button url='http://www.nyhcampaign.org/'>
          The group that got us where we are
        </Button>
      </Block>
      <Footer />
      
    </div>);
  }
}

export default App
