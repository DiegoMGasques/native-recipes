import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const RecipeListItem = ({ recipe, onPress = () => {} }) => {
  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={onPress}>
        <View>
          <View style={styles.cardHeader}>
            <ImageBackground
              source={{ uri: recipe.imageUrl }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <View style={styles.titleBackground}>
                  <Text style={styles.title} numberOfLines={1}>
                    {recipe.title}
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.bodyText}>{recipe.duration}m</Text>
            <Text style={styles.bodyText}>{recipe.complexity}</Text>
            <Text style={styles.bodyText}>{recipe.affordability}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#eee",
    minWidth: "90%",
    maxWidth: "100%",
    marginTop: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  bgImage: {
    flex: 1,
  },
  cardHeader: {
    height: 150,
  },
  titleContainer: {
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  titleBackground: {
    backgroundColor: "rgba(0,0,0,0.3)",
    width: "100%",
    padding: 8,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    color: "#eee",
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: "#ddd",
  },
  bodyText: {
    fontFamily: "open-sans-bold",
    fontSize: 14,
    color: "#222",
  },
});

export default RecipeListItem;
