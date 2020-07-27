import { route, GET, POST } from "awilix-koa";

@route("/login")
class loginController {
  constructor({ loginService }) {
    this.loginService = loginService
  }

  @route("/")
  @GET()
  async getLogin(ctx, next) {
    if (ctx.session.user) {

      ctx.redirect('/')
    } else {

      ctx.body = await ctx.render('login', {
        title: 'login'
      })
    }

  }

  @route("/")
  @POST()
  async postLogin(ctx, next) {
    const result = await this.loginService.queryData();
    const { username, password } = ctx.request.body
    if (username == 'admin' && password == '123456') {
      ctx.session.user = username
      // ctx.session=null 
      ctx.body = {
        ...result
      }
    } else {
      ctx.body = {
        code: 1,
        msg: "login failed",
        status: 401
      }
    }

  }

}
export default loginController