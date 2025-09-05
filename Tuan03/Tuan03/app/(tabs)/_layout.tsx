import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "#E6FFEF",
    flex: 1,
    padding: 25,
  },
  text: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 50,
  },
  textInput: {
    backgroundColor: "#D6EDE0",
    fontSize: 20,
    padding: 18,
    marginTop: 20,
    fontWeight: "bold",
  },
  textInput1: {
    backgroundColor: "#D6EDE0",
    fontSize: 20,
    padding: 18,
    fontWeight: "bold",
    flex: 1,
    paddingVertical: 15,
  },
  view: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D6EDE0",
    paddingRight: 20,
    marginTop: 20,
  },
  loginBtn: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    
  },
  text2: {
    textAlign: "center",
    padding: 15,
    fontWeight: "bold",
  },
  text3: {
    color: "blue",
    textAlign: "center",
  },
  container: {
    flexDirection: "row",
    gap: 70,
  },
  zalo: {
    fontSize: 50,
    fontWeight: "bold",
    backgroundColor: "white",
    height: 70,
    width: 70,
    textAlign: "center",
    color: "blue",
    borderRadius: 10,
  },
  radioGroup: {
    flexDirection: "row",
    marginTop: 20,
    gap: 40,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioOuter: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  radioInner: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "black",
  },
  label: {
    marginLeft: 8,
    fontSize: 18,
    fontWeight: "bold",
  },
});

const Layout1D = () => {
  
const [gender, setGender] = useState<"Male" | "Female" | null>(null);


  return (
    <View style={styles.bg}>
      <Text style={styles.text}>LOGIN</Text>

      <TextInput placeholder="Name" style={styles.textInput} />
      <TextInput placeholder="Phone" style={styles.textInput} />
      <TextInput placeholder="Email" style={styles.textInput} />

      <View style={styles.view}>
        <TextInput
          placeholder="Password"
          keyboardType="numeric"
          maxLength={8}
          style={styles.textInput1}
        />
        <AntDesign name="eye" size={35} color="black" />
      </View>

      <TextInput placeholder="Birthday" style={styles.textInput} />

      
      <View style={styles.radioGroup}>
        <Pressable style={styles.option} onPress={() => setGender("Male")}>
          <View style={styles.radioOuter}>
            {gender === "Male" && <View style={styles.radioInner} />}
          </View>
          <Text style={styles.label}>Male</Text>
        </Pressable>

        <Pressable style={styles.option} onPress={() => setGender("Female")}>
          <View style={styles.radioOuter}>
            {gender === "Female" && <View style={styles.radioInner} />}
          </View>
          <Text style={styles.label}>Female</Text>
        </Pressable>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.loginBtn,
          { opacity: pressed ? 0.6 : 1 },
        ]}
      >
        <Text style={styles.text1}>LOGIN</Text>
      </Pressable>

      <Text style={styles.text2}>
        When you agree to terms and conditions
      </Text>
    </View>
  );
};

export default Layout1D;
