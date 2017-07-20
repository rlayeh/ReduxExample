import {
  SET_MESSAGE,
} from './actions';

const initialState = {
  helloMessage: null,
};

function exampleReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MESSAGE:
      return Object.assign({}, state, {
        helloMessage: action.message,
      });
    default:
      return state;
  }
}

export default exampleReducer;
