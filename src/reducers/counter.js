import cFetch from './../utils/cFetch';
import {
PERSONAL_SVAE_ROLE_DATA_PENDING,
PERSONAL_SVAE_ROLE_DATA_FULFILLED,
PERSONAL_SVAE_ROLE_DATA_REJECTED,
} from './../constants/actionTypes';

const API_CONFIG = window.API_CONFIG;

export default function (state = { }, action) {
  switch (action.type) {
    case PERSONAL_SVAE_ROLE_DATA_FULFILLED:
      return {
        ...state,
        presonSaveRoleData: action.payload,
      };
    default:
    return state;
  }
}

// 保存角色信息
export function presonSaveRole(params) {
  return {
    type: PERSONAL_SVAE_ROLE_DATA_FULFILLED,
    payload: cFetch(API_CONFIG.GET_ALL_ROLELIST, { method: 'PUT', body: JSON.stringify(params)}),
  };
}