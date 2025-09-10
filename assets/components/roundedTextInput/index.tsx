/* eslint-disable react-native/no-color-literals */
import React, { useCallback } from "react"
import {
  Image,
  ImageURISource,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native"

import { AutoImage } from "app/components"
import { relativeWidth } from "app/utils/design"

type RoundedTextInputProps = Pick<
  TextInputProps,
  "onBlur" | "onChangeText" | "value" | "keyboardType" | "secureTextEntry"
> & {
  placeholder?: string
  onChangeText: (txt: string) => void
  onRightIconPress?: () => void
  onPhoneIconPress?: () => void
  leftImageSource?: ImageURISource
  rightImageSource?: ImageURISource;
  type?: string
  countryCode?: string
}

const RoundedTextInput = ({
  placeholder,
  onChangeText,
  leftImageSource,
  rightImageSource,
  onRightIconPress,
  onPhoneIconPress,
  type = 'default',
  countryCode,
  value,
  ...rest
}: RoundedTextInputProps) => {
  const renderRightIcon = useCallback(() => {
    return <TouchableOpacity style={styles.rightIconContainer} onPress={onRightIconPress}>{<AutoImage style={styles.rightIcon} source={rightImageSource} />}</TouchableOpacity>
  }, [rightImageSource, onRightIconPress])

  return (
    <View style={[styles.button, (leftImageSource ||  type == 'phone') && styles.pdl]}>
      {leftImageSource && <AutoImage style={styles.iconTextInput} source={leftImageSource} />}
      {
      type == 'phone' && <TouchableOpacity  onPress={onPhoneIconPress} style={{
        flexDirection: "row",
        alignItems: 'center',
        
      }}>
        <Text style={{ color: "#8C8C8C",fontSize: 16, }}>{countryCode}</Text>
        <Image source={require('../../images/register/down_arrow.png')} style={{height:16,width:16}}/>
      </TouchableOpacity>
      }
      <TextInput
        style={[styles.textInput, { paddingRight: rightImageSource ? 50 : 20 }, type == 'phone' && {width:'82%',paddingLeft:10}]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        autoCorrect={false}
        {...rest}
      />
      {rightImageSource && renderRightIcon()}
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 30,
    flexDirection: "row",
    height: 64,
    justifyContent: "center",
    marginBottom: 20,
    width: relativeWidth(384),
  },
  iconTextInput: {
    height: 18,
    width: 18,
  },
  pdl: {
    paddingLeft: 27,
  },
  pdl1: {
    paddingLeft: 30,
  },
  rightIconContainer: {
    position: 'absolute',
    right: 10,
    padding: 4,
    zIndex: 99999
  },
  rightIcon: {
    height: 18,
    width: 18,
    tintColor: '#8C8C8C',
  },
  textInput: {
    backgroundColor: "#F6F6F6",
    borderRadius: 30,
    fontSize: 16,
    height: 64,
    paddingLeft: 20,
    paddingRight: 20,
    width: "95%",
  },
})

export default RoundedTextInput
