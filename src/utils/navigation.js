import { useNavigation, useRoute } from '@react-navigation/native';

// Re-exporting navigation hooks to reduce duplicate imports across screens
export {
  useNavigation,
  useRoute
};

// Add other common navigation utilities here if needed
export const navigateToScreen = (navigation, screenName, params = {}) => {
  navigation.navigate(screenName, params);
};

export const goBack = (navigation) => {
  navigation.goBack();
};