import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MyButton from "../components/button";
import InputField from "../components/inputField";

export default function LogScreen({ navigation }) {
  const [UserName, setusername] = useState("");
  const [Password, setpassword] = useState("");
  const [error, seterror] = useState("");

  const handleLogin = () => {
    if (UserName === "Admin" && Password === "admin") {
      navigation.replace("Profile", { UserName });
    } else {
      seterror("Username atau Password salah");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>iWorld App</Text>

      <View style={styles.card}>
        <InputField
          placeholder="Username"
          value={UserName}
          onChangeText={setusername}
        />

        <InputField
          placeholder="Password"
          value={Password}
          onChangeText={setpassword}
          secureTextEntry
        />

        <MyButton title="Login" onPress={handleLogin} />

        {error !== "" && <Text style={styles.error}>{error}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C3E50",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: "#fff",
    textAlign: "center",
    marginBottom: 30,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#ECF0F1",
    borderRadius: 20,
    padding: 20,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
});
