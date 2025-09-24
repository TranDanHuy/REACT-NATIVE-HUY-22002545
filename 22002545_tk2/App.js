import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";

const API_URL = "https://68d33d65cc7017eec5465173.mockapi.io/phoneApp";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const localImages = {
  "1": require("./assets/anhdautien.PNG"),
  "2": require("./assets/anhthu2.PNG"),
  "3": require("./assets/anhthu3.PNG"),
  "4": require("./assets/anhthu4.PNG"),
};

// ------------------ Flow Home ------------------
function Screen1({ navigation }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL + "/1")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="blue" style={{ marginTop: 50 }} />;
  }

  return (
    <View style={styles.card}>
      <Image style={styles.image} source={localImages[product.image]} resizeMode="contain" />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.rating}>
        ⭐ {product.rating} ({product.reviews} đánh giá)
      </Text>
      <Text style={styles.price}>{product.price.toLocaleString()} đ</Text>
      <Text style={styles.oldPrice}>{product.oldPrice.toLocaleString()} đ</Text>
      <Text style={styles.guarantee}>Ở đâu rẻ hơn hoàn tiền</Text>

      <Pressable
        style={styles.buyBtn}
        onPress={() => navigation.navigate("Screen2", { product })}
      >
        <Text style={styles.buyText}>CHỌN MUA</Text>
      </Pressable>
    </View>
  );
}

function Screen2({ route, navigation }) {
  const { product } = route.params;
  const [selected, setSelected] = useState(product.image);

  const colorOptions = [
    { id: "1", code: "#add8e6" },
    { id: "2", code: "red" },
    { id: "3", code: "black" },
    { id: "4", code: "blue" },
  ];

  return (
    <View style={styles.center}>
      <Image source={localImages[selected]} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>Chọn một màu bên dưới:</Text>

      <View style={{ flexDirection: "row", marginTop: 10 }}>
        {colorOptions.map((c) => (
          <Pressable
            key={c.id}
            style={[styles.colorBox, { backgroundColor: c.code }]}
            onPress={() => setSelected(c.id)}
          />
        ))}
      </View>

      <Pressable
        style={styles.nextBtn}
        onPress={() => navigation.navigate("Screen3", { product, selected })}
      >
        <Text style={styles.buyText}>XONG</Text>
      </Pressable>
    </View>
  );
}

function Screen3({ route }) {
  const { product, selected } = route.params;

  return (
    <View style={styles.card}>
      <Image style={styles.image} source={localImages[selected]} resizeMode="contain" />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.rating}>
        ⭐ {product.rating} ({product.reviews} đánh giá)
      </Text>
      <Text style={styles.price}>{product.price.toLocaleString()} đ</Text>
      <Text style={styles.oldPrice}>{product.oldPrice.toLocaleString()} đ</Text>
      <Text style={styles.guarantee}>Ở đâu rẻ hơn hoàn tiền</Text>

      <Pressable style={styles.buyBtn}>
        <Text style={styles.buyText}>MUA NGAY</Text>
      </Pressable>
    </View>
  );
}


function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Screen3" component={Screen3} />
    </Stack.Navigator>
  );
}


function SearchScreen() {
  const [keyword, setKeyword] = useState("");
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Nhập từ khóa tìm kiếm:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập tại đây..."
        value={keyword}
        onChangeText={setKeyword}
      />
      <Text style={styles.result}>🔎 Từ khóa: {keyword}</Text>
    </View>
  );
}


function ProfileScreen() {
  return (
    <View style={styles.center}>
      <Image
        source={{ uri: "https://i.pravatar.cc/150?img=3" }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Trần Đan Huy</Text>
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Home") iconName = "home-outline";
            else if (route.name === "Search") iconName = "search-outline";
            else if (route.name === "Profile") iconName = "person-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    margin: 16,
    alignItems: "center",
  },
  image: { width: 200, height: 200, borderRadius: 8, marginBottom: 10 },
  title: { fontSize: 14, fontWeight: "500", marginVertical: 6 },
  rating: { fontSize: 12, color: "#666" },
  price: { fontSize: 18, fontWeight: "bold", color: "red", marginTop: 6 },
  oldPrice: { fontSize: 14, textDecorationLine: "line-through", color: "#888" },
  guarantee: { fontSize: 12, color: "red", marginTop: 4 },
  buyBtn: {
    backgroundColor: "red",
    borderRadius: 6,
    padding: 12,
    marginTop: 12,
    alignItems: "center",
    width: "100%",
  },
  buyText: { color: "#fff", fontSize: 15, fontWeight: "bold", textAlign: "center" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  colorBox: { width: 60, height: 60, margin: 10, borderRadius: 8 },
  nextBtn: {
    backgroundColor: "blue",
    padding: 12,
    marginTop: 20,
    borderRadius: 6,
    width: 120,
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    width: "80%",
    borderRadius: 6,
    marginTop: 20,
  },
  result: { fontSize: 16, color: "blue", marginTop: 20 },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 10 },
  name: { fontSize: 18, fontWeight: "bold" },
});
