import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategoriesScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>This is the Categories screen!</Text>
      <Button
        title="Category"
        onPress={() => {
          navigation.navigate("CategoryRecipies");
        }}
      />
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

export default CategoriesScreen;
