import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import TopNav from '../components/home/TopNav'
import Category from '../components/home/Category'

const HomeScreen = () => {
  return (
    <View style={{flex:1}}>
        <TopNav/>
        <ScrollView>
            <Category/>
        </ScrollView>
    </View>
  )
}

export default HomeScreen