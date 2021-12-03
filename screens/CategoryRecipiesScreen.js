import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { RECIPES } from "../data/seed";

const CategoryRecipiesScreen = ({ navigation }) => {
  const renderRecipe = ({ item }) => {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  };

  const categoryId = navigation.getParam("id");
  const categoryRecipies = RECIPES.filter(
    (r) => !!r.categoryIds.find((id) => id === categoryId)
  );
  return (
    <View style={styles.screen}>
      <FlatList
        data={categoryRecipies}
        keyExtractor={(item) => item.id}
        renderItem={renderRecipe}
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
