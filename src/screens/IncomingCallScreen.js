import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

const IncomingCallScreen = () => {
  const callerName = "Dr. Alice Smith";
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.callerInfoContainer}>
          <View style={styles.avatarContainer}>
            <Image 
              source={require('../assets/images/profile.png')} 
              style={styles.avatar} 
            />
          </View>
          <Text style={styles.callerName}>{callerName}</Text>
          <Text style={styles.callStatus}>Incoming Video Call...</Text>
        </View>

        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={[styles.actionButton, styles.declineButton]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.actionButtonText}>Decline</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, styles.acceptButton]}
            onPress={() => navigation.navigate('StreamVideoCallScreen')}
          >
            <Text style={styles.actionButtonText}>Accept</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default IncomingCallScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-around",
    padding: 20,
    alignItems: 'center',
  },
  callerInfoContainer: {
    alignItems: "center",
  },
  avatarContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  callerName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  callStatus: {
    fontSize: 18,
    color: "#666",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: '100%',
  },
  actionButton: {
    width: '45%',
    paddingVertical: 18,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  declineButton: {
    backgroundColor: "#FF3B30",
  },
  acceptButton: {
    backgroundColor: "#34C759",
  },
  actionButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: 'bold',
  },
});
