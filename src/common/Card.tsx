import React from "react";
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity } from "react-native";

const deviceHeight = Dimensions.get('window').height;

interface Props {
    title: string
    image: any
    onPress: () => void
    price: string
}

const Card = ({ title, image, onPress, price } : Props) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.image} source={image} />
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 15,
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        height: deviceHeight * 0.4,
    },
    image: {
        height: 150,
        resizeMode: "contain",
        margin: 10,
    },
    title: {
        fontFamily: "Roboto",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "left",
        paddingVertical: 10,
        paddingLeft: 10,
    },
    price: {
        fontFamily: "Roboto",
        fontSize: 16,
        textAlign: "left",
        paddingBottom: 10,
        paddingLeft: 10,
    },
});

export default Card;