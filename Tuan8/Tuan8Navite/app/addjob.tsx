import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { router } from "expo-router";

const API = "https://683071e4f504aa3c70f7ef9e.mockapi.io/api/tasks";

export default function AddJob() {
  const [title, setTitle] = useState("");

  const addJob = async () => {
    if (!title.trim()) return alert("Please enter a job name");
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    setTitle("");
    router.push("/home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: "https://i.pravatar.cc/100?img=13" }} style={styles.avatar} />
        <View>
          <Text style={styles.headerName}>Hi Twinkle</Text>
          <Text style={styles.subText}>Have a great day ahead!</Text>
        </View>
      </View>

      <Text style={styles.title}>ADD YOUR JOB</Text>

      <TextInput
        placeholder="Input your job"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={addJob}>
        <Text style={styles.buttonText}>FINISH →</Text>
      </TouchableOpacity>

      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
        }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", alignItems: "center", padding: 20 },
  header: { flexDirection: "row", alignItems: "center", marginTop: 20, marginBottom: 30 },
  avatar: { width: 45, height: 45, borderRadius: 22, marginRight: 10 },
  headerName: { fontWeight: "bold", fontSize: 18 },
  subText: { color: "#777" },
  title: { fontWeight: "bold", fontSize: 22, color: "#333", marginBottom: 25 },
  input: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#00c0f3",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
  image: { width: 120, height: 120, marginTop: 40 },
});
