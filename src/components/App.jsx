import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Statistics/Notification/Notification';


import { useReducer } from 'react'
import { reducer } from '../services/reducer'

export const App = ({step}) => {

const [stateObj,updateState] = useReducer(reducer,
  {
    good: 0,
    neutral: 0,
    bad: 0,
  })


// Need fix click on "bad" button



  const feedbackBtnClick = e => {
    const eValue = e;

    updateState({type:eValue,payload:step})
  };

  const countTotalFeedback = () => {
    return stateObj.good + stateObj.neutral + stateObj.bad;
  }

  const countPositiveFeedbackPercentage = () => {
    return (stateObj.good / countTotalFeedback()) * 100;
  }

  return (
      <>
        <Section
          title="Please leave your feedback">
            <FeedbackOptions
              options={Object.keys(stateObj)}
              onLeaveFeedback={feedbackBtnClick}
            />
          </Section>
          <Section title="Statistics">
          {countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback yet" />
          ) : (
            <Statistics
              good={stateObj.good}
              neutral={stateObj.neutral}
              bad={stateObj.bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
            )}
            </Section>
          </>
    );



  }

