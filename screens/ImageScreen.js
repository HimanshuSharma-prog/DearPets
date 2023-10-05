import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { Colours } from '../components/Colours'
import * as FileSystem from 'expo-file-system'
import { shareAsync } from 'expo-sharing'

const ImageScreen = ({ route, navigation }) => {
    // console.log('url : ',route.params.urls)
    const [loader, setLoader] = useState(false)
    const [msg, setMsg] = useState('')
    const urls = route.params.urls
    const downloadImage = async () => {
        setLoader(true)
        setMsg('Downloading ...')
        const fileName = `${route.params.name}.jpeg`
        const result = await FileSystem.downloadAsync(urls.full,
            FileSystem.documentDirectory + fileName
        )
        console.log(result)

        save(result.uri, fileName, result.headers['content-type']);
    }

    const save = async (uri, filename, mimetype) => {
        console.log('mimetype : ', mimetype)
        if (Platform.OS === "android") {
            const permissions = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
            if (permissions.granted) {
                const base64 = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 });
                await FileSystem.StorageAccessFramework.createFileAsync(permissions.directoryUri, filename, mimetype)
                    .then(async (uri) => {
                        await FileSystem.writeAsStringAsync(uri, base64, { encoding: FileSystem.EncodingType.Base64 });
                        setLoader(false)
                        setMsg('')
                    })
                    .catch(e => console.log(e));
            } else {
                shareAsync(uri);
                setLoader(false)
                setMsg('')
            }
        } else {
            shareAsync(uri);
            setLoader(false)
            setMsg('')
        }
    };
    return (
        <View style={styles.imageDiv}>
            <View style={styles.nav}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        navigation.goBack()
                    }}
                >
                    <Feather name='arrow-left' size={24} color={Colours.text} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        downloadImage()
                    }}
                >
                    <Feather name='download' size={24} color={Colours.text} />
                </TouchableOpacity>
            </View>
            <View style={styles.imgDiv}>
                {loader ? <View style={styles.loader}>
                    <ActivityIndicator size={'large'} />
                    <Text style={{
                        fontSize: 20,
                        color: Colours.text,
                        marginTop: 5
                    }}>{msg}</Text>
                </View> : <></>}
                <Image
                    source={{ uri: urls.full }}
                    style={styles.img}
                    resizeMode='contain'
                    onLoadStart={() => {
                        setLoader(true)
                        setMsg('Loading ..')
                    }}
                    onLoadEnd={() => {
                        setLoader(false)
                        setMsg('')
                    }}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    imageDiv: {
        flex: 1,
    },
    nav: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: Colours.secondary
    },
    btn: {
        width: 45,
        height: 45,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colours.primary
    },
    imgDiv: {
        width: '100%',
        height: '100%',
        position: 'relative'
    },
    img: {
        width: '100%',
        height: '100%'
    },
    loader: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: Colours.light,
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

})
export default ImageScreen