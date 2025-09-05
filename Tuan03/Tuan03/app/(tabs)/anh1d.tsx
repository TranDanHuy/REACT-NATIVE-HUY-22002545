import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from '@expo/vector-icons/Entypo';


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
    marginTop: 50,
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
    marginTop: 50,
    alignItems:"center",
    justifyContent: "center",
    
  },
  text1: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25
  },
  text2:{
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
  zalo:{
    fontSize: 50,
    fontWeight: "bold",
    backgroundColor: "white",
    height:70,
    width:70,
    textAlign: "center",
    color: "blue",
    borderRadius: 10

  },
  
});
const Layout1D = () => {
  return (
    <View style={styles.bg}>
      <Text style={styles.text}>LOGIN</Text>
      <View>
        <TextInput placeholder="Name" style={styles.textInput} />
      </View>
      <View style={styles.view}>
        <TextInput placeholder="Password" keyboardType="numeric" maxLength={8} style={styles.textInput1} />
        <AntDesign name="eye" size={35} color="black" />
      </View>

      <View>
        <Pressable style={({ pressed }) => [
          styles.loginBtn,
          { opacity: pressed ? 0.6 : 1 }, 
        ]}>
            <Text style={styles.text1}>LOGIN</Text>
        </Pressable>
      </View>
      
        <Text style={styles.text2}>When you agree to terms and conditions</Text>
      
      <Pressable>
        <Text style={styles.text3}>For got your password?</Text>
      </Pressable>
      <Text style={styles.text2}>Or login with</Text>
      <View style={styles.container}>
        <Pressable>
            <Entypo name="facebook" size={70} color="blue" />
        </Pressable>
        <Pressable>
            <Text style={styles.zalo}>Z</Text>
        </Pressable>
        <Pressable>
            <AntDesign name="google" size={70} color="red" />
        </Pressable>

      </View>
    </View>
  );
};
export default Layout1D;
