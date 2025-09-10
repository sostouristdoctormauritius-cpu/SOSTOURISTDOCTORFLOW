import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Button } from '../components';

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageFull}
        source={require("../../assets/images/welcome/welcome-doc.png")}
        resizeMode="cover"
      />
      <View style={styles.buttonContainer}>
        <Button 
          title="Continue" 
          onPress={() => navigation.navigate('SignInWithEmail')} 
        />
        <TouchableOpacity onPress={() => navigation.navigate('RegisterWithEmail')}>
          <Text style={styles.registerText}>Don't have an account? Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 25,
    width: "90%",
    bottom: 40,
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  imageFull: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  registerText: {
    color: '#1E90FF',
    marginTop: 15,
    textDecorationLine: 'underline',
  }
});
