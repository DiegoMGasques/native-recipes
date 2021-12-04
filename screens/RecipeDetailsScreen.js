import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderIconButton from "../components/HeaderIconButton";
import colors from "../style/theme/colors";

const RecipeDetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>{navigation.getParam("recipe").title}</Text>
    </View>
  );
};

RecipeDetailsScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: navigation.getParam("recipe").title,
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={HeaderIconButton}>
      <Item
        title="favorite"
        iconName="ios-star-outline"
        color={Platform.OS === "android" ? "white" : colors.primary.main}
        onPress={() => alert("favorite")}
      />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RecipeDetailsScreen;
