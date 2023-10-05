import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import { Colours } from '../components/Colours'
import ImageScreen from '../screens/ImageScreen'

const Stack = createNativeStackNavigator()
const StackRoute = () => {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown:false
            }}
        >
            <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                    contentStyle: {
                        backgroundColor: Colours.primary,
                    }
                }}
            />
            <Stack.Screen
                name='SearchScreen'
                component={SearchScreen}
                options={{
                    contentStyle: {
                        backgroundColor: Colours.primary,
                    }
                }}
            />
            <Stack.Screen
                name='ImageScreen'
                component={ImageScreen}
                options={{
                    contentStyle: {
                        backgroundColor: Colours.primary,
                    }
                }}
            />
        </Stack.Navigator>
    )
}

export default StackRoute