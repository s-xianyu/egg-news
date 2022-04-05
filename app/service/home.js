/*
 * @Author: your name
 * @Date: 2022-04-05 00:02:56
 * @LastEditTime: 2022-04-05 15:36:29
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /egg-news/app/service/home.js
 */
'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async getNewsList() {
    const { ctx, config } = this;
    const { data } = await ctx.curl(config.api + 'dongman/index?key=702c50bf1ebe730b6cbfbee8c6d81857&num=10');
    return JSON.parse(data);
  }
  async getDetails(url) {
    const { ctx, config } = this;
    const { data } = await ctx.curl(config.api + `htmltext/index?key=702c50bf1ebe730b6cbfbee8c6d81857&url=${url}`);
    return JSON.parse(data);
  }
}

module.exports = HomeService;

