/*
 * @Author: your name
 * @Date: 2022-04-04 21:25:34
 * @LastEditTime: 2022-04-05 13:16:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /egg-news/app/controller/home.js
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { service, ctx } = this;
    const { newslist } = await service.home.getNewsList();
    await ctx.render('index', {
      list: newslist,
    });
  }
  async details() {
    const { ctx, service } = this;
    const { url } = ctx.query;
    const { newslist } = await service.home.getDetails(url);
    await ctx.render('details', {
      details: newslist[0],
    });

  }
}

module.exports = HomeController;
