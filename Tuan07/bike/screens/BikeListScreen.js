import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";

const bikes = [
  { id: "1", name: "Pinarello", price: 1800, image: require("../assets/anhA.PNG") },
  { id: "2", name: "Pina Mountain", price: 1700, image: require("../assets/anhB.PNG") },
  { id: "3", name: "Pina Bike", price: 1500, image: require("../assets/anhC.PNG") },
  { id: "4", name: "Pinarello", price: 1900, image: require("../assets/anhD.PNG") },
  { id: "5", name: "Pinarello", price: 2700, image: require("../assets/anhE.PNG") },
  { id: "6", name: "Pinarello", price: 1350, image: require("../assets/anhF.PNG") },
];

export default function BikeListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The world’s Best Bike</Text>

      <FlatList
        data={bikes}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("BikeDetail", { bike: item })}
          >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 12, color: "red", textAlign: "center" },
  list: { alignItems: "center" },
  card: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    margin: 8,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    elevation: 2,
  },
  image: { width: 120, height: 100, resizeMode: "contain" },
  name: { fontSize: 16, fontWeight: "600", marginTop: 8 },
  price: { fontSize: 14, color: "green" },
});
