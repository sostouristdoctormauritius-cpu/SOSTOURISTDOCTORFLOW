# Header Standardization

This document describes the standardized header implementation for the SOS Doctor Mobile App.

## Header Structure

The app now follows a consistent header structure across all screens:

1. **System Status Bar** - Shows battery, network, time, etc. (Handled by React Native StatusBar)
2. **App Header** - Custom header with consistent styling and components

## App Header Components

The standardized Header component includes:

1. **Left Section**:
   - Back button (when applicable)
   - Back button title (optional)

2. **Center Section**:
   - Screen title OR
   - Logo (for main screens like Home)

3. **Right Section**:
   - Settings/Profile icon OR
   - Custom component OR
   - Placeholder

## Implementation

### StatusBar Configuration

The StatusBar is configured in `App.tsx`:
```jsx
<StatusBar barStyle="dark-content" backgroundColor="white" />
```

### Header Component

The Header component is located in `src/components/Header.js` and supports the following props:

- `title` (string): Screen title
- `onBackPress` (function): Function to call when back button is pressed
- `style` (object): Custom styles for the header
- `rightComponent` (React element): Custom component for the right side
- `showBackButton` (boolean): Whether to show the back button (default: true)
- `backButtonTitle` (string): Title to display next to the back button
- `onRightPress` (function): Function to call when right button is pressed
- `showLogo` (boolean): Whether to show the logo instead of title (default: false)

### Usage Examples

#### Standard Header with Back Button
```jsx
<Header 
  title="Settings" 
  onBackPress={() => navigation.goBack()} 
/>
```

#### Header with Logo (Home Screen)
```jsx
<Header 
  showLogo={true}
  onRightPress={() => navigation.navigate('Profile')}
/>
```

#### Header with Custom Right Component
```jsx
<Header 
  title="My Profile" 
  onBackPress={() => navigation.goBack()}
  onRightPress={() => navigation.navigate('Settings')}
/>
```

## Benefits

1. **Consistency** - All screens now have the same header design
2. **Maintainability** - Single component to update for header changes
3. **User Experience** - Familiar navigation patterns across the app
4. **Accessibility** - Consistent placement of navigation elements
5. **Branding** - Logo properly displayed on main screens with consistent sizing

## Screens Updated

The following screens have been updated to use the standardized header:
- HomeScreen
- SignInWithEmail
- RegisterWithEmail
- ForgotPassword
- ProfileScreen
- Settings
- CompleteProfile
- Payment
- Card
- About
- BillingScreen
- PrescriptionScreen
- HomeVisitScreen
- ThreadScreen
- EmergencyCallScreen
- And other screens that were previously updated

## Future Considerations

1. All new screens should use the standardized Header component
2. Custom header implementations should be replaced with the standardized component
3. Any header style changes should be made in the Header component to maintain consistency
4. The Header component now has a fixed height of 90 for consistency across all screens
5. Logo sizing is controlled with maxWidth and height properties for proper display