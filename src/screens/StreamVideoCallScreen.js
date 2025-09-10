import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';

const StreamVideoCallScreen = () => {
  const doctorName = "Dr. Alice Smith";
  const navigation = useNavigation();
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isSpeakerOn, setIsSpeakerOn] = useState(true);
  const callDuration = "05:32"; // Mock call duration

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.videoContainer}>
        {/* This would be the remote video stream */}
        <View style={styles.remoteVideo}>
          <Image source={require('../assets/images/profile.png')} style={styles.remoteImage} />
        </View>
        
        {/* This would be the local video stream */}
        <View style={styles.localVideo}>
          {isVideoOff ? (
            <View style={styles.videoOffContainer}>
              <Text style={styles.videoOffText}>Video Off</Text>
            </View>
          ) : (
            <Image source={require('../assets/images/profile.png')} style={styles.localImage} />
          )}
        </View>
      </View>

      <View style={styles.header}>
        <Text style={styles.doctorName}>{doctorName}</Text>
        <Text style={styles.callDuration}>{callDuration}</Text>
      </View>

      <View style={styles.callControls}>
        <TouchableOpacity 
          style={[styles.controlButton, isMuted && styles.controlButtonActive]}
          onPress={() => setIsMuted(!isMuted)}
        >
          <Text style={styles.controlButtonText}>{isMuted ? 'Unmute' : 'Mute'}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.controlButton, isVideoOff && styles.controlButtonActive]}
          onPress={() => setIsVideoOff(!isVideoOff)}
        >
          <Text style={styles.controlButtonText}>{isVideoOff ? 'Video On' : 'Video Off'}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.controlButton, !isSpeakerOn && styles.controlButtonActive]}
          onPress={() => setIsSpeakerOn(!isSpeakerOn)}
        >
          <Text style={styles.controlButtonText}>{isSpeakerOn ? 'Speaker Off' : 'Speaker On'}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.endCallButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.endCallButtonText}>End Call</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default StreamVideoCallScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  videoContainer: {
    flex: 1,
    position: 'relative',
  },
  remoteVideo: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  remoteImage: {
    width: '100%',
    height: '100%',
  },
  localVideo: {
    position: "absolute",
    top: 20,
    right: 20,
    width: 120,
    height: 180,
    borderRadius: 12,
    backgroundColor: '#333',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  localImage: {
    width: '100%',
    height: '100%',
  },
  videoOffContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  videoOffText: {
    color: '#FFF',
  },
  header: {
    position: 'absolute',
    top: 40,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 15,
    borderRadius: 12,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  callDuration: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  callControls: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  controlButton: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#F0F0F0',
  },
  controlButtonActive: {
    backgroundColor: '#D0D0D0',
  },
  controlButtonText: {
    fontSize: 14,
    color: '#333',
  },
  endCallButton: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 8,
    backgroundColor: "#FF3B30",
  },
  endCallButtonText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: 'bold',
  },
});
