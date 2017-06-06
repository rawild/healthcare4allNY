import React, {Component, PropTypes} from 'react'
import SenatorProfile from './SenatorProfile'
import Hannon from "../../img/Hannon.jpeg"
import Young from "../../img/Young.jpeg"
import Flanagan from "../../img/Flanagan.jpeg"

export default class CalltoAction extends Component {
  render() {
    return(<div className="CalltoAction">
      <div className="CTA-title">
        {this.props.title}
      </div>
      <div className="CTA-Targets" >
        <SenatorProfile name="Kemp Hannon"
          phone="518-455-2200"
          title="Chair of the Health Committee"
          img={Hannon} 
          explainer="Tell him to bring the New York Health Act out of committee and onto the floor for a vote by the whole Senate. As a committee chair, he is responsible to all New Yorkers. "
          facebook="https://www.facebook.com/kemp.hannon"
          twitter="@kemphannon Bring the NYHealthAct out of the health committee! #NYHealthAct"
          him
          label="A"/>
        <SenatorProfile name="Christine Young"
            phone="518–455–3563"
            title="Chair of the Finance Committee"
            img={Young} 
            explainer="Tell her to bring the New York Health Act out of committee and onto the floor for a vote. She, also, as a committee chair takes phone calls from all New Yorkers. "
            facebook="https://www.facebook.com/SenatorCathyYoung"
            twitter="@SenatorYoung Bring the NYHealthAct out of the finance committee! #NYHealthAct"
            label="B"
          />
          <SenatorProfile name="John J. Flanagan"
              phone="518–455–2071"
              title="Senate Majority Leader"
              img={Flanagan} 
              explainer="Tell him to support the passage of health care for all New Yorkers and schedule a floor vote for the New York Health Act before June 21.  "
              facebook="https://www.facebook.com/sen.john.flanagan"
              him
              label="C"
            />
        </div>
    </div>
    )
  }
}
CalltoAction.propTypes = {
  title: PropTypes.string
}
