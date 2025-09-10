import React, { useEffect } from "react"
import { ScrollView, StyleSheet, View, useWindowDimensions } from "react-native"
import { Button, useTheme } from "react-native-paper"

import { NavigationProp } from "@react-navigation/native"
import { Screen } from "app/components/Screen"
import GreenButton from "app/components/greenButton"
import Slide from "app/components/slide"
import { SCREENS_REGISTER_WITH_EMAIL, SCREENS_SIGNIN_WITH_EMAIL } from "app/constants/Screens"
import { translate } from "app/i18n"
import { relativeWidth } from "app/utils/design"

const SLIDES = [
  {
    centerImage: require("../../images/about/instantOnline.png"),
    title: "aboutScreen.titleA",
    desc: "aboutScreen.descA",
  },
  {
    centerImage: require("../../images/about/ePrescription.png"),
    title: "aboutScreen.titleB",
    desc: "aboutScreen.descB",
  },
  {
    centerImage: require("../../images/about/homeVisit.png"),
    title: "aboutScreen.titleC",
    desc: "aboutScreen.descC",
  }
]

type AboutScreenProps = {
  navigation: NavigationProp<any>
}

const AboutScreen = ({ navigation }: AboutScreenProps) => {
  const { width: windowWidth } = useWindowDimensions()
  const [scrollIndex, setScrollIndex] = React.useState(0)
  const scrollViewRef = React.useRef<ScrollView>(null)
  const theme = useTheme()
  const onScroll = (event: { nativeEvent: { contentOffset: { x: number } } }) => {
    const offsetX = event.nativeEvent.contentOffset.x
    const page = Math.round(offsetX / windowWidth)
    setScrollIndex(page)
  }

  const onNext = () => {
    if (scrollIndex < 2) {
      scrollViewRef?.current?.scrollTo({
        x: windowWidth * (scrollIndex + 1),
      })
    } else {
      navigation.navigate(SCREENS_REGISTER_WITH_EMAIL)
    }
  }

  const onSkip = () => {
    navigation.navigate(SCREENS_SIGNIN_WITH_EMAIL)
  }

  useEffect(() => {
    navigation.setOptions({ headerShown: false })
  }, [navigation])

  return (
    <Screen preset="auto" contentContainerStyle={styles.container} safeAreaEdges={["top"]}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        {SLIDES.map((slide, index) => (
          <Slide
            key={index}
            index={scrollIndex}
            centerImage={slide.centerImage}
            title={slide.title}
            desc={slide.desc}
          />
        ))}
      </ScrollView>
      <View style={styles.indicatorContainer}>
        {SLIDES.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              scrollIndex === index && {
                backgroundColor: theme.colors.secondary,
              },
            ]}
          />
        ))}
      </View>
      <GreenButton
        onPress={onNext}
        buttonStyle={styles.button}
        labelStyle={styles.labelStyle}
        isSecondary
      />
      <Button
        onPress={onSkip}
        style={styles.btnSkip}
        labelStyle={[
          styles.skipLabel,
          {
            color: theme.colors.secondary,
          },
        ]}
      >
        {translate("aboutScreen.skip", { defaultValue: "Skip for now" })}
      </Button>
    </Screen>
  )
}
export default AboutScreen
const styles = StyleSheet.create({
  btnSkip: { marginTop: 10 },
  button: {
    width: relativeWidth(385),
  },
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  indicator: {
    backgroundColor: "#CCE9DC",
    borderRadius: 6,
    height: 12,
    marginLeft: 12,
    width: 12,
  },
  indicatorContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  labelStyle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 10,
  },
  skipLabel: {
    fontSize: 18,
    fontWeight: "bold",
  },
})
