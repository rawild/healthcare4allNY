import React, {Component, PropTypes} from 'react'
import Hannon from "../../img/Hannon.jpeg"
import FB from "../../img/FB-f-Logo__blue_50.png"
import Twitter from "../../img/Twitter_Logo_Blue.png"
export default class SenatorProfile extends Component {
  render() {
      return(
        <div>
          To get this bill voted on these three need to act:
          <div className="senator">
            <div className="senator-title">Kemp Hannon: </div>
            <img className="senator-picture" src={Hannon}/>
            <div className="senator-explainer">
              R from District 6 - the Hicksville/ Heampstead area on Long Island. <br/>
              To get this bill out of the Health Committee 
              Kemp Hannon needs to say it can go to the floor for a vote. 
            </div>
            <div className="senator-contact">
              Please call him here: 518-455-2200
              <img src={FB} href="https://www.facebook.com/kemp.hannon" /> him
              <button onClick={() => {this._goto('https://twitter.com/intent/tweet?text=@kemphannon%20Bring%20the%20NYHealthAct%20out%20of%20committee!')}}>
              <img src={Twitter}/> at him
              </button>
            </div>
        </div>
        </div>
        
        
        )
    }
    _goto = (url) => {
      window.location = url
    }
    
}