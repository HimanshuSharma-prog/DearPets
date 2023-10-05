import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { Colours } from '../Colours';
import { useNavigation } from '@react-navigation/native';
const SearchNav = ({getImages}) => {
    const navigation=useNavigation()
    const [input,setInput]=useState('')
    return (
        <View style={styles.searchNav}>
            <TouchableOpacity
                style={styles.backBtn}
                onPress={()=>{
                    navigation.goBack()
                }}
            >
                <Feather name='arrow-left' size={24} color={Colours.text} />
            </TouchableOpacity>
            <View style={styles.inputDiv}>
                <TextInput
                    placeholder='Search Pets'
                    style={styles.input}
                    placeholderTextColor={Colours.title}
                    value={input}
                    onChangeText={(text)=>setInput(text)}
                    onSubmitEditing={()=>{
                        getImages(input,'new')
                    }}
                />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={()=>{
                        getImages(input,'new')
                    }}
                >
                    <Feather name='search' size={24} color={Colours.text} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    searchNav: {
        width: '100%',
        padding: 10,
        backgroundColor: Colours.secondary,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inputDiv: {
        width: '75%',
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        borderRadius: 7,
        backgroundColor: Colours.primary,
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
    },
    backBtn: {
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colours.primary,
        borderRadius: 7
    }
})

export default SearchNav