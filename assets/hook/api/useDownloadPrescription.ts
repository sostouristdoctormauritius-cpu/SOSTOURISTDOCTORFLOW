import { useMutation } from "@tanstack/react-query"
import { apiDownloadPrescriptionPDF } from "app/manager/Network"
import { captureApiException } from "app/manager/Sentry"
import { showTempNetworkErrorAlert } from "app/utils/sosUtils"
import { Alert, Platform } from "react-native"
import RNBlobUtil from "react-native-blob-util"

const MUTATION_KEY = "downloadPrescription"

const useDownloadPrescription = () => {
  return useMutation({
    mutationKey: [MUTATION_KEY],
    mutationFn: async (prescriptionId: string) => {
      const response = await apiDownloadPrescriptionPDF(prescriptionId)

      const path = Platform.select({
        ios: RNBlobUtil.fs.dirs.DocumentDir,
        android: RNBlobUtil.fs.dirs.DownloadDir,
      })

      const fileName = `prescription-${prescriptionId}.pdf`
      const filePath = `${path}/${fileName}`

      await RNBlobUtil.fs.writeFile(filePath, response, "base64")

      if (Platform.OS === "android") {
        await RNBlobUtil.android.addCompleteDownload({
          title: fileName,
          description: "Prescription Download",
          mime: "application/pdf",
          path: filePath,
          showNotification: true,
        })
      }

      return { filePath, fileName }
    },
    onError: (error) => {
      captureApiException(error, {
        type: "download_prescription",
      })
      showTempNetworkErrorAlert(
        "Download Failed",
        "Unable to download prescription. Please try again later.",
      )
    },
    onSuccess: () => {
      Alert.alert("Success", "Prescription downloaded successfully", [
        {
          text: "OK",
          //   onPress: () => {
          //     // @ts-ignore
          //     navigation.navigate(SCREENS_VIEW_PDF, {
          //       pdfSource: Platform.select({
          //         ios: { uri: `file://${filePath}` },
          //         android: { uri: filePath },
          //       }),
          //       title: fileName,
          //     })
          //   },
        },
      ])
    },
  })
}

export default useDownloadPrescription
