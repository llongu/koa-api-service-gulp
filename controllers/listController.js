import { route, GET, POST } from "awilix-koa";

@route("/list")
class ListController {
  constructor({ listService }) {
    this.listService = listService
  }

  @route("/")
  @GET()
  async getList(ctx, next) {
    const result = await this.listService.queryData();
    ctx.body = await ctx.render('list', {
      data: result.data.data
    })
  }

  @route("/")
  @POST()
  async postList(ctx, next) {
    const result = await this.listService.queryData();
    ctx.body = {
      ...result
    }
  }

}
export default ListController