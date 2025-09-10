import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../components';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const [notifications, setNotifications] = React.useState(true);

  const settingsOptions = [
    { id: '1', title: 'Edit Profile', screen: 'CompleteProfile' },
    { id: '2', title: 'Notifications', toggle: true },
    { id: '3', title: 'Language', screen: 'LanguageSelection' },
    { id: '4', title: 'Privacy Policy', screen: 'PrivacyPolicy' },
    { id: '5', title: 'Terms & Conditions', screen: 'TermsAndConditions' },
    { id: '6', title: 'About Us', screen: 'About' },
  ];

  const renderOption = (option) => (
    <TouchableOpacity 
      key={option.id}
      style={styles.optionRow}
      onPress={() => option.screen && navigation.navigate(option.screen)}
      disabled={option.toggle}
    >
      <Text style={styles.optionText}>{option.title}</Text>
      {option.toggle ? (
        <Switch value={notifications} onValueChange={setNotifications} />
      ) : (
        <Text style={styles.arrow}>›</Text>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header 
        title="Settings" 
        onBackPress={() => navigation.goBack()} 
      />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {settingsOptions.map(renderOption)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F9F9' },
  contentContainer: { padding: 20 },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  optionText: { fontSize: 16, color: '#333' },
  arrow: { fontSize: 24, color: '#999' },
});

export default SettingsScreen;
