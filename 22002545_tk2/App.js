import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Switch } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";

const Drawer = createDrawerNavigator();


function HomeScreen() {
  return (
    <View style={styles.center}>
      <Ionicons name="home-outline" size={60} color="tomato" />
      <Text style={styles.title}>Chào mừng bạn đến với Home!</Text>
      <Text style={styles.subtitle}>Ứng dụng React Native - Drawer Navigation</Text>
    </View>
  );
}


function ProfileScreen() {
  return (
    <View style={styles.center}>
      <Image source={require("./assets/dora.jfif")} style={styles.avatar} />
      <Text style={styles.name}>Trần Đan Huy</Text>
      <Text style={styles.subtitle}>📧 huydemo@example.com</Text>
    </View>
  );
}


function SettingsScreen() {
  const [notif, setNotif] = useState(true);
  const [dark, setDark] = useState(false);

  return (
    <View style={styles.center}>
      <View style={styles.row}>
        <Ionicons name="notifications-outline" size={24} color="tomato" />
        <Text style={styles.title}>Thông báo</Text>
        <Switch value={notif} onValueChange={setNotif} />
      </View>

      <View style={styles.row}>
        <Ionicons name="moon-outline" size={24} color="tomato" />
        <Text style={styles.title}>Dark Mode</Text>
        <Switch value={dark} onValueChange={setDark} />
      </View>
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveTintColor: "tomato",
          drawerLabelStyle: { fontSize: 16 },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 18, marginBottom: 8, fontWeight: "500" },
  subtitle: { fontSize: 14, color: "#555", marginBottom: 12 },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 12 },
  name: { fontSize: 20, fontWeight: "bold", marginBottom: 4 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    marginVertical: 12,
  },
});
