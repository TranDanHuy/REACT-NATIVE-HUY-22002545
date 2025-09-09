import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#FBCB00",
    flex: 1,
    padding: 25,
  },
  text: {
    fontSize: 35,
    fontWeight: "bold",
    padding: 35,
    paddingTop: 70,
  },
  view1: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "white",
    paddingVertical: 10,
    padding: 18,
    backgroundColor: "#C4C4C44D",
    alignItems: "center",
    marginTop: 20,
    paddingRight: 20
  },
  textInput: {
    fontWeight: "bold",
    marginLeft: 10
  },
  press: {
    marginTop: 40,
    backgroundColor: "#060000",
    padding: 10
  },
  text2:{
    fontSize: 35,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",

  },
  text3: {
    marginTop: 40,
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center"

  }
  
});

const Layout2A = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>LOGIN</Text>
      <View style={styles.view1}>
        <FontAwesome name="user" size={24} color="black" />
        <TextInput placeholder="Name" style={styles.textInput} />
      </View>
      <View style={styles.view1}>
        <FontAwesome6 name="unlock-keyhole" size={24} color="black" />
        <TextInput placeholder="Password" style={styles.textInput} keyboardType="numeric" maxLength={8} />
        <AntDesign name="eye" size={24} color="black" />
      </View>
      <Pressable   style={({ pressed }) => [
          styles.press,
          { opacity: pressed ? 0.6 : 1 },
        ]} >
        <Text style={styles.text2}>LOGIN</Text>
      </Pressable>
      <Text style= {styles.text3}>Forgot your password?</Text>
    </View>
  );
};
export default Layout2A;
