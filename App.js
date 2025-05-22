import React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';

export default function App() {
  const handlePress = () => {
    Alert.alert("Button Pressed", "Hello from React Native Web!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to React Native Web!</Text>
      <Button title="Click Me" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 22,
    marginBottom: 20,
  },
});
