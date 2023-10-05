import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colours } from '../Colours'
import { useNavigation } from '@react-navigation/native'

const ImageDiv = ({ item,navigation }) => {
    const urls=item.urls
    return (
        <TouchableOpacity style={styles.imgDiv}
            onPress={()=>{
                console.log(urls)
                navigation.navigate('ImageScreen',{urls:urls,name:item.id+'dearpet'})
            }}
        >
            <Image source={{ uri: item.urls.thumb }} style={styles.img} resizeMethod='scale' />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    imgDiv: {
        width: '33%',
        borderWidth: 2,
        borderColor: Colours.primary
    },
    img: {
        width: '100%',
        height: 150
    }
})

export default ImageDiv