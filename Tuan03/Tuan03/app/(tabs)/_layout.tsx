import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';


const styles = StyleSheet.create({
  view: {
    marginTop: 50,
    alignItems: "center",
  },
  img: {
    width: 200,
    height: 200,
  },
  textInput: {
    fontSize: 20,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 20,
    width: 250,
  },
  view1: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#999",
  },
  user: {
    marginTop: 15,
    color: "blue",
  },
  press: {
    marginTop: 40,
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 15
  },
  text2: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
    
    
  },
  container: {
    width: "80%",
    paddingVertical: 10,
    padding: 20,

  },
  view3:{
    flexDirection: "row",
    gap: 60,
    marginTop: 10,
    

  },
  text3:{
    fontSize: 20,
    fontWeight: "bold",

  },
   dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    width: "80%",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "blue",
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  container1: {
    flexDirection: "row",
    gap: 30
  },
  user1: {
    marginTop:4,
    backgroundColor: "#42A5F5",
    padding: 5,
    borderRadius: 10,
    color: "white",

  },
  wifi: {
    marginTop:4,
    backgroundColor: "#F4A432",
    padding: 7,
    borderRadius: 10,
    color: "white",

  }
});

const Layout2B = () => {
  return (
    <View style={styles.view}>
      <Image
        source={require("../../assets/images/camera.png")}
        style={styles.img}
      />
      <View style={styles.view1}>
        <FontAwesome5 name="user" size={24} color="black" style={styles.user} />
        <TextInput
          placeholder="Please input user name"
          placeholderTextColor="#999"
          style={styles.textInput}
        />
      </View>
      <View style={styles.view1}>
        <FontAwesome6
          name="unlock-keyhole"
          size={24}
          color="black"
          style={styles.user}
        />
        <TextInput
          placeholder="Please input password"
          placeholderTextColor="#999"
          style={styles.textInput}
        />
      </View>
     <View style={styles.container}>
         <Pressable
        style={({ pressed }) => [styles.press, { opacity: pressed ? 0.6 : 1 }]}
      >
        <Text style={styles.text2}>LOGIN</Text>
      </Pressable>
     </View>
     <View style={styles.view3}>
      <Text style={styles.text3}>Register</Text>
      <Text style={styles.text3}>Forgot Password</Text>
     </View>
     <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.dividerText}>Other Login Methods</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.container1}>
        <Pressable>
            <FontAwesome6 name="user-plus" size={50} color="black" style={styles.user1} />
        </Pressable>

        <Pressable>
            <AntDesign name="wifi" size={50} color="black" style={styles.wifi} />
        </Pressable>

        

         <Pressable>
            <Entypo name="facebook" size={70} color="blue" />
        </Pressable>

      </View>

    </View>
  );
};
export default Layout2B;
