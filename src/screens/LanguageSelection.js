import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Button } from '../components';

const logo = require("../assets/images/smallLogo.png");

export default function LanguageSelection() {
  const navigation = useNavigation()
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  
  // Available languages
  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
    { code: 'es', name: 'Spanish', nativeName: 'Español' },
    { code: 'fr', name: 'French', nativeName: 'Français' },
    { code: 'de', name: 'German', nativeName: 'Deutsch' },
    { code: 'it', name: 'Italian', nativeName: 'Italiano' },
    { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
    { code: 'ru', name: 'Russian', nativeName: 'Русский' },
    { code: 'zh', name: 'Chinese', nativeName: '中文' },
    { code: 'ja', name: 'Japanese', nativeName: '日本語' },
  ];

  const handleContinue = () => {
    if (selectedLanguage) {
      navigation.navigate('Welcome');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={logo} />
      </View>
      
      <View style={styles.content}>
        <Text style={styles.title}>Language Selection</Text>
        <Text style={styles.subtitle}>Please select your preferred language to continue</Text>
        
        <ScrollView 
          style={styles.languageList}
          contentContainerStyle={styles.languageListContent}
          showsVerticalScrollIndicator={false}
        >
          {languages.map((language) => (
            <TouchableOpacity 
              key={language.code}
              style={[
                styles.languageItem, 
                selectedLanguage === language.code && styles.selectedLanguageItem
              ]}
              onPress={() => setSelectedLanguage(language.code)}
            >
              <View style={styles.languageInfo}>
                <Text style={[
                  styles.languageName, 
                  selectedLanguage === language.code && styles.selectedLanguageName
                ]}>
                  {language.name}
                </Text>
                <Text style={[
                  styles.languageNativeName, 
                  selectedLanguage === language.code && styles.selectedLanguageNativeName
                ]}>
                  {language.nativeName}
                </Text>
              </View>
              {selectedLanguage === language.code && (
                <View style={styles.checkIcon}>
                  <Text style={styles.checkIconText}>✓</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      
      <View style={styles.footer}>
        <Button
          title="Continue"
          onPress={handleContinue}
          disabled={!selectedLanguage}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    alignItems: "center",
    padding: 30,
    paddingTop: 50,
  },
  logo: {
    height: 50,
    width: 150,
    resizeMode: "contain",
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 22,
  },
  languageList: {
    flex: 1,
  },
  languageListContent: {
    paddingBottom: 30,
  },
  languageItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  selectedLanguageItem: {
    backgroundColor: "#FFF5F5",
    borderBottomColor: "#F71E27",
  },
  languageInfo: {
    flex: 1,
  },
  languageName: {
    fontSize: 18,
    color: "#333",
    marginBottom: 3,
  },
  selectedLanguageName: {
    color: "#F71E27",
    fontWeight: "600",
  },
  languageNativeName: {
    fontSize: 16,
    color: "#999",
  },
  selectedLanguageNativeName: {
    color: "#F71E27",
  },
  checkIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#F71E27",
    justifyContent: "center",
    alignItems: "center",
  },
  checkIconText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    padding: 30,
    backgroundColor: "#ffffff",
  },
})
