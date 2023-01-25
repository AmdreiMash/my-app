import defaultState from './defaultState';

const reduser = (state = defaultState, action) => {
  switch(action.type) {
    case 'ADD_TEXT':
      return { text: action.payload};

    case 'DELETE_TEXT':
      return { text: ''};

    default: return state;
  }
}

export default reduser;