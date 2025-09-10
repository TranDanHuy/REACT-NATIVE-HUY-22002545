import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Pressable,
} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const HandleSubmit = () => {
    alert('xin chào các bạn đến với máy tính của mình');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.casio}>Máy tính casio</Text>
      <View>
        {' '}
        <TextInput
          placeholder="mời nhập số"
          style={styles.textinput}
          maxLength={100}
          keyboardType={'numeric'}
        />{' '}
      </View>
      <Pressable style={styles.text} >
        <Text style={styles.text1} onPress={HandleSubmit}>
          1
        </Text>
        <Text style={styles.text1} onPress={HandleSubmit}>
          2
        </Text>
        <Text style={styles.text1} onPress={HandleSubmit}>
          3
        </Text>
      </Pressable>
      <Pressable style={styles.text}>
        <Text style={styles.text1} onPress={HandleSubmit}>
          4
        </Text>
        <Text style={styles.text1} onPress={HandleSubmit}>
          5
        </Text>
        <Text style={styles.text1} onPress={HandleSubmit}>
          6
        </Text>
      </Pressable>
      <Pressable style={styles.text}>
        <Text style={styles.text1} onPress={HandleSubmit}>
          7
        </Text>
        <Text style={styles.text1} onPress={HandleSubmit}>
          8
        </Text>
        <Text style={styles.text1} onPress={HandleSubmit}>
          9
        </Text>
      </Pressable>
      <Pressable style={styles.text}>
        <Text style={styles.text1} onPress={HandleSubmit}>
          0
        </Text>
        <Text style={styles.text1} onPress={HandleSubmit}>
          +
        </Text>
        <Text style={styles.text1} onPress={HandleSubmit}>
          -
        </Text>
      </Pressable>
      <Pressable style={styles.text}>
        <Text style={styles.text1} onPress={HandleSubmit}>
          *
        </Text>
        <Text style={styles.text1} onPress={HandleSubmit}>
          /
        </Text>
        <Text style={styles.text1} onPress={HandleSubmit}>
          =
        </Text>
      </Pressable>
      <Pressable style={styles.text}>
        <Text style={styles.text1} onPress={HandleSubmit}>
          AC
        </Text>
        <Text style={styles.text1} onPress={HandleSubmit}>
          DEL
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'gray',
    padding: 8,
  },
  textinput: {
    fontSize: 30,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 50,
    color: 'silver',
  },
  text: {
    flexDirection: 'row',
    gap: 100,
    marginLeft: 20,
    marginBottom: 30,
    justifyContent: 'center',
  },
  text1: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'white',
    padding: 2,
    fontWeight: 'bold',
  },
  casio: {
    marginTop: 60,
    fontSize: 50,
    fontWeight: 'bold',
  },
});
