import React from "react"
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from "react-native"

export function ErrorDetails() {
  const error = "Sample Error: Something went wrong!"
  const errorInfo = "Component Stack: \n  at MyComponent (MyComponent.js:10:5)\n  at App (App.js:5:3)"

  return (
    <View
      style={styles.contentContainer}
    >
      <View style={styles.topSection}>
        <Text style={styles.icon}>🐞</Text> {/* Placeholder for Icon */}
        <Text style={styles.heading}>Something went wrong!</Text>
        <Text>This is a friendly message to the user.</Text>
      </View>

      <ScrollView style={styles.errorSection} contentContainerStyle={styles.errorSectionContentContainer}>
        <Text style={styles.errorContent} >{error.trim()}</Text>
        <Text
          selectable
          style={styles.errorBacktrace}
        >{errorInfo.trim()}</Text>
      </ScrollView>

      <TouchableOpacity
        style={styles.resetButton}
        disabled={true}
      >
        <Text style={styles.resetButtonText}>Reset App</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: "center",
    paddingHorizontal: 16, // Placeholder for spacing.lg
    paddingTop: 24, // Placeholder for spacing.xl
    flex: 1,
    backgroundColor: "white",
  },
  topSection: {
    flex: 1,
    alignItems: "center",
  },
  icon: {
    fontSize: 64,
  },
  heading: {
    color: "#C03403", // Placeholder for colors.error
    marginBottom: 16, // Placeholder for spacing.md
    fontSize: 20,
    fontWeight: "bold",
  },
  errorSection: {
    flex: 2,
    backgroundColor: "#F4F2F1", // Placeholder for colors.separator
    marginVertical: 16, // Placeholder for spacing.md
    borderRadius: 6,
  },
  errorSectionContentContainer: {
    padding: 16, // Placeholder for spacing.md
  },
  errorContent: {
    color: "#C03403", // Placeholder for colors.error
    fontWeight: "bold",
  },
  errorBacktrace: {
    marginTop: 16, // Placeholder for spacing.md
    color: "#564E4A", // Placeholder for colors.textDim
  },
  resetButton: {
    backgroundColor: "#C03403", // Placeholder for colors.error
    paddingHorizontal: 48, // Placeholder for spacing.xxl
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  resetButtonText: {
    color: "white", 
    fontWeight: "bold",
  },
})

export default ErrorDetails;