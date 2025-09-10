import { Margin, Padding, Text } from "app/components"
import { FontWeight } from "app/utils/design"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { FlatList, Image, StyleSheet, View } from "react-native"

interface ServicesBlockProps {
  services: Array<string>
}

export const ServicesBlock: FC<ServicesBlockProps> = observer(function ServicesBlock({ services }) {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  return (
    <Padding pr={16} pl={16}>
      <Text style={styles.textAlign} preset="screenHeader" tx={"discounts.services"} />
      <Margin mt={16} mb={16}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={services}
          renderItem={({ index, item }) => (
            <View style={styles.tile} key={index}>
              <Image
                resizeMode="cover"
                style={styles.serviceImg}
                source={require("app/images/discounts/spa.png")}
              />
              <Text style={styles.serviceName} preset="description" weight="bold">
                {item}
              </Text>
            </View>
          )}
        />
      </Margin>
    </Padding>
  )
})

const styles = StyleSheet.create({
  serviceImg: {
    borderRadius: 8,
    height: 80,
    width: 80,
  },
  serviceName: { fontWeight: FontWeight.bold, textAlign: "center" },
  textAlign: { textAlign: "left" },
  tile: {
    borderRadius: 8,
    height: 102,
    justifyContent: "space-between",
    marginRight: 16,
    width: 80,
  },
})
