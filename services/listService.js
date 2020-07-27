import MyRequest from "../utils/myRequest";
/**
 * @fileoverview 获取列表数据
 * @author 
 */
class ListService {
  constructor() { }

  /**
   * @param {Object} opt
   */
  async queryData(opt) {
    return await new MyRequest({ url: '/list/query' }).fetch()
  }
}

export default ListService