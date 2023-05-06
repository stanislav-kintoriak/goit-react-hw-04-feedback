import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, clickFeedback }) => {
  return (
    <div className={css.button__section}>
      {options.map(option => {
        return (
          <button
            className={css.button}
            type="button"
            key={option}
            onClick={() => {
              clickFeedback(option);
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};