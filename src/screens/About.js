import React from "react";
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

const DATA = [
  {
    id: "1",
    title: "Instant Online Consultation",
    description: "Connect with doctors instantly through secure chat or video calls.",
    centerImage: require("../assets/images/instantOnline.png"),
  },
  {
    id: "2",
    title: "E-Prescription",
    description: "Receive digital prescriptions directly on your phone after consultation.",
    centerImage: require("../assets/images/ePrescription.png"),
  },
  {
    id: "3",
    title: "Home Visit",
    description: "Request a doctor to visit you at your home or preferred location.",
    centerImage: require("../assets/images/homeVisit.png"),
  }
];

const AboutScreen = () => {
  const navigation = useNavigation();
  const [scrollIndex, setScrollIndex] = React.useState(0);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={(event) => {
          const offsetX = event.nativeEvent.contentOffset.x;
          const page = Math.round(offsetX / event.nativeEvent.layoutMeasurement.width);
          setScrollIndex(page);
        }}
        scrollEventThrottle={16}
      >
        {DATA.map((slide) => (
          <View key={slide.id} style={styles.slideContainer}>
            <Image source={slide.centerImage} style={styles.slideImage} />
            <Text style={styles.slideTitle}>{slide.title}</Text>
            <Text style={styles.slideDescription}>{slide.description}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.indicatorContainer}>
        {DATA.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              scrollIndex === index && styles.activeIndicator,
            ]}
          />
        ))}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (scrollIndex < DATA.length - 1) {
            setScrollIndex(scrollIndex + 1);
          } else {
            navigation.navigate('RegisterWithEmail');
          }
        }}
      >
        <Text style={styles.labelStyle}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnSkip}
        onPress={() => navigation.navigate('SignInWithEmail')}
      >
        <Text style={styles.skipLabel}>Skip for now</Text>
      </TouchableOpacity>
    </View>
  );
};

AboutScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  slideContainer: {
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  slideImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  slideTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  slideDescription: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  indicator: {
    backgroundColor: "#CCE9DC",
    borderRadius: 6,
    height: 12,
    width: 12,
    marginLeft: 12,
  },
  activeIndicator: {
    backgroundColor: "blue",
  },
  button: {
    width: "90%",
    backgroundColor: "lightgreen",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  labelStyle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 10,
    color: "white",
  },
  btnSkip: {
    marginTop: 10,
  },
  skipLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "blue",
  },
});
