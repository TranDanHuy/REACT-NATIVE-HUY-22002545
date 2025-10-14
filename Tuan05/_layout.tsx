import { StyleSheet, Text, View,ScrollView,Image, TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import noi from './assets/noiChao.PNG';
import khoga from './assets/khoBo.PNG';
import dochoi from './assets/xeCau.PNG';
import xetai from './assets/xeCuuHoa.PNG';
import lanhdao from './assets/sachVang.PNG';
import sach from './assets/sachHong.PNG';



// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const products = [
  { name: 'Ca nấu lẩu, nấu mì mini', shop: 'Devant', image: noi },
  { name: '1KG Khô gà bơ tỏi', shop: 'LTD Food', image: khoga },
  { name: 'Xe cần cẩu đa năng', shop: 'Thế giới đồ chơi', image: dochoi },
  { name: 'Đồ chơi dạng mô hình', shop: 'Thế giới đồ chơi', image: xetai },
  { name: 'Lãnh đạo giản đơn', shop: 'Minh Long Book', image: lanhdao },
  { name: 'Hiểu lòng con trẻ', shop: 'Minh Long Book', image: sach },
];
  return (
    <View style={styles.view}>
      <View style={styles.view1}>
        <Ionicons
          name="arrow-back"
          size={30}
          color="black"
          style={styles.back}
        />
        <Text style={styles.chat}>Chat</Text>
        <MaterialCommunityIcons
          name="cart-plus"
          size={30}
          color="black"
          style={styles.back1}
        />
      </View>
      <View style={styles.view2}>
      <View style={styles.view4}> 
      <Text> Bạn có thắc mắc với sản phảm vừa xem. Đừng ngại chat với Shop ! </Text>
      <View style={{marginTop: 20}}>
      <ScrollView style={styles.list}>
        {products.map((item, index) => (
          <View key={index} style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.shop}>Shop {item.shop}</Text>
            </View>
            <TouchableOpacity style={styles.chatBtn}>
              <Text style={styles.chatText}>Chat</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      
      </View>
      
       </View>
      <View style={styles.view5}> </View>
      </View>
      <View style={styles.view3}>
        <FontAwesome5
          name="align-justify"
          size={30}
          color="black"
          style={styles.align}
        />
        <AntDesign name="home" size={30} color="black" style={styles.align2} />
        <Ionicons name="return-up-back-outline" size={30} color="black" style={styles.align3} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
flex: 1,
  },
  view1: {
    flex: 1,
    backgroundColor: 'cyan',
    flexDirection: 'row',
  },
  view2: {
    flex: 12,
  },
  view3: {
    flex: 1,
    backgroundColor: 'cyan',
    flexDirection: 'row',
  },
  view4: {
    flex: 1,
    backgroundColor: "LightGray",
    borderBottomWidth: 1,
  },
   view5: {
    flex: 10 ,
    
  },
  back: {
    color: 'white',
    alignItems: 'center',
  },
  back1: {
    color: 'white',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  chat: {
    color: 'white',
    fontSize: 20,
    marginLeft: 120,
  },
  align: {
    color: 'white',
    alignItems: 'center',
  },
  align2: {
    color: 'white',
    alignItems: 'center',
    marginLeft: 120,
  },
  align3: {
    color: 'white',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  list: { flex: 1 },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
    image: { width: 60, height: 60, borderRadius: 5 },
  info: { flex: 1, marginLeft: 10 },
  name: { fontSize: 14, fontWeight: 'bold' },
  shop: { fontSize: 12, color: 'gray' },
  chatBtn: { backgroundColor: 'red', padding: 8, borderRadius: 4 },
  chatText: { color: '#fff', fontWeight: 'bold' },

  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#00aaff',
  },
  navBtn: { fontSize: 20, color: '#fff' },
   nav : {
    padding: 20
  },
  back: { fontSize: 20, color: '#fff' },
  title: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  cart: { fontSize: 20, color: '#fff' },
  

});
