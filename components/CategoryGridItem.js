import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

const CategoryGridItem = ({ category, onPress = () => {} }) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.category}>
      <TouchableCmp onPress={onPress} style={{ flex: 1 }}>
        <View
          style={{
            ...styles.container,
            ...{ backgroundColor: category.color },
          }}
        >
          <Text style={styles.title} numberOfLines={2}>
            {category.title}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    flex: 1,
    height: 150,
    margin: 15,
    borderRadius: 16,
    overflow: "hidden",
  },
  container: {
    flex: 1,
    borderRadius: 16,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 16,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    textAlign: "right",
  },
});

export default CategoryGridItem;
