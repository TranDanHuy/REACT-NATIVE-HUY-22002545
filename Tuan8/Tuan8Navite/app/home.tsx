import React, { useEffect, useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

interface Task {
  id: string;
  title: string;
}

const API = "https://683071e4f504aa3c70f7ef9e.mockapi.io/api/tasks";

export default function Home() {
  const { name } = useLocalSearchParams<{ name: string }>();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [search, setSearch] = useState("");

  const loadTasks = async () => {
    try {
      const res = await fetch(API);
      const data: Task[] = await res.json();
      setTasks(data);
    } catch (error) {
      console.log("Error loading tasks", error);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const filtered = tasks.filter((t) => t.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: "https://i.pravatar.cc/100?img=13" }} style={styles.avatar} />
        <View>
          <Text style={styles.headerName}>Hi {name || "Twinkle"}</Text>
          <Text style={styles.subText}>Have a great day ahead!</Text>
        </View>
      </View>

      {/* Search box */}
      <View style={styles.searchBox}>
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/54/54481.png" }}
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />
      </View>

      {/* Task list */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskCard}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/845/845646.png",
                }}
                style={styles.checkIcon}
              />
              <Text style={styles.taskText}>{item.title}</Text>
            </View>
            <Image
              source={{ uri: "https://cdn-icons-png.flaticon.com/512/84/84380.png" }}
              style={styles.editIcon}
            />
          </View>
        )}
      />

      {/* Add button */}
      <TouchableOpacity style={styles.addButton} onPress={() => router.push("/addjob")}>
        <Text style={styles.addText}>＋</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f7f9fb", padding: 16 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 15 },
  avatar: { width: 45, height: 45, borderRadius: 22, marginRight: 10 },
  headerName: { fontWeight: "bold", fontSize: 18 },
  subText: { color: "#777" },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 10,
    elevation: 3,
    marginBottom: 15,
  },
  searchIcon: { width: 18, height: 18, tintColor: "#777" },
  searchInput: { flex: 1, height: 40, paddingLeft: 8 },
  taskCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    elevation: 2,
  },
  checkIcon: { width: 22, height: 22, tintColor: "#00cc66", marginRight: 8 },
  editIcon: { width: 20, height: 20, tintColor: "#ff6b6b" },
  taskText: { fontSize: 16, color: "#333" },
  addButton: {
    position: "absolute",
    bottom: 25,
    alignSelf: "center",
    backgroundColor: "#00c0f3",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  addText: { color: "#fff", fontSize: 28, fontWeight: "bold" },
});
