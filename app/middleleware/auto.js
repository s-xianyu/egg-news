module.exports = () => {
  return async function auth(ctx, next) {
    console.log('登录鉴权中间件');
    await next();
  };
}
