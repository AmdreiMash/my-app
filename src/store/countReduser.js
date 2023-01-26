import defaultState from './defaultState';

const countReduser = (state = defaultState, action) => {
  switch(action.type) {
    case 'INCREASE': //increase
      return {...state, count: state.count + 1};

    case 'REDUCE': // reduce
    return {...state, count: state.count - 1};

    default: return state;
  }
}

export default countReduser;