import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const Loading = () => {
    return (
        <View style={styles.container}>
        <ActivityIndicator size="large" color="#000" />
        </View>
    );
    }

export default Loading;

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      flex: 1,
      width: "100%",
      height: "100%",
      backgroundColor:"rgba(0, 0, 0, 0.5)"
    }
  })