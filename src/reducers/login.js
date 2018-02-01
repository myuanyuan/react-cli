import cFetch from './../utils/cFetch';
import {
    LOGIN_PENDING,
    LOGIN_FULFILLED,
    LOGIN_REJECTED,
    SAVE_USER_DATA,
} from './../constants/actionTypes.js';

const API_CONFIG = window.API_CONFIG;

export default function (state = { }, action) {
  switch (action.type) {
    case LOGIN_FULFILLED:
      return {
        ...state,
        loginData: action.payload,
      };
    case SAVE_USER_DATA:
      return {
        ...state,
        userData: action.userData,
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

// 保存用户信息
export function saveUserData(params) {
  return {
    type: SAVE_USER_DATA,
    userData:params,
  };
}
