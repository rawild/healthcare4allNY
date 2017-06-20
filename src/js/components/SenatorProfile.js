import React, {Component, PropTypes} from 'react'

import FB from "../../img/FB-f-Logo__blue_50.png"
import Twitter from "../../img/Twitter_Logo_Blue.png"
const STYLES = {
  'target': {
    'display': 'inline-block',
    'verticalAlign': 'top'
  },
  'senatorLabel': {
    'fontSize': '30pt',
    'marginBottom': '30px'
  },
  'senator': {
    'width': '300px',
    'textAlign': 'left',
    'backgroundColor': 'rgba(224, 229, 233, 0.8)',
    'borderRadius': '15px',
    'padding': '20px',
    'borderWidth': '4px',
    'borderStyle': 'solid',
    'borderColor': '#142c74',
    'display': 'inline-block',
    'margin': '5px'
  },
  'senatorHeader': {
    'textAlign': 'center'
  },
  'senatorName': {
    'fontSize': '20pt'
  },
  'senatorPicture': {
    'borderRadius': '20px',
    'display': 'block',
    'margin': 'auto',
    'marginBottom': '30px',
    'marginTop': '10px',
    'height': '200px'
  },
  'senatorExplainer': {
    'marginBottom': '10px',
    'padding': '10px',
    'fontFamily': '\'Acme\', sans-serif'
  },
  'senatorContact': {
    'textAlign': 'center'
  },
  'senatorFb': {
    'display': 'inline'
  },
  'senatorTwitter': {
    'display': 'inline'
  },
  'senatorFbImg': {
    'height': '50px',
    'width': '50px'
  },
  'senatorFbButton': {
    'margin': '5px',
    'padding': '0',
    'border': 'none',
    'borderRadius': '5px',
    'verticalAlign': 'top'
  },
  'senatorTwitterButton': {
    'backgroundColor': 'white',
    'borderWidth': '2px',
    'borderColor': '#1DA1F2',
    'borderRadius': '10px',
    'borderStyle': 'solid',
    'width': '120px',
    'height': '60px'
  },
  'senatorTwitterText': {
    'fontFamily': '\'Francois One\', sans-serif',
    'fontSize': '15px',
    'verticalAlign': '90%',
    'color': '#1DA1F2'
  }
}
export default class SenatorProfile extends Component {
  constructor(props) {
    super(props)
  }
  
  render(props) {
      return(<div className="target" style={STYLES.target}>
        <div className="senator-label" style={STYLES.senatorLabel}>
          {this.props.label}
          </div>
          <div className="senator" style={STYLES.senator}>
            <div className="senator-header" style={STYLES.senatorHeader}>
              <div className="senator-name" style={STYLES.senatorName}>{this.props.name} 
              </div>
              <div className="senator-phone">{this.props.phone}
              </div>
              {this.props.title ? 
                <div className="senator-title"> {this.props.title} </div> 
                : ""}
            </div>
            <img className="senator-picture" style={STYLES.senatorPicture} src={this.props.img}/>
            <div className="senator-explainer" style={STYLES.senatorExplainer}>
              {this.props.explainer}
            </div>
            <div className="senator-contact" style={STYLES.senatorContact}>
              {this.props.facebook ? 
              <div className="senator-fb" style={STYLES.senatorFb}>
                <button className="senator-fb-button" style={STYLES.senatorFbButton} onClick={() => this._goto(this.props.facebook)}>
                <img className="senator-fb-img" style={STYLES.senatorFbImg} src={FB}/>
                </button>
              </div>
              : ""
              }
              {this.props.twitter ?
              <div className="senator-twitter" style={STYLES.senatorTwitter}>
                <button className="senator-twitter-button" style={STYLES.senatorTwitterButton} onClick={() => {this._goto('https://twitter.com/intent/tweet?text=' + encodeURIComponent(this.props.twitter))}}>
                <img src={Twitter}/><span className="senator-twitter-text" style={STYLES.senatorTwitterText}> @ {this.props.him?'him':'her'} </span>
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