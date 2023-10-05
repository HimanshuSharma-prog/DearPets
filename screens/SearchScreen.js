import { View, Text, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchNav from '../components/search/SearchNav'
import ImageDiv from '../components/search/ImageDiv'
import Loader from '../components/Loader'

const SearchScreen = ({ route,navigation }) => {
    const client_id = 'NK4rjdh8YzSFFYIUIxPPaSTK-uh-ZFUcJcaBi7xqv-U'
    const apiUrl = 'https://api.unsplash.com/search/photos?per_page=15'
    const [images, setImages] = useState([])
    const [page, setPage] = useState(1)
    const [search,setSearch]=useState(route.params.search)

    const getImages = async (query,searchType) => {
        setSearch(query)
        const response = await fetch(apiUrl
            + `&client_id=${client_id}`
            + `&page=${page}`
            + `&query=${query}`)
        if (response.status == 200) {
            const data = await response.json()
            // console.log(searchType)
            if (searchType == 'new') {
                setImages(data.results)
            } else {
                setImages([...images, ...data.results])
            }
        }
    }

    const loadMoreImage = () => {
        setPage(page + 1)
    }


    useEffect(() => {
        getImages(search)
    }, [page])

    return (
        <View style={{ flex: 1 }}>
            <SearchNav getImages={getImages}/>
            <FlatList
                data={images}
                renderItem={({item})=>(
                    <ImageDiv item={item} navigation={navigation} />
                )}
                keyExtractor={item => item.id}
                numColumns={3}
                onEndReached={loadMoreImage}
                onEndReachedThreshold={0}
                ListFooterComponent={Loader}
                style={{
                    paddingTop:10
                }}
            />
        </View>
    )
}

export default SearchScreen