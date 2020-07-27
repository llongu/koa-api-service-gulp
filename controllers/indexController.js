import { route, GET } from "awilix-koa";

@route("/")
class IndexController {
  constructor({ indexService }) {
    this.indexService = indexService
  }

  @route("/")
  @GET()
  async actionIndex(ctx, next) {
    const { title } = await this.indexService.getData()
    ctx.body = await ctx.render('index', {
      title
    })
  }
}

export default IndexController