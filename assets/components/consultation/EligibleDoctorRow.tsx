import { UserCircle } from "lucide-react-native"
import React from "react"
import { Image, StyleSheet, View } from "react-native"
import { Text } from "../Text"

interface EligibleDoctorRowProps {
  imageUrl?: string
  title: string
  description: string
}

const EligibleDoctorRow: React.FC<EligibleDoctorRowProps> = ({ imageUrl, title, description }) => {
  const renderAvatar = () => {
    if (imageUrl) {
      return (
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUrl }} style={styles.avatar} />
          <View style={styles.statusIndicator} />
        </View>
      )
    }
    return <UserCircle color="black" size={60} />
  }
  return (
    <View style={styles.row}>
      {renderAvatar()}
      <View style={styles.labelsContainer}>
        <Text preset="rowTitle" text={title} />
        <Text preset="rowDescription" text={description} style={styles.desc}/>
      </View>
      {/* <Icon name="chevron-right" size={24} color="#9E9E9E" /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: "#dadada",
    borderRadius: 30,
    height: 60,
    width: 60,
  },
  imageContainer: {
    position: "relative",
  },
  labelsContainer: {
    flex: 1,
    marginLeft: 10,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    padding: 20,
  },
  statusIndicator: {
    backgroundColor: "#2FB645",
    borderRadius: 5,
    bottom: 12,
    height: 10,
    position: "absolute",
    right: -2,
    width: 10,
  },
  desc:{
    marginTop:2
  }
 
})

export default EligibleDoctorRow
