import cFetch from './../utils/cFetch';
import {
    LOGIN_PENDING,
    LOGIN_FULFILLED,
    LOGIN_REJECTED,
} from './../constants/actionTypes.js';

const API_CONFIG = window.API_CONFIG;

export default function (state = { }, action) {
  switch (action.type) {
    case LOGIN_FULFILLED:
      return {
        ...state,
        loginData: action.payload,
      };
    default:
    return state;
  }
}

// 登录
export function login(params) {
  return {
    type: [LOGIN_PENDING, LOGIN_FULFILLED, LOGIN_REJECTED],
    payload: cFetch(API_CONFIG.LOGIN, { method: 'POST', body: JSON.stringify(params)}),
  };
}