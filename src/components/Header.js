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
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
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
    height: 40,
  },
  rightButton: {
    width: 24,
    alignItems: 'flex-end',
  },
  rightButtonText: {
    fontSize: 24,
  },
  placeholder: {
    width: 24,
  },
});

export default Header;