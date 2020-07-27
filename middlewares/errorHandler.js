const errorHandler = () => {
  return async (ctx, next) => {
    try {
      await next()
    } catch (error) {
      ctx.logger.error(error)
      ctx.status = 500
      //如果是页面 渲染 /接口 返回 {}
      if (ctx.req.method === 'GET') {
        ctx.body = await ctx.render('error', { error: { status: 500, msg: 'server error / view log' } })
      } else {
        ctx.body = {
          msg: 'server error'
        }
      }
    }
  }
}

export default errorHandler