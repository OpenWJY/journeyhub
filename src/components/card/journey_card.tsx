import { View, Text } from '@tarojs/components'

import './journey_card.scss'

export default function JourneyCard({ data }) {

  function handleTap() {
    console.log(1)
  }

  const dynamicStyle = {

  }

  // 获取当前日期并与截止日期比较
  const today = new Date();
  const endDate = new Date(data.endDate);
  const isExpired = endDate < today;
  const journeyCardClass = isExpired ? 'journeyCard journeyCard-expired' : 'journeyCard';

  return (
    <View className={journeyCardClass} style={dynamicStyle} onTap={handleTap}>

      <View className='journeyCard-content'>
        <View className='journeyCard-header'>
          <Text className='journeyCard-title'>出游地点：{data.destination}</Text>
          <Text className='journeyCard-date'>日期：{data.startDate}</Text>
        </View>
        <Text className='journeyCard-tip'>{isExpired ? "已完成" : "》》》点击查看详情"}</Text>
      </View>
    </View>
  )
}