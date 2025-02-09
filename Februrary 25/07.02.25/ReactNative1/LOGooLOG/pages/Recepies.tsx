import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, Alert, StyleSheet } from "react-native";

const getAllRecipes = async () => {
  const apiKey = "your-api-key-here";
  let page = 1;
  let recipes: any = [];
  let hasMore = true;

  while (hasMore) {
    const url = `https://api2.bigoven.com/recipes?pg=${page}&rpp=25&api_key=${apiKey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Results) {
        recipes = [...recipes, ...data.Results];
      }
      hasMore = data.ResultCount > page * 25;
      page++;
    } catch (error) {
      console.error("Error fetching recipes:", error);
      hasMore = false;
    }
  }

  return recipes;
};

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllRecipes();
      console.log(data);

      setRecipes(data);
      setLoading(false);
      Alert.alert("Success", "All recipes fetched!");
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#ff6347" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipes</Text>
      <FlatList
        data={recipes}
        keyExtractor={(item: any) => item.RecipeID.toString()}
        renderItem={({ item }) => (
          <View style={styles.recipeItem}>
            <Text style={styles.recipeTitle}>{item.Title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  recipeItem: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
  },
  recipeTitle: {
    fontSize: 18,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Recipes;
