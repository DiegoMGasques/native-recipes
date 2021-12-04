import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RecipeDetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>{navigation.getParam("recipe").title}</Text>
    </View>
  );
};

RecipeDetailsScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: navigation.getParam("recipe").title,
});

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RecipeDetailsScreen;
