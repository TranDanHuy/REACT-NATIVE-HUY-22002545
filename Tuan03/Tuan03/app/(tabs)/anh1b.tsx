import "react-native-reanimated";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Fontisto from "@expo/vector-icons/Fontisto";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

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
      backgroundColor: "#ffbf00",
      padding: 20,
      height: "70%",
      width: "80%",
      alignItems: "center",
      alignSelf: "center",
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
    textinput: {
      flex: 1, 
      marginLeft: 10, 
      fontSize: 16,
      paddingVertical: 8,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 8,
      paddingHorizontal: 10,
      width: "80%",
      alignSelf: "center",
      marginTop: 20,
      backgroundColor: "#B0B0B0", 
    },
  });
  return (
    <View style={styles.color}>
      <View style={styles.color1}>
        <FontAwesome6
          name="unlock-keyhole"
          size={120}
          color="black"
          style={styles.circle}
        />
        <View>
          <Text style={styles.title}>FORGET </Text>
        </View>
        <View>
          <Text style={styles.title1}>PASSWORD</Text>
        </View>
        <View>
          <Text style={styles.text}>
            Provide your account’s email for which you want to reset your
            password
          </Text>
          <View style={styles.inputContainer}>
            <Fontisto name="email" size={24} color="black" />
            <TextInput style={styles.textinput} placeholder="Email" />
          </View>
        </View>
      </View>

      <View style={styles.color2}>
        <Pressable style={styles.button1}>
          <Text style={styles.text2}>NEXT</Text>
        </Pressable>
      </View>

      <View style={styles.color3}></View>
    </View>
  );
}
