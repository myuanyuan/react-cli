/* eslint-disable no-extra-boolean-cast */
import { message } from 'antd';
import isPromise from './isPromise';


const defaultTypes = ['PENDING', 'FULFILLED', 'REJECTED'];

/**
 * @function promiseMiddleware
 * @description
 * @returns {function} thunk
 */
export default function promiseMiddleware(config = {}) {
  const promiseTypeSuffixes = config.promiseTypeSuffixes || defaultTypes;
  return (ref) => {
    const { dispatch } = ref;

    return next => (action) => {
      if (action.payload) {
        if (!isPromise(action.payload) && !isPromise(action.payload.promise)) {
          return next(action);
        }
      } else {
        return next(action);
      }

      const { type, payload, meta } = action;
      const [
        PENDING,
        FULFILLED,
        REJECTED,
      ] = promiseTypeSuffixes;
      const getAction = (newPayload, isRejected) => ({
        type: isRejected ? type[2] : type[1],
        ...((newPayload === null || typeof newPayload === 'undefined') ? {} : {
          payload: newPayload,
        }),
        ...(!!meta ? { meta } : {}),
        ...(isRejected ? {
          error: true,
        } : {}),
      });

      let promise;
      let data;

      if (!isPromise(action.payload) && typeof action.payload === 'object') {
        promise = payload.promise;
        data = payload.data;
      } else {
        promise = payload;
        data = null;
      }
      next({
        type: type[0],
        ...(!!data ? { payload: data } : {}),
        ...(!!meta ? { meta } : {}),
      });

      const handleReject = (reason) => {
        const rejectedAction = getAction(reason, true);
        dispatch(rejectedAction);

        // 这里允许使用者添加fallback方案
        if (action.fallback && (typeof action.fallback === 'function')) {
          action.fallback(reason);
        } else {
          if(reason.indexOf("404") > -1){
            setTimeout(()=>{
              message.error("请求未找到,请联系管理员!")
            },500)
          }else{
            setTimeout(()=>{
              message.error("服务器未响应,请稍后重试!")
            },500)
          }
        }

        throw reason;
      };

      const handleFulfill = (value = null) => {
        const resolvedAction = getAction(value, false);
        dispatch(resolvedAction);

        return { value, action: resolvedAction };
      };

      return promise.then(handleFulfill, handleReject);
    };
  };
}
