import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import InputField from "../components/inputField";

export default function ProfileScreen({ navigation, route }) {
  const { UserName } = route.params;

  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags"
    );
    const data = await response.json();
    setCountries(data);
    setFilteredCountries(data);
    setLoading(false);
  };

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = countries.filter((c) =>
      c.name.common.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.card,
        selectedCountry?.name.common === item.name.common && styles.selected,
      ]}
      onPress={() => setSelectedCountry(item)}
    >
      <Image source={{ uri: item.flags.png }} style={styles.flag} />
      <Text style={styles.country}>{item.name.common}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome, {UserName}</Text>
      
    {selectedCountry && (
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
        <Image
          source={{ uri: selectedCountry.flags.png }}
          style={{ width: 40, height: 25, marginRight: 10 }}
        />
        <Text style={styles.header}>
          {selectedCountry.name.common}
        </Text>
      </View>
     )}


      <InputField
        placeholder="Search country..."
        value={search}
        onChangeText={handleSearch}
      />

      <FlatList
        data={filteredCountries}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />

      <TouchableOpacity
        style={styles.logout}
        onPress={() => navigation.replace("Logout", { UserName })}
      >
        <Text style={{ color: "#fff" }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34495E",
    padding: 15,
  },
  header: {
    color: "#fff",
    fontSize: 22,
    marginBottom: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ECF0F1",
    padding: 10,
    borderRadius: 12,
    marginBottom: 8,
  },
  selected: {
    backgroundColor: "#AED6F1",
  },
  flag: {
    width: 50,
    height: 30,
    marginRight: 10,
  },
  country: {
    fontSize: 16,
  },
  logout: {
    backgroundColor: "#E74C3C",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  loader: {
    flex: 1,
    backgroundColor: "#2C3E50",
    justifyContent: "center",
    alignItems: "center",
  },
});
