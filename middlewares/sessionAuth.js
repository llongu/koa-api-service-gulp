const sessionAuth = () => {
  return async (ctx, next) => {
    await next()
    if (!ctx.session.user) {
      if (ctx.url === "/login" && ctx.method === 'GET') {
        ctx.body = await ctx.render('login', {
          title: 'login'
        })
      } else if (ctx.url !== "/login" || ctx.method !== 'POST') {
        ctx.redirect('/login')
      }
    }
  }
}

export default sessionAuth