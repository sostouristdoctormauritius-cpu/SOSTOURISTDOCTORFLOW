import { Margin, Row, Text } from "app/components"
import Colors from "app/constants/Colors"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { StyleSheet, View } from "react-native"

interface ISchedule {
  name: string
  dosage: string
  duration: string
  times: string[]
}

export const IntakeSchedule: FC<{ prescription: ISchedule }> = observer(({ prescription }) => {
  return (
    <View style={styles.container}>
      <Text
        size={"primaryPill"}
        weight="bold"
        style={{ color: Colors.cardTextGreen }}
        text={prescription.name}
      />
      <Margin mt={4} />
      <Row align="center">
        <Text
          style={{ color: Colors.cardTextGreen }}
          size={"primaryPill"}
          weight="bold"
          text={`${prescription.dosage} for ${prescription.duration}`}
        />
      </Row>
      <Margin mt={8} />
      <Row align="center">
        {prescription.times.map((time) => (
          <Text preset="footerDescription" style={styles.time} key={time} text={time} />
        ))}
      </Row>
    </View>
  )
})

const styles = StyleSheet.create({
  archived: {
    backgroundColor: Colors.iconDisabledTint,
  },
  card: {
    borderWidth: 0,
    shadowColor: Colors.transparent,
  },
  container: {
    marginBottom: 16,
  },
  instruct: { color: Colors.appointmentDetailsDateDark, marginLeft: 4 },
  right: { alignItems: "center", borderWidth: 1, flexDirection: "row" },
  time: {
    borderColor: Colors.tabIconDefault,
    borderRadius: 6,
    borderWidth: 0.5,
    color: Colors.appointmentDetailsDateDark,
    marginRight: 6,
    padding: 6,
    textAlign: "center",
    textAlignVertical: "center",
  },
})
