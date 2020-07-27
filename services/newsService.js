import MyRequest from "../utils/myRequest";
/**
 * @fileoverview 获取新闻数据
 * @author 
 */
class newsService {
  constructor() { }

  /**
   * @param {Object} opt
   */
  async queryData(opt) {
    return await new MyRequest({ url: '/news/query' }).fetch()
  }
}

export default newsService