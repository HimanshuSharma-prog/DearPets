import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { Colours } from './Colours'

const Loader = () => {
  return (
    <View style={{
        width:'100%',
        alignItems:'center',
        padding:10
    }}>
        <ActivityIndicator size={'large'} />
      <Text style={{
        fontSize:18,
        color:Colours.text
      }}>Loading images ...</Text>
    </View>
  )
}

export default Loader