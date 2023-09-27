import { View } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import JourneyCard from '@/components/card/journey_card'

import dataList from './data.json'

import './index.scss'



export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='indexPage'>
      {
        dataList.journeyList.map((journey) => {
          return (
            <JourneyCard key={journey.id} data={journey}></JourneyCard>
          )
        })
      }
    </View>
  )
}
