import { route, GET, POST } from "awilix-koa";

@route("/news")
class NewsController {
  constructor({ newsService }) {
    this.newsService = newsService
  }

  @route("/")
  @GET()
  async getNews(ctx, next) {
    const result = await this.newsService.queryData();
    ctx.body = await ctx.render('news', {
      data: result.data.data,
      title: 'news'
    })
  }

  @route("/")
  @POST()
  async postNews(ctx, next) {
    const result = await this.newsService.queryData();
    ctx.body = {
      ...result
    }
  }

}
export default NewsController