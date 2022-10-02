import {  View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, fetchCategories } from '@store/slice/productsSlice'
import Card from '@common/Card'
import Categories from '@common/Categories'
import AddButton from '@common/AddButton'
import Loading from '@common/Loading'

interface Props {
    navigation: any
}

const ProductScreen = ({ navigation }: Props) => {
    const dispatch = useDispatch()
    const { products, categories, loading } = useSelector((state: any) => state.products)

    const [data, setData] = useState([])
    const [category, setCategory] = useState([])

    useEffect(() => {
        dispatch(fetchProducts())
        dispatch(fetchCategories())
    }, [])

    useEffect(() => {
        setData(products)
    }, [products])

    useEffect(() => {
        setCategory([{ id: 0, name: 'All' }, ...categories])
    }, [categories])

    const goToDetail = (product: any) => {
        navigation.navigate('ProductDetail', { product })
    }

    const filterByCategory = (category: any) => {
        if (category === "All") {
            setData(products)
        }
        else {
            const filteredData = products.filter((item: any) => item?.category === category)
            setData(filteredData)
        }

    }
    return (
        <View
            style={{ flex: 1 }}
        >
            <FlatList
                style={{ marginVertical: 10 }}
                data={category}
                renderItem={({ item }) => (
                    <Categories
                        title={item?.name}
                        onPress={() => filterByCategory(item?.name)}
                    />
                )}
                keyExtractor={item => item?.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            <FlatList
                style={{ margin: 10 }}
                data={data}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Card
                        key={item?.id}
                        title={item?.name}
                        image={{ uri: item?.avatar }}
                        onPress={() => goToDetail(item)}
                        price={`$ ${item?.price} `}
                    />
                )}
                keyExtractor={item => item?.id}
            />
            <AddButton
                title="+"
                onPress={() => navigation.navigate('Create')}
            />
            {loading && <Loading />}
        </View>
    )
}

export default ProductScreen
