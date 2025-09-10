import { Screen } from "app/components"
import ContactCard from "app/components/emergencyCall/contactCard"
import Colors from "app/constants/Colors"
import { useStores } from "app/models"
import { AppStackScreenProps } from "app/navigators"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { FlatList, StyleSheet } from "react-native"

interface EmergencyCallScreenProps extends AppStackScreenProps<"EmergencyCall"> {}

const EmergencyCallScreen: FC<EmergencyCallScreenProps> = observer(function EmergencyCallScreen() {
  const {
    appConfigStore: { emergencyContacts },
  } = useStores()

  
  return (
    <Screen style={styles.container} preset="fixed">
      <FlatList
        data={emergencyContacts}
        renderItem={({ item }) => {
          const contact = {
            name: item.title,
            phone: item.phone,
            iconUri: item.image,
          }
          return <ContactCard contact={contact} />
        }}
        style={styles.list}
      />
    </Screen>
  )
})

export default EmergencyCallScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.greyBG,
    flex: 1,
    paddingTop: 24,
  },
  list: {
    backgroundColor: Colors.greyBG,
    margin: 16,
  },
})
