import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const deviceHeight = Dimensions.get('window').height;

interface Props {
    title: string
    image: any
    price: string
    detail: string
}

const DetailCard = ({ title, image, price, detail } : Props) => {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.detail}>{detail}</Text>
        </View>
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
        marginHorizontal: 10,
        marginVertical: 6,
    },
    image: {
        height: deviceHeight * 0.5,
        resizeMode: "contain",
        margin: 10,
    },
    title: {
        fontFamily: "Roboto",
        fontSize: 18,
        fontWeight: "900",
        textAlign: "left",
        paddingVertical: 10,
        paddingLeft: 10,
        letterSpacing: 1,
    },
    price: {
        fontFamily: "Roboto",
        fontSize: 16,
        textAlign: "left",
        paddingBottom: 10,
        paddingLeft: 10,
    },
    detail: {
        fontFamily: "Roboto",
        fontSize: 16,
        textAlign: "justify",
        padding: 10,
        color: "blue",
        letterSpacing: 1,
    },
});

export default DetailCard;