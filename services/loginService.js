import MyRequest from "../utils/myRequest";
/**
 * @fileoverview 获取新闻数据
 * @author 
 */
class loginService {
  constructor() { }

  /**
   * @param {Object} opt
   */
  queryData(opt) {
    return {
      code: 0,
      status: 200,
      msg: "login success"
    }
  }
}

export default loginService