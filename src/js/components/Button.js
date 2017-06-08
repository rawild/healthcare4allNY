import React,{PropTypes, Component} from 'react'
import arrow from '../../img/ic_keyboard_arrow_right_black_24px.svg'
export default class Button extends Component {
  render(){
    return(<button className="button-primary" onClick={() => {this._goto(this.props.url)}}>
        <div className="button-children">
          {this.props.children}
        </div>
        <div className="button-children">
          <img className="icon" src={arrow} />
        </div>
      </button>
    )
  }
  _goto = (url) => {
    window.open(url)
  }
}
Button.propTypes = {
  children: PropTypes.any,
  url: PropTypes.string
}