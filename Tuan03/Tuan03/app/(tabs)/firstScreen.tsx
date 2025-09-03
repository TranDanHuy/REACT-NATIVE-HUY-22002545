import "react-native-reanimated";

import Feather from "@expo/vector-icons/Feather";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function RootLayout() {
  const styles = StyleSheet.create({
    index: {
      flex: 1,
      backgroundColor: "#00CFFF",
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: 50,
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: -190,
    },
    title1: {
      fontSize: 28,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: -160,
    },
    circle: {
      marginBottom: 280,
    },
    text: {
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: -60,
    },
    button: {
      flexDirection: "row",
      gap: 100,
      marginTop: 80,
    },
    button1: {
      backgroundColor: "#e6ac00",
      padding: 12,
      borderRadius: 10,
    },
    text2: {
      fontWeight: "bold",
      fontSize: 25,
    },
  });
  return (
    <View style={styles.index}>
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

      <View style={styles.button}>
        <Pressable style={styles.button1}>
          <Text style={styles.text2}>LOGIN</Text>
        </Pressable>

        <Pressable style={styles.button1}>
          <Text style={styles.text2}>SIGN UP</Text>
        </Pressable>
      </View>
    </View>
  );
}
