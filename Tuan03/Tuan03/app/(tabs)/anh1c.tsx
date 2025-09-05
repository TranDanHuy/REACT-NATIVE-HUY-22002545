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
      fontSize: 60,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: 90,
    },
    title1: {
      fontSize: 25,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: 90,
    },
    circle: {
      top: 40,
      alignSelf: "center",
    },
    text: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: 50,
    },
    button1: {
      backgroundColor: "#ffbf00",
      padding: 20,
      height: "80%",
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
      flex: 1, // input chiếm hết chỗ còn lại
      marginLeft: 10, // cách icon 1 khoảng
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
    container1: {
      flexDirection: "row", // sắp xếp ngang
      justifyContent: "space-between", // cách đều nhau
      alignItems: "center",
      backgroundColor: "#ccffff", // màu nền giống hình bạn gửi
      padding: 10,
    },
    box: {
      width: 45,
      height: 45,
      borderWidth: 1,
      borderColor: "black",
      textAlign: "center", // số nằm giữa ô
      fontSize: 20,
      marginHorizontal: 5,
      backgroundColor: "#fff",
    },
  });
  return (
    <View style={styles.color}>
      <View style={styles.color1}>
        <View>
          <Text style={styles.title}>CODE </Text>
        </View>
        <View>
          <Text style={styles.title1}>VERIFICATION</Text>
        </View>
        <View>
          <Text style={styles.text}>
            Enter ontime password sent on ++849092605798
          </Text>
        </View>
      </View>

      <View style={styles.container1}>
        <TextInput style={styles.box} maxLength={1} keyboardType="numeric" />
        <TextInput style={styles.box} maxLength={1} keyboardType="numeric" />
        <TextInput style={styles.box} maxLength={1} keyboardType="numeric" />
        <TextInput style={styles.box} maxLength={1} keyboardType="numeric" />
        <TextInput style={styles.box} maxLength={1} keyboardType="numeric" />
        <TextInput style={styles.box} maxLength={1} keyboardType="numeric" />
      </View>

      <View style={styles.color2}>
        <Pressable style={styles.button1}>
          <Text style={styles.text2}>VERIFY CODE</Text>
        </Pressable>
      </View>

      <View style={styles.color3}></View>
    </View>
  );
}
