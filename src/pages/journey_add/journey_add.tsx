/*
 * @Author: lc 13454782562@163.com
 * @Date: 2023-10-09 11:23:41
 * @LastEditors: lc 13454782562@163.com
 * @LastEditTime: 2023-10-09 11:24:19
 * @FilePath: \journeyhub\src\pages\journey_add\journey_add.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { View } from '@tarojs/components'
import { useLoad, navigateTo } from '@tarojs/taro'

import {  } from 'taro-ui'

import './journey_add.scss'



export default function Index() {



  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View>
      新增游记
    </View>
  )
}
