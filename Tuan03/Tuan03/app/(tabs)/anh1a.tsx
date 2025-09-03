import "react-native-reanimated";

import Feather from "@expo/vector-icons/Feather";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function RootLayout() {
  const styles = StyleSheet.create({
    color1: {
      backgroundColor: "#ccffff",
      flex: 7,
    },
    color2: {
      backgroundColor: "#ffffff",
      flex: 1.5,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      marginTop: 50,
    },
    color3: {
      backgroundColor: "#80d4ff",
      flex: 2,
    },
    color: {
      flex: 1,
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: 90,
    },
    title1: {
      fontSize: 28,
      fontWeight: "bold",
      textAlign: "center",
    },
    circle: {
      top: 40,
      alignSelf: "center",
    },
    text: {
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: 50,
    },
    button1: {
      backgroundColor: "#e6ac00",
      padding: 12,
    },
    text2: {
      fontWeight: "bold",
      fontSize: 25,
    },
    text3: {
      fontSize: 22,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: -20,
    },
  });
  return (
    <View style={styles.color}>
      <View style={styles.color1}>
        <Feather name="circle" size={180} color="black" style={styles.circle} />
        <View>
          <Text style={styles.title}>GROW</Text>
        </View>
        <View>
          <Text style={styles.title1}>YOUR BUSINESS</Text>
        </View>
        <View>
          <Text style={styles.text}>
            We will help you to grow your business using online server
          </Text>
        </View>
      </View>

      <View style={styles.color2}>
        <Pressable style={styles.button1}>
          <Text style={styles.text2}>LOGIN</Text>
        </Pressable>

        <Pressable style={styles.button1}>
          <Text style={styles.text2}>SIGN UP</Text>
        </Pressable>
      </View>

      <View style={styles.color3}>
        <Text style={styles.text3}>HOW WE WORK?</Text>
      </View>
    </View>
  );
}
