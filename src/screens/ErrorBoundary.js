import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import { useNavigation } from '@react-navigation/native'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log("Error caught by boundary:", error, errorInfo);
  }

  handleRetry = () => {
    // Reset error state and attempt to re-render
    this.setState({ hasError: false });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <View style={styles.container}>
          <View style={styles.content}>
            <Image 
              source={require('../assets/images/sad-face.png')} 
              style={styles.errorImage} 
            />
            <Text style={styles.title}>Something Went Wrong</Text>
            <Text style={styles.description}>
              We're sorry, but something unexpected happened. Our team has been notified and we're working to fix it.
            </Text>
            
            <TouchableOpacity 
              style={styles.retryButton}
              onPress={this.handleRetry}
            >
              <Text style={styles.retryButtonText}>Try Again</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.homeButton}
              onPress={() => {
                // Navigate to home screen
                const navigation = useNavigation();
                navigation.navigate('Home');
              }}
            >
              <Text style={styles.homeButtonText}>Go to Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    return this.props.children; 
  }
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
    backgroundColor: "#ffffff",
    padding: 20,
  },
  content: {
    alignItems: "center",
    padding: 30,
    borderRadius: 12,
  },
  errorImage: {
    width: 100,
    height: 100,
    marginBottom: 30,
    opacity: 0.7,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 15,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#666666",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 30,
  },
  retryButton: {
    backgroundColor: "#F71E27",
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginBottom: 15,
    width: "100%",
    alignItems: "center",
  },
  retryButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  homeButton: {
    backgroundColor: "#f0f0f0",
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 40,
    width: "100%",
    alignItems: "center",
  },
  homeButtonText: {
    color: "#666666",
    fontSize: 16,
    fontWeight: "600",
  },
})
