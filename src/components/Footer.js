import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Footer = ({ 
  style, 
  onHomePress, 
  onProfilePress, 
  onSettingsPress,
  activeScreen = 'home'
}) => {
  return (
    <View style={[styles.footer, style]}>
      <TouchableOpacity 
        style={[styles.footerButton, activeScreen === 'home' && styles.activeFooterButton]} 
        onPress={onHomePress}
      >
        <Text style={[styles.footerButtonText, activeScreen === 'home' && styles.activeFooterButtonText]}>
          Home
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.footerButton, activeScreen === 'profile' && styles.activeFooterButton]} 
        onPress={onProfilePress}
      >
        <Text style={[styles.footerButtonText, activeScreen === 'profile' && styles.activeFooterButtonText]}>
          Profile
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.footerButton, activeScreen === 'settings' && styles.activeFooterButton]} 
        onPress={onSettingsPress}
      >
        <Text style={[styles.footerButtonText, activeScreen === 'settings' && styles.activeFooterButtonText]}>
          Settings
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  footerButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  activeFooterButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#007AFF',
  },
  footerButtonText: {
    fontSize: 14,
    color: '#888',
  },
  activeFooterButtonText: {
    color: '#007AFF',
    fontWeight: '600',
  },
});

export default Footer;