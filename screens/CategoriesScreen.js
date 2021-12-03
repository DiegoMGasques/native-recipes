import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import CategoryGridItem from "../components/CategoryGridItem";
import { CATEGORIES } from "../data/seed";

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryGridItem = ({ item }) => {
    return (
      <CategoryGridItem
        category={item}
        onPress={() => {
          navigation.navigate("CategoryRecipies", { ...item });
        }}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryGridItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Categories",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
