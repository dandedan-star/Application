import { View, Text, StyleSheet } from "react-native";
import MyButton from "../components/button";

export default function Logoutscreen({ navigation, route }) {
  const { UserName } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Goodbye 👋</Text>
        <Text style={styles.name}>{UserName}</Text>

        <MyButton
          title="Back to Login"
          onPress={() => navigation.replace("Logscreen")}
        />
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
  card: {
    backgroundColor: "#ECF0F1",
    borderRadius: 20,
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    marginBottom: 20,
  },
});
