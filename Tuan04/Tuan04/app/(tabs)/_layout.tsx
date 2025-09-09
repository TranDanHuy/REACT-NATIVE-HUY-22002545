import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    flexShrink: 1,
    padding: 15,
  },
  text1: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  start: {
    height: 70,
    width: 70,
    marginTop: 20,
  },
  view1: {
    justifyContent: "center",
    marginTop: 70,
  },
  view3: {
    flexDirection: "row",
    paddingLeft: 35,
  },
  text3: {
    fontWeight: "bold",
    fontSize: 25,
  },
  pre: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    borderWidth: 1,
    borderColor: "blue",
    padding: 15,
    borderRadius: 10,
    alignSelf: "center",
    paddingHorizontal: 50,
  },
  textInput: {
    marginTop: 16,
    width: "85%",
    minHeight: 180,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    textAlignVertical: "top",
    fontSize: 20,
    alignSelf: "center",
    paddingHorizontal: 30,
  },
  watermark: {
    bottom: 22,
    right: 45,
    textAlign: "right",
    fontWeight: "bold",
    fontSize: 14,
  },
  press: {
    marginTop: 20,
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
    paddingHorizontal: 155
  },
  text4: {
    fontWeight: "bold",
    fontSize: 23,
    color: "white",
    textAlign: "center"
  }
});

const Layout2B = () => {
  return (
    <View>
      <View style={styles.view}>
        <Image source={require("../../assets/images/usb.png")} />
        <Text style={styles.text}>
          USB Bluetooth Music Receiver Hjx-001 - Biến loa thường thành loa
          bluetooth
        </Text>
      </View>
      <View style={styles.view1}>
        <Text style={styles.text1}>Cực kỳ hài lòng</Text>
        <View style={styles.view3}>
          <Image
            source={require("../../assets/images/OneStart.png")}
            style={styles.start}
          />
          <Image
            source={require("../../assets/images/OneStart.png")}
            style={styles.start}
          />
          <Image
            source={require("../../assets/images/OneStart.png")}
            style={styles.start}
          />
          <Image
            source={require("../../assets/images/OneStart.png")}
            style={styles.start}
          />
          <Image
            source={require("../../assets/images/OneStart.png")}
            style={styles.start}
          />
        </View>
      </View>
      <View>
        <Pressable style={styles.pre}>
          <FontAwesome name="camera" size={50} color="black" />
          <Text style={styles.text3}>Thêm hình ảnh</Text>
        </Pressable>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Hãy chia sẻ những điều mà bạn thích về sản phẩm"
            multiline
            placeholderTextColor="#9AA0A6"
            numberOfLines={6}
          />
          <Text pointerEvents="none" style={styles.watermark}>
            https://meet.google.com/nsj-ojwi-xpp
          </Text>
        </View>
      </View>
      <View>
        <Pressable style={({ pressed }) => [
          styles.press,
          { opacity: pressed ? 0.6 : 1 },
        ]} >
            <Text style={styles.text4}>Gửi</Text>

        </Pressable>
      </View>


    </View>
  );
};
export default Layout2B;
