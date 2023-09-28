

import { View } from '@tarojs/components'
import { useLoad, navigateTo } from '@tarojs/taro'
import { AtTabBar, AtAvatar } from 'taro-ui'
import React, { Component, useState, useEffect } from 'react'

import Mine from '@/components/mine/mine'
import Home from '@/components/home/home'

import './index.scss'



export default function Index() {

  const [activeTab, setActiveTab] = useState(0)

  function handleTabClick(value) {
    // 如果点击的是当前的tab，则不做任何操作
    if (activeTab === value) {
      return
    }
    // 设置当前的tab
    setActiveTab(value)
  }

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='indexPage'>
      {
        // 根据当前的tab，显示不同的内容
        activeTab === 0 ?
          // 如果是首页，则显示行程列表
          (
            <Home></Home>
          ) :
          // 如果是我的，则显示个人信息
          (
            <Mine></Mine>
          )
      }

      <AtTabBar
        fixed
        tabList={[
          { title: '首页' },
          { title: '我的' }
        ]}
        current={activeTab}
        onClick={handleTabClick}
      />
    </View>
  )
}
