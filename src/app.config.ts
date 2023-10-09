/*
 * @Author: lc 13454782562@163.com
 * @Date: 2023-09-27 16:15:49
 * @LastEditors: lc 13454782562@163.com
 * @LastEditTime: 2023-10-09 11:24:35
 * @FilePath: \journeyhub\src\app.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/journey_detail/journey_detail',
    'pages/journey_add/journey_add',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
