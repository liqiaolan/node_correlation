import { Context } from 'egg';

export default {
  success(this: Context, data = null, message?) {
    this.body = {
      code: 0,
      message: message ? message : '',
      data,
    };
  },
  fail(this: Context, message: string, code?: number) {
    this.body = {
      code: code || -1,
      message: message || '未知错误',
      data: null,
    };
  }
};
