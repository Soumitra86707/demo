import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Welcome to the Home Page</Text>
      <Link to="/aboutus" style={{ marginTop: 20, padding: 10, backgroundColor: '#2196F3', borderRadius: 5, color: 'white', textDecoration: 'none' }}>
        Go to About Us
      </Link>
    </View>
  );
}
