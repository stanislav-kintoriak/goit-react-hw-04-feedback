export const reducer = (state, action) => {
  switch (action.type) {
    case 'good':
      return { ...state, good: state.good + action.payload };

    case 'neutral':
      return { ...state, neutral: state.neutral + action.payload };

    case 'bad':
      return { ...state, bad: state.bad + action.payload };

    default:
      break;
  }
};
