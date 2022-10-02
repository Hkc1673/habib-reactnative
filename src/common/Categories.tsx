import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
    title: string
    onPress: () => void
}

const Categories = ({ title, onPress }:Props) => {
    return (
        <TouchableOpacity onPress={onPress}
        >
            <View style={styles.card}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 5,
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        height: 50,
        width: 130,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontFamily: "Roboto",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        paddingVertical: 10,
        paddingLeft: 10,
    },
});

export default Categories;