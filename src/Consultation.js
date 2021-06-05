import * as Survey from 'survey-react'
import React from 'react'

Survey
    .StylesManager
    .applyTheme("bootstrapmaterial");

class Consultation extends React.Component {
  render() {
    const survey = new Survey.Model(this.props.questions);
    survey.showProgressBar = 'top';
    survey.focusFirstQuestionAutomatic = false;

    /* Non-repeatable survey and upload/send to admin */
    // survey.onComplete.add(function (sender, options) {
    //   sender.clear(false);
    // });

    return (
      <Survey.Survey model={survey}/>
    )
  }
}

export default Consultation;