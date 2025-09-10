import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from './Button';

const ConfirmationModal = ({ visible, onClose, onConfirm, title, message, confirmText, cancelText }) => {
  if (!visible) return null;

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalTitle}>{title || 'Confirm'}</Text>
        <Text style={styles.modalText}>{message || 'Are you sure?'}</Text>
        
        <View style={styles.buttonContainer}>
          <Button
            title={cancelText || 'Cancel'}
            onPress={onClose}
            variant="outline"
            style={styles.button}
          />
          
          <Button
            title={confirmText || 'Confirm'}
            onPress={onConfirm}
            style={styles.button}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default ConfirmationModal;