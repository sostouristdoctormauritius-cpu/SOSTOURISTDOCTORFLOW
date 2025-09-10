import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Header = ({ 
  title, 
  onBackPress, 
  style, 
  rightComponent,
  showBackButton = true,
  backButtonTitle = '',
  onRightPress,
  showLogo = false
}) => {
  return (
    <View style={[styles.header, style]}>
      {showBackButton && onBackPress && (
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
          {backButtonTitle ? <Text style={styles.backButtonTitle}>{backButtonTitle}</Text> : null}
        </TouchableOpacity>
      )}
      
      {showLogo ? (
        <Image 
          source={require('../assets/images/logo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
      
      {rightComponent ? (
        rightComponent
      ) : onRightPress ? (
        <TouchableOpacity onPress={onRightPress} style={styles.rightButton}>
          <Text style={styles.rightButtonText}>⋮</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.placeholder} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    height: 90, // Fixed height for consistency
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 50, // Ensure minimum width for touch target
  },
  backButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButtonTitle: {
    fontSize: 16,
    marginLeft: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 16,
  },
  logo: {
    flex: 1,
    height: 50,
    maxWidth: 200,
  },
  rightButton: {
    minWidth: 50, // Ensure minimum width for touch target
    alignItems: 'flex-end',
  },
  rightButtonText: {
    fontSize: 24,
  },
  placeholder: {
    minWidth: 50, // Match the width of buttons for proper centering
  },
});

export default Header;