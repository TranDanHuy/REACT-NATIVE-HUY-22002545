import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { router } from "expo-router";

export default function Index() {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MANAGE YOUR{"\n"}TASK</Text>

      <View style={styles.inputContainer}>
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png" }}
          style={styles.icon}
        />
        <TextInput
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push({ pathname: "/home", params: { name } })}
      >
        <Text style={styles.buttonText}>GET STARTED →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#8b5cf6",
    textAlign: "center",
    marginBottom: 50,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    paddingHorizontal: 10,
    width: "80%",
    marginBottom: 30,
  },
  icon: { width: 18, height: 18, tintColor: "#777", marginRight: 8 },
  input: { flex: 1, height: 45 },
  button: {
    backgroundColor: "#00c0f3",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 35,
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
