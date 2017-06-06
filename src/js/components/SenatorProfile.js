import React, {Component, PropTypes} from 'react'

import FB from "../../img/FB-f-Logo__blue_50.png"
import Twitter from "../../img/Twitter_Logo_Blue.png"

export default class SenatorProfile extends Component {
  constructor(props) {
    super(props)
  }
  
  render(props) {
      return(
        <div>
          <div className="senator">
            <div className="senator-title">Call {this.props.name}: {this.props.phone} </div>
            <img className="senator-picture" src={this.props.img}/>
            <div className="senator-explainer">
              {this.props.explainer}
            </div>
            <div className="senator-contact">
              {this.props.facebook ? 
              <div className="senator-fb">
                <button className="senator-fb-button" onClick={() => this._goto(this.props.facebook)}>
                <img className="senator-fb-img" src={FB}/>
                </button>
              </div>
              : ""
              }
              <div className="senator-twitter">
                <button className="senator-twitter-button" onClick={() => {this._goto('https://twitter.com/intent/tweet?text=' + encodeURIComponent(this.props.twitter))}}>
                <img src={Twitter}/><span className="senator-twitter-text"> @ him </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        
        )
    }
    _goto = (url) => {
      window.location = url
    }
}
SenatorProfile.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  img: PropTypes.any,
  explainer: PropTypes.string,
  facebook: PropTypes.string,
  twitter: PropTypes.string
}