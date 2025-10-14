import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
    <Text style={styles.subtitle}>
        A premium online store for sporter and their stylish choice
      </Text>
      
      <Image source={require("../assets/bike1.PNG")} style={styles.bikeImage} />

      
      <Text style={styles.title}>POWER BIKE SHOP</Text>


     
      <View style={styles.buttonWrapper}>
        <CustomButton
          title="Get Started"
          onPress={() => navigation.navigate("BikeList")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  bikeImage: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "600", 
    color: "#444",
    textAlign: "center",
    marginBottom: 50,
    lineHeight: 22,
  },
  buttonWrapper: {
    width: "100%",
    paddingHorizontal: 30,
  },
});
