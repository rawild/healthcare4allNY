import React, {Component, PropTypes} from 'react'
import SenatorProfile from './SenatorProfile'
import Hannon from "../../img/Hannon.jpeg"

export default class CalltoAction extends Component {
  render() {
    return(<div className="CalltoAction">
      <div className="CTA-title">
        {this.props.title}
      </div>
      <SenatorProfile name="Kemp Hannon"
        phone="518-455-2200"
        img={Hannon} 
        explainer="Tell him to bring the New York Health Act out of committee and onto the floor for a vote by the whole Senate. As a committee chair, he is responsible to all New Yorkers. "
        facebook="https://www.facebook.com/kemp.hannon"
        twitter="@kemphannon Bring the NYHealthAct out of committee! #NYHealthAct"/>
    </div>
    )
  }
}
CalltoAction.propTypes = {
  title: PropTypes.string
}
