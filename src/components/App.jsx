import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackBtnClick = e => {
    const eValue = e;

    this.setState((prevState, { step }) => {
      return { ...prevState, [eValue]: prevState[eValue] + step };
    });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return (this.state.good / this.countTotalFeedback()) * 100;
  }

  render() {
    return (
      <>
        <Section
          title="Please leave your feedback"
          FeedbackOptions={
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={this.feedbackBtnClick}
            />
          }
          Statistics={
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          }
        />
      </>
    );
  }
}

App.propTypes = {
  step: PropTypes.number.isRequired,
};
