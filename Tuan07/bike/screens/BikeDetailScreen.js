import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function BikeDetailScreen({ route }) {
  const { bike } = route.params;

  return (
    <View style={styles.container}>
      <Image source={bike.image} style={styles.image} />

      <Text style={styles.name}>{bike.name}</Text>
      <Text style={styles.price}>${bike.price}</Text>

      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.description}>
        It is a very important form of writing as we write almost everything in
        paragraphs, be it an answer, essay, story, emails, etc.
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  image: { width: "100%", height: 220, resizeMode: "contain", marginBottom: 16 },
  name: { fontSize: 22, fontWeight: "bold", marginBottom: 8 },
  price: { fontSize: 18, color: "green", marginBottom: 12 },
  sectionTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 6 },
  description: { fontSize: 14, color: "#444", marginBottom: 20 },
  button: {
    backgroundColor: "red",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
