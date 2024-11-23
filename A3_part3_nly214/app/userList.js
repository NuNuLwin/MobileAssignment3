import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import fetchUserData from "./fetchUserApi";

export default function UserList() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const respnse = await fetch(
        "https://jsonplaceholder.typicode.com/users/"
      );
      const jsonData = await respnse.json();
      console.log("Fetched data:", jsonData);
      setUserData(jsonData);
    };

    fetchData(); // Call the function
  }, []);

  const handlePressUser = (item) => {
    Alert.alert("Pressed on:" + ` ${item.name},\n ID: ${item.id}`);
  };

  const userItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => handlePressUser(item)}
      onLongPress={() => handlePressUser(item)}
    >
      <Text style={styles.name}>{item.id}.</Text>
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={userData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={userItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
  },
  item: {
    padding: 15,
    backgroundColor: "#87CEEB",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    flexDirection: "row",
    gap: 5,
    paddingHorizontal: 30,
  },
  name: {
    fontSize: 16,
  },
});
