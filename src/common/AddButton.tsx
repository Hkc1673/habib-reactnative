import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

interface Props {
    title: string
    onPress: () => void
}

const AddButton = ({ title, onPress }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default AddButton

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 40,
        right: 40,
        backgroundColor: "#699a00",
        borderRadius: 50,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 99,
        zIndex: 99
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff'
    },
})


