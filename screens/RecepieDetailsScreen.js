import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RecepieDetailsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>This is the Recepie Details screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RecepieDetailsScreen;
