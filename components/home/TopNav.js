import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { Colours } from '../Colours';
import { useNavigation } from '@react-navigation/native';

const TopNav = () => {
    const [input, setInput] = useState('')
    const navigation=useNavigation()
    return (
        <View style={styles.topNav}>
            <View style={styles.logoDiv}>
                <Image
                    source={require('../../assets/images/logo1.png')}
                    style={{
                        width: 30,
                        height: 30
                    }}
                />
                <Text style={{
                    fontSize: 22,
                    color: Colours.title,
                    fontWeight: 'bold',
                    marginLeft: 10
                }}>Dear Pets</Text>
            </View>
            <View style={styles.inputDiv}>
                <TextInput
                    placeholder='Search Pets'
                    style={styles.input}
                    placeholderTextColor={Colours.title}
                    value={input}
                    onChangeText={text=>setInput(text)}
                    onSubmitEditing={()=>{
                        navigation.navigate('SearchScreen',{search:input})
                    }}
                />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={()=>{
                        navigation.navigate('SearchScreen',{search:input})
                    }}
                >
                    <Feather name='search' size={24} color={Colours.text} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topNav: {
        width: '100%',
        padding: 10,
        backgroundColor: Colours.secondary,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    logoDiv: {
        width: '100%',
        flexDirection: 'row',
        alignItems: "center",
    },
    inputDiv: {
        width: '100%',
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        borderRadius: 7,
        backgroundColor: Colours.primary,
        marginTop: 10,
        paddingLeft: 10
    },
    btn: {
        width: 45,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colours.title,
        borderRadius: 7
    },
    input: {
        height: '100%',
        width: '82%',
        fontSize: 18,
        color: Colours.text
    }
})

export default TopNav