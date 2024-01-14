import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState("Jake");

  const clickHandler = () => {
    setName(name === "Jake" ? "Yusuf" : "Jake")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>My name is {name}!</Text>
      <View style={styles.buttonContainer}>
        <Button title="update state" onPress={() => clickHandler()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: "black",
    padding: 18,
    color: "white",
  }

});
