import React, {Component, PropTypes} from 'react'

import FB from "../../img/FB-f-Logo__blue_50.png"
import Twitter from "../../img/Twitter_Logo_Blue.png"

export default class SenatorProfile extends Component {
  constructor(props) {
    super(props)
  }
  
  render(props) {
      return(<div className="target">
        <div className="senator-label">
          {this.props.label}
          </div>
          <div className="senator">
            <div className="senator-header">
              <div className="senator-name">{this.props.name} 
              </div>
              <div className="senator-phone">{this.props.phone}
              </div>
              {this.props.title ? 
                <div className="senator-title"> {this.props.title} </div> 
                : ""}
            </div>
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
              {this.props.twitter ?
              <div className="senator-twitter">
                <button className="senator-twitter-button" onClick={() => {this._goto('https://twitter.com/intent/tweet?text=' + encodeURIComponent(this.props.twitter))}}>
                <img src={Twitter}/><span className="senator-twitter-text"> @ {this.props.him?'him':'her'} </span>
                </button>
              </div>
              : ""
              }
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
  twitter: PropTypes.string,
  him: PropTypes.boolean,
  letter: PropTypes.string
}