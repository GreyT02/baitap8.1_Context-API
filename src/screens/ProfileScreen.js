import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { AppContext } from '../context/AppContext';

export default function ProfileScreen() {
  const { setIsLoggedIn } = useContext(AppContext);

  const handleSignOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.banner} />

      <View style={styles.content}>
        <Image
          source={require('../../assets/images/avatar.jpg')}
          style={styles.avatar}
        />

        <Text style={styles.name}>Hung Nguyen</Text>
        <Text style={styles.role}>Mobile developer</Text>
        <Text style={styles.description}>
          I have above 5 years of experience in native mobile app development,
          now I am learning React Native
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  banner: {
    height: 170,
    backgroundColor: '#18b8eb',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingTop: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: -80,
    marginBottom: 16,
    borderWidth: 4,
    borderColor: '#fff',
  },
  name: {
    fontSize: 34,
    color: '#666',
    marginBottom: 8,
    fontWeight: '400',
  },
  role: {
    color: '#19a9e4',
    fontSize: 18,
    marginBottom: 18,
  },
  description: {
    textAlign: 'center',
    lineHeight: 22,
    color: '#555',
    marginBottom: 28,
  },
  button: {
    backgroundColor: '#f0a000',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
  },
});