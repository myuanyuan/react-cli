import fetch from 'isomorphic-fetch';
import StandardError from 'standard-error';
import { message, Modal } from 'antd';

const API_CONFIG = window.API_CONFIG;

require('es6-promise').polyfill();

const AuthorizationToken = localStorage.getItem('token');

const errorMessages = res => `${res.status} ${res.statusText}`;
// 是否校验xss
let isXss = true;
function check401(res) {
  // 登陆界面不需要做401校验
  if (res.status === 401 && !res.url.match('login.html')) {
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
    Modal.error({
      title: '登陆信息过期',
      content: '您的登陆信息已过期，请重新登陆',
      onOk: () => {
        window.location.href = '/login.html';
      },
    });
    return Promise.reject(errorMessages(res));
  }
  return res;
}

function check404(res) {
  if (res.status === 404) {
    message.error('请求未找到,请重试!');
  }
  return res;
}

function jsonParse(res) {
  return res.json();
}

function setUriParam(keys, value, keyPostfix) {
  let keyStr = keys[0];

  keys.slice(1).forEach((key) => {
    keyStr += `[${key}]`;
  });

  if (keyPostfix) {
    keyStr += keyPostfix;
  }

  return `${encodeURIComponent(keyStr)}=${encodeURIComponent(value)}`;
}

function getUriParam(keys, object) {
  const array = [];

  if (object instanceof Array) {
    object.forEach((value) => {
      array.push(setUriParam(keys, value, '[]'));
    });
  } else if (object instanceof Object) {
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        const value = object[key];

        array.push(getUriParam(keys.concat(key), value));
      }
    }
  } else if (object !== undefined) {
    array.push(setUriParam(keys, object));
  }

  return array.join('&');
}

function toQueryString(object) {
  const array = [];
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const str = getUriParam([key], object[key]);

      if (str) {
        array.push(str);
      }
    }
  }
  return array.join('&');
}

function cFetch(url, options) {
  let mergeUrl = url;
  const defaultOptions = {
    method: 'GET',
  };
  const checkStatus = function (response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    if (response.status === 403) {
      Modal.error({
        title: '暂无权限查看',
        content: '您暂无权限查看此目录，请联系管理员',
        onOk: () => {
          window.location.href = '/';
        },
      });
      return Promise.reject(errorMessages(response));
    }

    return response
      .text()
      .then(
      errorMsg =>
        new StandardError({
          statusCode: response.status,
          msg: errorMsg,
        }),
    )
      .then((err) => {
        throw err;
      });
  };

  // 是否使用验证自定义xss
  if (API_CONFIG.USEXSS) {
    const httpValues = options.params;
    const xssString = localStorage.getItem('xss');
    if (xssString) {
      const xssArrys = xssString.split(',');
      const isValid = (str) => {
        const result = true;
        const xssArry = [];
        for (let i = 0; i < xssArrys.length; i++) {
          const tempString = new RegExp(xssArrys[i], 'i');
          xssArry.push(tempString);
        }
        for (let i = 0, len = xssArry.length; i < len; i++) {
          if (xssArry[i].test(str)) {
            return false;
          }
        }
        return result;
      };
      for (const i in httpValues) {
        if (!isValid(httpValues[i])) {
          isXss = false;
        }
      }
    }
  }
  if (!isXss) {
    message.error('输入框含有非法字符!');
    return;
  }


  const opts = Object.assign({}, defaultOptions, { ...options });
  if (opts && opts.method.toUpperCase() === 'GET' && opts.params) {
    mergeUrl = `${mergeUrl}?${toQueryString(opts.params)}`;
  }
    opts.headers = {
        ...opts.headers,
        userToken: AuthorizationToken,
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };

  const fetchResult = fetch(mergeUrl, opts)
    .then(check401)
    .then(check404)
    .then(checkStatus)
    .then(jsonParse);
  return fetchResult;
}

window.addEventListener('unhandledrejection', (err) => {
  const ex = err.reason;
  if ((ex.constructor && ex.constructor === StandardError) || ex.msg) {
    if (ex && ex.statusCode && ex.statusCode == 401) {
      return;
    }
    message.error('请求出错');
  }
});

export default cFetch;
