import defaultState from './defaultState';

const textReduser = (state = defaultState, action) => {
  switch(action.type) {
    case 'ADD_TEXT':
      return { ...state, text: action.payload};

    case 'DELETE_TEXT':
      return { ...state, text: ''};

    default: return state;
  }
}

export default textReduser;