import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CategoryRecepiesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>This is the Category Recepies screen!</Text>
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

export default CategoryRecepiesScreen;
