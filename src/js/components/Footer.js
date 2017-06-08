import React,{Component} from 'react'
import arrow from '../../img/ic_keyboard_arrow_right_black_24px.svg'
export default class Footer extends Component {
  render(){
    return(<div className="footer">
      Questions? Interested in helping out? healthcare4allny(at)gmail.com
    
    </div>
    )
  }
  _goto = (url) => {
    window.open(url)
  }
}