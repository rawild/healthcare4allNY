import React,{Component} from 'react'
import arrow from '../../img/ic_keyboard_arrow_right_black_24px.svg'
export default class Footer extends Component {
  render(){
    const STYLES = {
      footer: {
        paddingTop: '50px',
        paddingBottom: '50px',
        backgroundColor: '#142c74',
        color: 'white',
        width: '100%',
        textAlign: 'center'
        
      }

    }
    return(<div className="footer" style={STYLES.footer}>
      Questions? Interested in helping out? healthcare4allny(at)gmail.com
    
    </div>
    )
  }
  _goto = (url) => {
    window.open(url)
  }
}