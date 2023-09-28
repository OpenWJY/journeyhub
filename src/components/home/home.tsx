
import { View, Text } from '@tarojs/components'
import JourneyCard from '@/components/card/journey_card'
import dataList from './data.json'

export default function Mine() {
    return (
        <View className='cardList'>
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