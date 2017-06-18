import React, {Component, PropTypes} from 'react'
import SenatorProfile from './SenatorProfile'
import Hannon from "../../img/Hannon.jpeg"
import Young from "../../img/Young.jpeg"
import Flanagan from "../../img/Flanagan.jpeg"

export default class CalltoAction extends Component {
  render() {
    return(<div className="CalltoAction">
      <div className="title">
        {this.props.title}
      </div>
      <div className="subtitle">
        {this.props.subtitle}
      </div>
      <div className="CTA-Targets" >
        <SenatorProfile name="Kemp Hannon"
          phone="518-455-2200"
          title="Chair of the Health Committee"
          img={Hannon} 
          explainer="Tell him to bring the New York Health Act out of committee and onto the floor for a vote by the whole Senate. As a committee chair, he is responsible to all New Yorkers. "
          facebook="https://www.facebook.com/kemp.hannon"
          twitter="@kemphannon Be a leader for NY support the #NYHealthAct and bring it out of the health committee!"
          him
          label="A"/>
          <SenatorProfile name="John J. Flanagan"
              phone="518–455–2071"
              title="Senate Majority Leader"
              img={Flanagan} 
              explainer="Tell him to support the passage of health care for all New Yorkers and schedule a floor vote for the New York Health Act before June 21.  "
              facebook="https://www.facebook.com/sen.john.flanagan"
              twitter="#LeaderFlanagan Be a leader for NY against #TrumpCare and vote on the #NYHealthAct!"
              him
              label="B"
            />
        </div>
    </div>
    )
  }
}
CalltoAction.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}
