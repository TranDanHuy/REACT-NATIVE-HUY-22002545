import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, Switch } from "react-native";

const PasswordGenerator = () => {
  const [length, setLength] = useState("8");
  const [includeLower, setIncludeLower] = useState(true);
  const [includeUpper, setIncludeUpper] = useState(false);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSymbol, setIncludeSymbol] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let chars = "";
    if (includeLower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (includeUpper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumber) chars += "0123456789";
    if (includeSymbol) chars += "!@#$%^&*()_+[]{}<>?,.";

    if (chars === "") {
      setPassword("⚠ Chọn ít nhất 1 loại ký tự!");
      return;
    }

    let pass = "";
    for (let i = 0; i < parseInt(length || "8"); i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pass);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PASSWORD GENERATOR</Text>

   
      <View style={styles.passwordBox}>
        <Text style={styles.passwordText}>{password}</Text>
      </View>


      <View style={styles.row}>
        <Text style={styles.label}>Password length</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={length}
          onChangeText={setLength}
        />
      </View>

    
      <View style={styles.row}>
        <Text style={styles.label}>Include lower case letters</Text>
        <Switch value={includeLower} onValueChange={setIncludeLower} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Include upper case letters</Text>
        <Switch value={includeUpper} onValueChange={setIncludeUpper} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Include number</Text>
        <Switch value={includeNumber} onValueChange={setIncludeNumber} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Include special symbol</Text>
        <Switch value={includeSymbol} onValueChange={setIncludeSymbol} />
      </View>

      <Pressable style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>GENERATE PASSWORD</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1b4b",
    padding: 20,
    borderRadius: 10,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  passwordBox: {
    backgroundColor: "#0f0f29",
    padding: 15,
    marginBottom: 20,
  },
  passwordText: {
    color: "white",
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
  },
  label: {
    color: "white",
    fontSize: 14,
    flex: 1,
  },
  input: {
    backgroundColor: "white",
    width: 60,
    height: 35,
    paddingHorizontal: 5,
  },
  button: {
    backgroundColor: "#4338ca",
    padding: 15,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default PasswordGenerator;
