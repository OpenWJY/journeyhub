/*
 * @Author: lc 13454782562@163.com
 * @Date: 2023-09-27 16:15:49
 * @LastEditors: lc 13454782562@163.com
 * @LastEditTime: 2023-09-28 11:10:09
 * @FilePath: \journeyhub\src\components\card\journey_card.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { View, Text } from '@tarojs/components'
import { navigateTo } from '@tarojs/taro'
import './journey_card.scss'

export default function JourneyCard({ data }) {

  function handleTap() {
    navigateTo({
      url: '/pages/journey_detail/journey_detail',
    })
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