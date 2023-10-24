
import { View, ScrollView } from '@tarojs/components'
import { navigateTo } from '@tarojs/taro'
import React, { Component, useState, useEffect } from 'react'
import JourneyCard from '@/components/card/journey_card'
import dataList from './data.json'
import './home.scss'

export default function Mine() {
  const [showMoreSet, setShowMoreSet] = useState(false)
  const [scrollTop, setScrollTop] = useState(-1)

  function handleTap() {
    setShowMoreSet(false)
    navigateTo({
      url: '/pages/journey_add/journey_add',
    })
  }
  const setBtnTap = () => {
    setShowMoreSet(!showMoreSet)
  }
  const goTop = () => {
    setScrollTop(0)
    setShowMoreSet(false)
  }
  let timer
  const scrollView = (e) => {
    console.log(e.detail)
    clearTimeout(timer)
    timer = setTimeout(() => {
      setScrollTop(e.detail.scrollTop)
    }, 1000)
  }
  
  const stopPropagation = (ev) => {
    ev.stopPropagation()
  }
  return (
    <ScrollView className='cardList' scrollY scrollWithAnimation scrollTop={scrollTop} onScroll={scrollView}>
      {
        dataList.journeyList.map((journey) => {
          return (
            <JourneyCard key={journey.id} data={journey}></JourneyCard>
          )
        })
      }
      <View className={`cardSetBtn${showMoreSet ? ' active' : ''}`} onTap={setBtnTap}>
        <View className='cardSetList' onTap={stopPropagation}>
          <View className='cardSet' onTap={handleTap}>添加</View>
          <View className='cardSet'>过滤</View>
          <View className='cardSet' onTap={goTop}>回顶</View>
        </View>
      </View>
    </ScrollView>
  )
}