import React, {Component, PropTypes} from 'react'
import SenatorProfile from './SenatorProfile'
import Hannon from "../../img/Hannon.jpeg"
import Young from "../../img/Young.jpeg"
import Flanagan from "../../img/Flanagan.jpeg"
import Cuomo from "../../img/Cuomo.jpeg"
const STYLES = {
  'title': {
    'fontSize': '100pt',
    'marginTop': '50px'
  },
  'subtitle' : {
    'fontSize': '50pt',
    'marginTop': '20px',
    'marginBottom': '50px',
    'paddingLeft': '10px',
    'paddingRight': '10px'
  },
  'ctaTargets': {
    'display': 'inline-block',
    'width': '100%',
    'marginBottom': '60px'
  }
}
export default class CalltoAction extends Component {
  render() {
    return(<div className="CalltoAction">
      <div className="title" style={STYLES.title}>
        {this.props.title}
      </div>
      <div className="subtitle" style={STYLES.subtitle}>
        {this.props.subtitle}
      </div>
      <div className="CTA-Targets" style={STYLES.ctaTargets}>
        <SenatorProfile name="Kemp Hannon"
          phone="518-455-2200"
          title="Chair of the Health Committee"
          img={Hannon} 
          explainer="Ask why he didn't support the New York Health Act and bring it out of committee. As a committee chair, he is responsible to all New Yorkers. "
          facebook="https://www.facebook.com/kemp.hannon"
          twitter=".@kemphannon Why didn't you support the #NYHealthAct? Why didn't you schedule a vote on it? We need you to lead NY! #PassNYHealth"
          him
          label="A"/>
          <SenatorProfile name="John J. Flanagan"
              phone="518–455–2071"
              title="Senate Majority Leader"
              img={Flanagan} 
              explainer="Ask why he didn't support the passage of health care for all New Yorkers and schedule a floor vote for the New York Health Act before June 21.  "
              facebook="https://www.facebook.com/sen.john.flanagan"
              twitter=".@LeaderFlanagan Why didn't you support the #NYHealthAct? Why didn't you schedule a vote on it? We're looking to you to lead. #PassNYHealth"
              him
              label="B"
            />
            <SenatorProfile name="Andrew Cuomo"
                phone="518-474-8390"
                title="Governor"
                img={Cuomo} 
                explainer="Ask why he didn't support the passage of health care for all New Yorkers and work with senate leadership to schedule a floor vote before June 21.  "
                facebook="https://www.facebook.com/GovernorAndrewCuomo"
                twitter=".@NYGovCuomo Why didn't you support the #NYHealthAct? Why didn't you schedule a vote on it? We're looking to you to lead. #PassNYHealth"
                him
                label="C"
                petition="https://passnyhealth.com/"
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
