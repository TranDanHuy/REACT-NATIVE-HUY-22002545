import React, { useEffect, useState, useContext, createContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";

const API_URL = "https://68d33d65cc7017eec5465173.mockapi.io/phoneApp";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const localImages = {
  "1": require("./assets/anhdautien.PNG"),
  "2": require("./assets/anhthu2.PNG"),
  "3": require("./assets/anhthu3.PNG"),
  "4": require("./assets/anhthu4.PNG"),
};


const FavCtx = createContext();
function FavProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const addFavorite = (p) =>
    setFavorites((prev) => (prev.find((x) => x.id === p.id) ? prev : [...prev, p]));
  const removeFavorite = (id) =>
    setFavorites((prev) => prev.filter((x) => x.id !== id));
  return (
    <FavCtx.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavCtx.Provider>
  );
}
const useFav = () => useContext(FavCtx);


function ProductsScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((r) => r.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((e) => console.error(e));
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="blue" style={{ marginTop: 50 }} />;
  }

  const renderItem = ({ item }) => (
    <Pressable
      style={styles.card}
      onPress={() => navigation.navigate("ProductDetails", { id: item.id })}
    >
      <Image source={localImages[item.image]} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.price}>{Number(item.price).toLocaleString()} đ</Text>
    </Pressable>
  );

  return (
    <FlatList
      data={products}
      keyExtractor={(it) => it.id}
      renderItem={renderItem}
      contentContainerStyle={{ paddingVertical: 8 }}
    />
  );
}


function FavoritesScreen() {
  const { favorites, removeFavorite } = useFav();

  if (favorites.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Chưa có sản phẩm nào trong Favorites</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favorites}
      keyExtractor={(it) => it.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={localImages[item.image]} style={styles.image} resizeMode="contain" />
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.price}>{Number(item.price).toLocaleString()} đ</Text>
          <Pressable
            style={[styles.btn, { backgroundColor: "#555" }]}
            onPress={() => removeFavorite(item.id)}
          >
            <Text style={styles.btnText}>XÓA KHỎI FAVORITES</Text>
          </Pressable>
        </View>
      )}
    />
  );
}


function ProductDetails({ route }) {
  const { id } = route.params;
  const { addFavorite } = useFav();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((e) => console.error(e));
  }, [id]);

  if (loading || !product) {
    return <ActivityIndicator size="large" color="blue" style={{ marginTop: 50 }} />;
  }

  return (
    <View style={styles.card}>
      <Image source={localImages[product.image]} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.rating}>⭐ {product.rating} ({product.reviews} đánh giá)</Text>
      <Text style={styles.price}>{Number(product.price).toLocaleString()} đ</Text>
      <Text style={styles.oldPrice}>{Number(product.oldPrice).toLocaleString()} đ</Text>
      <Text style={styles.guarantee}>Ở đâu rẻ hơn hoàn tiền</Text>

      <Pressable style={styles.btn} onPress={() => addFavorite(product)}>
        <Text style={styles.btnText}>THÊM VÀO FAVORITES</Text>
      </Pressable>
    </View>
  );
}


function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          const icon = route.name === "Products" ? "pricetags-outline" : "heart-outline";
          return <Ionicons name={icon} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Products" component={ProductsScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <FavProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeTabs"
            component={HomeTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavProvider>
  );
}


const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    margin: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  image: { width: 150, height: 150, borderRadius: 8, marginBottom: 10 },
  title: { fontSize: 16, fontWeight: "600", marginVertical: 6, textAlign: "center" },
  rating: { fontSize: 12, color: "#666" },
  price: { fontSize: 18, fontWeight: "bold", color: "red", marginTop: 6 },
  oldPrice: { fontSize: 14, textDecorationLine: "line-through", color: "#888" },
  guarantee: { fontSize: 12, color: "red", marginTop: 4 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  btn: {
    backgroundColor: "tomato",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 12,
  },
  btnText: { color: "#fff", fontWeight: "700" },
});
