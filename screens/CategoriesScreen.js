import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import { CATEGORIES } from "../data/seed";
import colors from "../style/theme/colors";

const CategoryGrid = (onPress = () => {}) => {
  return ({ item }) => (
    <TouchableOpacity onPress={onPress(item)} style={styles.category}>
      <View>
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const CategoriesScreen = ({ navigation }) => {
  const handleCategoryPress = (category) => () => {
    navigation.navigate("CategoryRecipies", { ...category });
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={CategoryGrid(handleCategoryPress)}
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
  category: {
    flex: 1,
    height: 150,
    margin: 15,
  },
});

export default CategoriesScreen;
