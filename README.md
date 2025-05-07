# My React App

## Overview

**My React App** is a simple and modular React project that demonstrates how to create reusable button components with different styles using props. Each button type — Default, Primary, Secondary, and Danger — is encapsulated in its own component, promoting clean structure, scalability, and code reusability. This project is a great starting point for understanding how component-based architecture works in React.

The app is structured around individual button components and a central `App.jsx` file that renders and demonstrates each button.

---

## Features

### 🔘 Default Button
- Basic styling with neutral colors.
- Used for general actions that don't require emphasis.
- Defined in its own component (`DefaultButton.jsx`).
- Style and label can be customized via props.

### 🔵 Primary Button
- Designed to stand out as the main action.
- Has prominent styling (e.g., solid background color).
- Defined in `PrimaryButton.jsx`.
- Receives props for dynamic label and optional customization.

### ⚪ Secondary Button
- Used for alternative actions that support the primary one.
- Styled with a more subtle look (e.g., outlined or muted).
- Resides in `SecondaryButton.jsx`.
- Props allow flexibility in behavior and appearance.

### 🔴 Danger Button
- Indicates destructive or irreversible actions.
- Styled with bold, attention-grabbing colors (e.g., red).
- Created in `DangerButton.jsx`.
- Props support label control and can be extended for confirmation logic.

---

- **App.jsx**: The root component that imports and displays all button components with various props.
- **Each button component**: Separately defined with clear prop handling and encapsulated styling.

---

## Technologies Used

- React (with JSX)
- CSS Modules or Inline Styling (depending on implementation)
- JavaScript (ES6+)

---

## Author

Grace Wambui Mugece

---

## Conclusion

This project demonstrates how React’s component-based architecture can be used to create clean, reusable, and customizable UI elements. By separating each button into its own component and using props to control behavior and appearance, this app lays a solid foundation for building scalable front-end applications. Whether you’re learning or teaching React, this structure helps reinforce best practices from the start.

