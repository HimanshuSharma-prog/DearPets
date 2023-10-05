import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Colours } from '../Colours'
import { useNavigation } from '@react-navigation/native'
import { imageData } from '../Data'

const Category = () => {
    const navigation = useNavigation()
    const images = imageData
    return (
        <>
            {images.map((elem) => (
                <View style={{
                    padding:10 
                }}
                    key={elem.id}
                >
                    <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: Colours.text
                    }}>{elem.category}</Text>
                    <View style={styles.cardDiv}>
                        {elem.details.map((elem) => (
                            <TouchableOpacity
                                style={styles.card}
                                onPress={() => {
                                    navigation.navigate('SearchScreen', { search: elem.text })
                                }}
                            >
                                <Image source={elem.img} style={{
                                    width: 50,
                                    height: 50
                                }} />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            ))}
        </>
    )
}

const styles = StyleSheet.create({
    cardDiv: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10
    },
    card: {
        padding: 20,
        margin: 5,
        backgroundColor: Colours.secondary,
        borderRadius: 10
    }
})

export default Category