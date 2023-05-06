import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { Notification } from './Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <h2 className={css.statistic__title}>Statistics</h2>
      {total === 0 ? (
        <Notification message="There is no feedback yet" />
      ) : (
        <ul className={css.statistics__list}>
          <li>
            <p>
              Good:<span>{good}</span>
            </p>
          </li>
          <li>
            <p>
              Neutral:<span>{neutral}</span>
            </p>
          </li>
          <li>
            <p>
              Bad:<span>{bad}</span>
            </p>
          </li>
          <li>
            <p>
              Total:<span>{total}</span>
            </p>
          </li>
          <li>
            <p>
              Positive feedback:
              <span>
                {Math.round(
                  positivePercentage === 0 ? '0' : positivePercentage
                )}
                %
              </span>
            </p>
          </li>
        </ul>
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
