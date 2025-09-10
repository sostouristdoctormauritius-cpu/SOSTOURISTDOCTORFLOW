import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const logo = require("../../assets/images/smallLogo.png");

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    height: 62,
    width: "90%",
    backgroundColor: "lightgreen", // Placeholder color
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  descStyle: {
    marginBottom: 41,
    paddingLeft: 61,
    paddingRight: 47,
    textAlign: "center",
  },
  image: {
    height: 40,
    marginBottom: 41.5,
    marginTop: 20,
    width: 230,
  },
  labelStyle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 10,
  },
  textStyle: {
    marginBottom: 9,
  },
  languageBox: {
    // Placeholder styles for LanguageBox
    width: "80%",
    height: 150,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
})
export default function LanguageSelection() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={logo} />
      <Text style={styles.title}>Language Selection</Text>
      <Text style={styles.subtitle}>Please select your preferred language to continue</Text>
      
      <View style={styles.languageOptions}>
        <TouchableOpacity 
          style={[styles.languageButton, selectedLanguage === 'en' && styles.selectedLanguageButton]}
          onPress={() => setSelectedLanguage('en')}
        >
          <Text style={[styles.languageText, selectedLanguage === 'en' && styles.selectedLanguageText]}>
            English
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.languageButton, selectedLanguage === 'hi' && styles.selectedLanguageButton]}
          onPress={() => setSelectedLanguage('hi')}
        >
          <Text style={[styles.languageText, selectedLanguage === 'hi' && styles.selectedLanguageText]}>
            हिंदी (Hindi)
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={[styles.continueButton, !selectedLanguage && styles.disabledContinueButton]}
        onPress={handleContinue}
        disabled={!selectedLanguage}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}
