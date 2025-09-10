import { Button, Card, Margin, Row, Text } from "app/components"
import Colors from "app/constants/Colors"
import useDownloadPrescription from "app/hook/api/useDownloadPrescription"
import dayjs from "dayjs"
import { observer } from "mobx-react-lite"
import React, { FC, useState } from "react"
import { ActivityIndicator, FlatList, StyleSheet, TouchableOpacity, View } from "react-native"
import { DownloadSVGICon, PillIconSVG } from "../SVG"
import { IntakeSchedule } from "./intakeSchedule"

interface Medication {
  idealTimes: string[]
  _id: string
  name: string
  dosage: string
  duration: string
  strength: string
}

export type EPrescription = {
  medications: Medication[]
  appointment: string
  patient: string
  doctor: {
    name: string
    id: string
  }
  createdAt: string
  updatedAt: string
  id: string
}

export const PrescriptionCard: FC<{ prescription: EPrescription }> = observer(
  ({ prescription }) => {
    const [expanded, setExpanded] = useState(false)
    // const [remind, setRemind] = useState(false)

    const toggle = () => {
      setExpanded((old) => !old)
    }

    const { mutate: downloadPrescription, isPending: isDownloading } = useDownloadPrescription()

    return (
      <TouchableOpacity activeOpacity={0.8} style={styles.container} onPress={toggle}>
        <Card
          verticalAlignment="center"
          style={[styles.card, !expanded && styles.collapsed]}
          onPress={toggle}
          LeftComponent={<PillIconSVG width="109" height="109" />}
          ContentComponent={
            <View>
              <Row justify="space-between">
                <Text size={"blockSectionTitle"} weight="bold" tx={"prescription.prescription"} />
                <Text
                  style={styles.status}
                  text={dayjs(prescription.createdAt).format("DD/MM/YY")}
                  preset="footerDescription"
                  weight="bold"
                />
              </Row>

              <Row align="center">
                <Text preset={"rowDescription"} tx={"prescription.by"} />
                <Text preset={"rowDescription"} text={prescription.doctor.name} />
              </Row>
              <Row align="center">
                <Text preset={"rowDescription"} tx={"prescription.date"} />
                <Text
                  preset={"rowDescription"}
                  text={dayjs(prescription.createdAt).format("DD/MM/YY")}
                />
              </Row>
            </View>
          }
        />

        {expanded && (
          <FlatList
            ListHeaderComponent={
              <>
                <Margin mb={8} mt={16}>
                  <Text size={"blockSectionTitle"} weight="bold" tx={"prescription.medications"} />
                </Margin>
              </>
            }
            data={prescription.medications}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <IntakeSchedule
                prescription={{
                  name: item.name,
                  dosage: item.dosage,
                  duration: item.duration,
                  times: item.idealTimes,
                }}
              />
            )}
            ListFooterComponent={
              <>
                {/* <Toggle
                  inputOuterStyle={{ borderColor: Colors.modalHeaderSwipeIndicator }}
                  inputDetailStyle={{ backgroundColor: Colors.tabBackground }}
                  labelStyle={styles.togglLabel}
                  labelTx={"prescription.remind"}
                  value={remind}
                  onPress={() => {
                    setRemind((old) => !old)
                  }}
                  checkboxIcon={"check"}
                /> */}
                <Margin mt={16} />
                <Row justify="space-between" fullWidth>
                  <Button
                    preset="selectorUnselected"
                    tx="prescription.dl"
                    style={[styles.baseBtn, styles.dl]}
                    RightAccessory={() =>
                      isDownloading ? (
                        <ActivityIndicator size="small" color={Colors.drawerCompleteProfile} />
                      ) : (
                        <DownloadSVGICon style={styles.dlIcon} />
                      )
                    }
                    onPress={() => downloadPrescription(prescription.id)}
                    disabled={isDownloading}
                  />
                  {/* <Margin ml={16} /> */}
                  {/* <Button
                  preset="selectorSelected"
                  style={[styles.baseBtn, styles.view]}
                  tx="prescription.view"
                /> */}
                </Row>
              </>
            }
          />
        )}
      </TouchableOpacity>
    )
  },
)

const styles = StyleSheet.create({
  // archived: {
  //   backgroundColor: Colors.iconDisabledTint,
  // },
  baseBtn: {
    backgroundColor: Colors.transparent,
    borderRadius: 50,
    flex: 1,
    height: 48,
  },
  card: {
    borderBottomColor: Colors.buttonBorder,
    borderBottomWidth: 1,
    borderRadius: 0,
    borderWidth: 0,
    padding: 0,
    paddingBottom: 16,
    shadowColor: Colors.transparent,
  },
  collapsed: {
    borderBottomWidth: 0,
    paddingBottom: 0,
  },
  container: {
    backgroundColor: Colors.tabBackground,
    borderRadius: 24,
    marginBottom: 16,
    padding: 16,
    paddingVertical: 24,
  },
  dl: {
    borderWidth: 1,
  },
  dlIcon: { marginLeft: 8 },
  status: {
    backgroundColor: Colors.iconPrimaryTint,
    borderRadius: 3,
    color: Colors.buttonPrimaryText,
    height: 24,
    padding: 4,
    textAlign: "center",
    textAlignVertical: "center",
  },
  // togglLabel: {
  //   color: Colors.screenSubtitleText,
  //   fontSize: 14,
  //   fontWeight: "bold",
  //   lineHeight: 16.9,
  // },
  // view: {
  //   backgroundColor: Colors.buttonPrimaryBackground,
  // },
})
