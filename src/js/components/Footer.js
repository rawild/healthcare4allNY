import React,{Component} from 'react'
import arrow from '../../img/ic_keyboard_arrow_right_black_24px.svg'
export default class Footer extends Component {
  render(){
    return(<div className="footer">
      <button className="button-primary" onClick={() => {this._goto('https://medium.com/@healthcare4allny/health-care-for-all-bill-in-new-york-approaches-majority-support-in-state-senate-9f1ced896208')}}>
        <div className="button-children">
          A simple explainer
        </div>
        <div className="button-children">
          <img className="icon" src={arrow} />
        </div>
      </button>
      <button className="button-primary" onClick={() => {this._goto('http://passnyhealth.com')}}>
        <div className="button-children">
          More info from our friends
        </div>
        <div className="button-children">
          <img className="icon" src={arrow} />
        </div>
      </button>
      
      <button className="button-primary" onClick={() => {this._goto('http://www.nyhcampaign.org/')}}>
        <div className="button-children">
          The group that got us to where we are
        </div>
        <div className="button-children">
          <img className="icon" src={arrow} />
        </div>
      </button>
    
    </div>
    )
  }
  _goto = (url) => {
    window.open(url)
  }
}