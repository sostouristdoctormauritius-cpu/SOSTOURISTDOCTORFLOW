import { EPrescription, Margin, PrescriptionCard, Screen, Text } from "app/components"
import Colors from "app/constants/Colors"
import useGetMyPrescriptions from "app/hook/api/useGetMyPrescriptions"
import { captureApiException } from "app/manager/Sentry"
import { AppStackScreenProps } from "app/navigators"
import dayjs from "dayjs"
import { observer } from "mobx-react-lite"
import React, { FC, useEffect } from "react"
import { ActivityIndicator, SectionList, StyleSheet, View } from "react-native"

interface PrescriptionScreenProps extends AppStackScreenProps<"EPrescription"> {}

const PrescriptionScreen: FC<PrescriptionScreenProps> = observer(function PrescriptionScreen() {
  const {
    data: prescriptions,
    isLoading,
    error,
  } = useGetMyPrescriptions({
    sortBy: "dateCreated:desc",
    limit: 20,
    page: 1,
  })

  useEffect(() => {
    if (error) {
      captureApiException(error, {
        type: "get_prescriptions",
      })
    }
  }, [error])

  const formatPrescriptionsData = () => {
    if (!prescriptions?.length) {
      return []
    }

    const today = dayjs()
    const todayPrescriptions: Array<EPrescription> = []
    const yesterdayPrescriptions: Array<EPrescription> = []
    const olderPrescriptions: Array<EPrescription> = []

    prescriptions.forEach((prescription: EPrescription) => {
      const prescriptionDate = dayjs(prescription.createdAt)
      if (prescriptionDate.isSame(today, "day")) {
        todayPrescriptions.push(prescription)
      } else if (prescriptionDate.isSame(today.subtract(1, "day"), "day")) {
        yesterdayPrescriptions.push(prescription)
      } else {
        olderPrescriptions.push(prescription)
      }
    })

    const sections = []
    if (todayPrescriptions.length) {
      sections.push({
        title: "Today",
        date: today.format("MMMM DD, YYYY"),
        data: todayPrescriptions,
      })
    }
    if (yesterdayPrescriptions.length) {
      sections.push({
        title: "Yesterday",
        date: today.subtract(1, "day").format("MMMM DD, YYYY"),
        data: yesterdayPrescriptions,
      })
    }
    if (olderPrescriptions.length) {
      sections.push({
        title: "Older",
        date: "",
        data: olderPrescriptions,
      })
    }
    return sections
  }

  if (isLoading) {
    return (
      <Screen style={styles.container} preset="fixed">
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={Colors.drawerCompleteProfile} />
        </View>
      </Screen>
    )
  }

  return (
    <Screen style={styles.container} preset="fixed">
      <SectionList
        sections={formatPrescriptionsData()}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.id || index.toString()}
        renderItem={({ item }) => <PrescriptionCard prescription={item} />}
        renderSectionHeader={({ section: { title, date } }) => (
          <Margin mb={16}>
            <Text preset="rowTitle" weight="normal">
              <Text preset="rowTitle" weight="bold">
                {title}
              </Text>
              {date ? `, ${date}` : ""}
            </Text>
          </Margin>
        )}
      />
    </Screen>
  )
})

export default PrescriptionScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.greyBG,
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  loading: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
})
