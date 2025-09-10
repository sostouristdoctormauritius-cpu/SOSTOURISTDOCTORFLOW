import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CloseButton = ({ onPress, style, size = 'medium' }) => {
  const getSizeStyle = () => {
    switch (size) {
      case 'small':
        return { fontSize: 18, padding: 8 };
      case 'large':
        return { fontSize: 32, padding: 16 };
      default:
        return { fontSize: 24, padding: 12 };
    }
  };

  return (
    <TouchableOpacity 
      style={[styles.closeButton, style]} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.closeButtonText, getSizeStyle()]}>✕</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    alignSelf: 'flex-end',
    zIndex: 1,
  },
  closeButtonText: {
    color: '#666',
    fontWeight: 'bold',
  },
});

export default CloseButton;