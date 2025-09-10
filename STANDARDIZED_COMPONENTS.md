# Standardized UI Components

This document describes the standardized UI components that have been implemented to ensure consistency across the application.

## Button Component

The Button component provides a consistent look and feel for all buttons in the application.

### Props

- `title` (string): The text to display on the button
- `onPress` (function): Function to call when the button is pressed
- `style` (object): Custom styles to apply to the button
- `textStyle` (object): Custom styles to apply to the button text
- `variant` (string): Button variant - 'primary' (default), 'secondary', 'outline', or 'text'
- `disabled` (boolean): Whether the button is disabled
- `activeOpacity` (number): Opacity when button is pressed (default: 0.7)

### Usage Examples

```jsx
// Primary button (default)
<Button title="Submit" onPress={handleSubmit} />

// Secondary button
<Button title="Cancel" onPress={handleCancel} variant="secondary" />

// Outline button
<Button title="Edit" onPress={handleEdit} variant="outline" />

// Text button
<Button title="Learn More" onPress={handleLearnMore} variant="text" />

// Disabled button
<Button title="Save" onPress={handleSave} disabled={true} />
```

## CloseButton Component

The CloseButton component provides a consistent close button for modals and screens.

### Props

- `onPress` (function): Function to call when the button is pressed
- `style` (object): Custom styles to apply to the button
- `size` (string): Size of the button - 'small', 'medium' (default), or 'large'

### Usage Examples

```jsx
// Default close button
<CloseButton onPress={handleClose} />

// Large close button
<CloseButton onPress={handleClose} size="large" />

// Small close button with custom styling
<CloseButton onPress={handleClose} size="small" style={{ marginTop: 10 }} />
```

## Header Component

The Header component provides a consistent header for all screens.

### Props

- `title` (string): The title to display in the header
- `onBackPress` (function): Function to call when the back button is pressed
- `style` (object): Custom styles to apply to the header
- `rightComponent` (React element): Custom component to display on the right side
- `showBackButton` (boolean): Whether to show the back button (default: true)
- `backButtonTitle` (string): Title to display next to the back button
- `onRightPress` (function): Function to call when the right button is pressed

## Footer Component

The Footer component provides a consistent footer for all screens.

### Props

- `style` (object): Custom styles to apply to the footer
- `onHomePress` (function): Function to call when the home button is pressed
- `onProfilePress` (function): Function to call when the profile button is pressed
- `onSettingsPress` (function): Function to call when the settings button is pressed
- `activeScreen` (string): The currently active screen ('home', 'profile', or 'settings')

## Implementation Notes

1. All components use consistent fonts, font sizes, and weights
2. All buttons have the same hover and active styles (using activeOpacity)
3. All close buttons use the same icon (✕) and styling
4. All modals have consistent styling and behavior
5. All screens use the standardized Header and Footer components

## Benefits

1. Consistent user experience across the application
2. Easier maintenance and updates
3. Reduced code duplication
4. Improved accessibility
5. Better visual hierarchy