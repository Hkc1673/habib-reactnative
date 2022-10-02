import React, { useState, useCallback } from "react";
import { SafeAreaView, StyleSheet, TextInput, FlatList, Text, Alert } from "react-native";
import Categories from "@common/Categories";
import { useSelector, useDispatch } from "react-redux";
import AddButton from "@common/AddButton";
import { createProducts, fetchProducts } from "@store/slice/productsSlice";
import Loading from "@common/Loading";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
    Home: undefined;
    ProductDetail: { id: string };
    Create: undefined;
  };

const CreateScreen = ({ navigation }: NativeStackScreenProps<RootStackParamList>) => {

    const dispatch = useDispatch()

    const { categories, loading } = useSelector((state: any) => state.products)

    const [name, onChangeName] = useState("");
    const [price, onChangePrice] = useState("");
    const [description, onChangeDescription] = useState("");
    const [image, onChangeImage] = useState("");
    const [email, onChangeEmail] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("")

    const onCreate = useCallback(async () => {
        const product = {
            name,
            price,
            description,
            avatar: image,
            developerEmail: email,
            category: selectedCategory
        }
        const action = await dispatch(createProducts(product))
        if (createProducts.fulfilled.match(action)) {
            console.log("action", action.payload)
            Alert.alert(
                "Success",
                action?.payload?.message,
                [
                    {
                        text: "Ok", onPress: async () => {
                            await dispatch(fetchProducts())
                            navigation.navigate("Home")
                        },
                    }
                ]
            );
        } else {
            Alert.alert(
                "Error",
                action?.payload?.message,
                [
                    { text: "Ok", onPress: () => { }, }
                ]
            );
            console.log("action", action.payload)
        }
    }, [name, price, description, image, email, selectedCategory, dispatch, navigation]);
    return (
        <SafeAreaView style={{ flex: 1 }} >
            <TextInput
                style={styles.input}
                onChangeText={onChangeName}
                value={name}
                placeholder="Product Title"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePrice}
                value={price}
                placeholder="Price"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeDescription}
                value={description}
                placeholder="Description"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeImage}
                value={image}
                placeholder="Image URL"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Email"
                keyboardType="email-address"
            />
            <Text
                style={styles.text}
            >
                {`Selected Category: ${selectedCategory}`}
            </Text>
            <FlatList
                style={{ marginVertical: 10 }}
                data={categories}
                renderItem={({ item }) => (
                    <Categories
                        title={item?.name}
                        onPress={() => setSelectedCategory(item?.name)}
                    />
                )}
                keyExtractor={item => item?.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            <AddButton
                title="+"
                onPress={() => onCreate()}
            />
            {loading && <Loading />}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    text: {
        margin: 12,
        letterSpacing: 1,
    }
});

export default CreateScreen;

