/*
 * @Author: your name
 * @Date: 2022-04-05 15:33:59
 * @LastEditTime: 2022-04-05 15:35:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /egg-news/app.js
 */
module.exports = app => {
  app.beforeStart(async () => {
    console.log('这里是beforeStart')
  })
}
