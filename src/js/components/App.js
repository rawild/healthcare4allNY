import React, {Component} from 'react'
import Countdown from './Countdown'
import './App.css';
import MediaForm from './MediaForm'
import SocialMedia from './SocialMedia'
import CalltoAction from './CalltoAction'
import Block from './Block'
import Calendar from './Calendar'
import Footer from './Footer'
import LinkButton from './LinkButton'
import Modal from './Modal'
import OpenModal from '../containers/OpenModal'
import { Textfit } from 'react-textfit';

import Hannon from "../../img/Hannon.jpeg"

class App extends Component {
  
  
  render () {
    
  var endDate = new Date(2017,5,21,22,0,0,0)
  return  (
    <div className="App">
      <MediaForm />
      <div className="Section-1">
        <div className="interlude2">
        The NY senate session ended on July 21st. 
        </div>
        <div className="interlude2">
        In that session they failed to schedule a vote on
        </div>
        <div >
          <Textfit mode="single">
            <b>Health Care for All NY</b>
          </Textfit>
        </div>
      </div>
      <div className="Transition-1" >
        <span className="interlude3">
        <Textfit mode="single">Disappointed? </Textfit> Pissed? (#PIISD)<br/>
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
        <Block title="STEP 3" subtitle="Join the movement"  backgroundColor="rgba(224, 229, 233, 0.8)" color="#142c74">
          <Calendar />
        </Block>
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
        
        <LinkButton url='https://medium.com/@healthcare4allny/campaign-for-single-payer-in-new-york-why-havent-i-heard-of-this-cb6cf77eda8c'>
          Read More
        </LinkButton>
      </Block>
      <Block title="Learn More" backgroundColor="#464F6C">
        <LinkButton url='https://medium.com/@healthcare4allny/health-care-for-all-bill-in-new-york-approaches-majority-support-in-state-senate-9f1ced896208'>
          A simple explainer
        </LinkButton>
        <LinkButton url='http://passnyhealth.com'> 
          More info from our friends
        </LinkButton>
        <LinkButton url='http://www.nyhcampaign.org/'>
          The group that got us where we are
        </LinkButton>
      </Block>
      <Footer />
      <Modal />
    </div>);
  }
}

export default App
