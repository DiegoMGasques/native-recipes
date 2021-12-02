import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategoryRecipiesScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>This is the {navigation.getParam("title")} Recepies screen!</Text>
      <Button
        title="Go to details"
        onPress={() => {
          navigation.navigate("RecipeDetails");
        }}
      />
    </View>
  );
};

CategoryRecipiesScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: navigation.getParam("title"),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryRecipiesScreen;
