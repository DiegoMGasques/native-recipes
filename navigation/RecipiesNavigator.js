import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryRecipiesScreen from "../screens/CategoryRecipiesScreen";
import RecipeDetailsScreen from "../screens/RecipeDetailsScreen";

const RecipiesNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryRecipies: CategoryRecipiesScreen,
  RecipyDetails: RecipeDetailsScreen,
});

export default createAppContainer(RecipiesNavigator);
