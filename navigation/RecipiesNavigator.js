import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryRecipiesScreen from "../screens/CategoryRecipiesScreen";
import RecipeDetailsScreen from "../screens/RecipeDetailsScreen";
import { Platform } from "react-native";
import colors from "../style/theme/colors";

const RecipiesNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryRecipies: CategoryRecipiesScreen,
    RecipeDetails: RecipeDetailsScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? colors.primary.main : "white",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : colors.primary.main,
    },
  }
);

export default createAppContainer(RecipiesNavigator);
