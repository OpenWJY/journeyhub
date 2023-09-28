
import { View } from '@tarojs/components'
import { useLoad, navigateTo } from '@tarojs/taro'

import {  } from 'taro-ui'

import './journey_detail.scss'



export default function Index() {



  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View>
      游记详情
    </View>
  )
}
