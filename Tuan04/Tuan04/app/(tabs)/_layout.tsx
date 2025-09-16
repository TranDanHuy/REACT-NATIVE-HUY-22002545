import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  view1: {
    backgroundColor: "white",
    paddingBottom: 20,
    flexDirection: "row",
  },
  img: {
    height: 170,
    width: 130,
    top: 10,
    left: 10,
  },
  text: {
    padding: 20,
    fontSize: 15,
    fontWeight: "bold",
  },
  text1: {
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: -20,
  },
  text2: {
    padding: 10,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: -20,
    color: "red",
  },
  text3: {
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: -20,
    color: "gray",
    textDecorationLine: "line-through",
  },
  view2: {
    flexDirection: "row",
    marginLeft: 30,
    gap: 10,
    alignItems: "center",
  },
  press: {
    backgroundColor: "lightgray",
    height: 20,
    width: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text5: {
    color: "blue",
    fontWeight: "bold",
    marginLeft: 90,
  },

  // ====== PHẦN MỚI THÊM ======
  sep: {
    height: 10,
    backgroundColor: "#d9d9d9",
  },
  block: {
    backgroundColor: "white",
    padding: 12,
  },
  savedText: {
    fontSize: 13,
    marginBottom: 10,
  },
  link: {
    color: "#0B74E5",
    fontWeight: "600",
  },
  voucherRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  voucherBox: {
    flex: 1,
    height: 42,
    backgroundColor: "#FFEF77",
    borderWidth: 1,
    borderColor: "#cfcfcf",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    marginRight: 12,
  },
  voucherSquare: {
    width: 16,
    height: 16,
    backgroundColor: "#FFF28A",
    borderWidth: 1,
    borderColor: "#e0c300",
    marginRight: 8,
  },
  voucherLabel: {
    fontWeight: "700",
  },
  applyBtn: {
    backgroundColor: "#0B74E5",
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  applyTxt: {
    color: "white",
    fontWeight: "700",
  },
  giftText: {
    fontSize: 13,
  },
  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  priceRed: {
    color: "red",
    fontWeight: "700",
  },
  hugeGray: {
    height: 120,
    backgroundColor: "#bfbfbf",
  },
  orderBtn: {
    backgroundColor: "red",
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 10,
  },
  orderTxt: {
    color: "white",
    fontWeight: "800",
    fontSize: 16,
  },
});

const LayoutTiki = () => {
  return (
    <View style={styles.view}>
     
      <View style={styles.view1}>
        <Image
          source={require("../../assets/images/book.png")}
          style={styles.img}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.text}>Nguyên hàm tích phân và ứng dụng</Text>
          <Text style={styles.text1}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.text2}>141.800 đ</Text>
          <Text style={styles.text3}>141.000 đ</Text>

          <View style={styles.view2}>
            <Pressable style={styles.press}>
              <FontAwesome name="minus" size={18} color="black" />
            </Pressable>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>1</Text>
            <Pressable style={styles.press}>
              <FontAwesome name="plus" size={18} color="black" />
            </Pressable>
            <Text style={styles.text5}>Mua sau</Text>
          </View>
        </View>
      </View>

      
      <View style={styles.sep} />

     
      <View style={styles.block}>
        <Text style={styles.savedText}>
          Mã giảm giá đã lưu <Text style={styles.link}>Xem tại đây</Text>
        </Text>

        <View style={styles.voucherRow}>
          
          <View style={styles.voucherBox}>
            <View style={styles.voucherSquare} />
            <Text style={styles.voucherLabel}>Mã giảm giá</Text>
          </View>

      
          <Pressable style={styles.applyBtn}>
            <Text style={styles.applyTxt}>Áp dụng</Text>
          </Pressable>
        </View>
      </View>

   
      <View style={styles.sep} />

     
      <View style={styles.block}>
        <Text style={styles.giftText}>
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?{" "}
          <Text style={styles.link}>Nhập tại đây?</Text>
        </Text>
      </View>

      
      <View style={styles.sep} />

    
      <View style={styles.block}>
        <View style={styles.rowBetween}>
          <Text style={{ fontWeight: "600" }}>Tạm tính</Text>
          <Text style={styles.priceRed}>141.800 đ</Text>
        </View>
      </View>

      
      <View style={styles.hugeGray} />

      <View style={styles.block}>
        <View style={styles.rowBetween}>
          <Text style={{ fontWeight: "700" }}>Thành tiền</Text>
          <Text style={styles.priceRed}>141.800 đ</Text>
        </View>

        <Pressable style={styles.orderBtn}>
          <Text style={styles.orderTxt}>TIẾN HÀNH ĐẶT HÀNG</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LayoutTiki;
