import * as types from '../constants/ActionTypes';

export function updateNumber(number) {
  return { type: types.UPDATE_NUMBER, number };
}

export function updateFunction(symbol, number) {
  return { type: types.UPDATE_FUNCTION, symbol, number };
}