import { UPDATE_NUMBER, UPDATE_FUNCTION } from '../constants/ActionTypes';

const initialState = {
  number: '',
  reserveNumber1: '',
  symbol: '',
  isShowingResult: false
};

export default function calculator(state = initialState, action) {
  switch (action.type) {
  case UPDATE_NUMBER:
    return Object.assign({}, state, {
      number: action.number,
      isShowingResult: false
    });
  case UPDATE_FUNCTION:
    return Object.assign({}, state, {
      symbol: action.symbol || '' ,
      reserveNumber1: action.number || '',
      number: '',
      isShowingResult: true
    });
  default:
    return state;
  }
}
