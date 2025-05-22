import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>This is the About Us Page</Text>
      <Link to="/" style={{ marginTop: 20, padding: 10, backgroundColor: '#4CAF50', borderRadius: 5, color: 'white', textDecoration: 'none' }}>
        Go to Home
      </Link>
    </View>
  );
}
