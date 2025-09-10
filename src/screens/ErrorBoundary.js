import React from "react"
import { View, Text, StyleSheet } from "react-native"

export default function ErrorBoundary({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Error Boundary Placeholder</Text>
      <Text style={styles.description}>This component would catch and display errors.</Text>
      {/* Render children as if no error occurred for static display */}
      {children}
    </View>
  )
}

export function withSOSErrorBoundary(WrappedComponent) {
  return function WithErrorBoundaryWrapper(props) {
    return (
      <ErrorBoundary>
        <WrappedComponent {...props} />
      </ErrorBoundary>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8d7da", // Light red background for error indication
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#721c24", // Dark red text
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#721c24",
    textAlign: "center",
  },
})
