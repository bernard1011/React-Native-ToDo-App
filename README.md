# 📋 React Native ToDo App

A sleek, modern task management app built with React Native & Expo — featuring a glassmorphism UI, smooth animations, and persistent storage.

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## ✨ Features

- ➕ Add tasks with a single tap or keyboard submit
- ✅ Mark tasks as complete with smooth visual feedback
- 🗑️ Delete individual tasks or clear all at once
- 💾 Persistent storage — tasks survive app restarts
- 🎨 Glassmorphism UI with gradient background
- 📱 Smooth animations when switching between empty/filled states
- ⌨️ Keyboard-aware layout

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React Native + Expo | Cross-platform mobile framework |
| TypeScript | Type safety |
| AsyncStorage | Local data persistence |
| expo-linear-gradient | Gradient background |
| expo-blur | Glassmorphism effect |
| @expo/vector-icons | Ionicons icon set |
| Animated API | Native animations |

## 📁 Project Structure

```
app/
└── index.tsx              # Main screen
components/
├── TaskInput.tsx          # Input field + add button
├── TaskItem.tsx           # Single task card
└── TaskList.tsx           # Task list (FlatList)
hooks/
└── useTasks.ts            # Business logic + AsyncStorage
constants/
└── theme.ts               # Design tokens (colors, fonts, radius)
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Expo Go app on your phone ([iOS](https://apps.apple.com/app/expo-go/id982107779) / [Android](https://play.google.com/store/apps/details?id=host.exp.exponent))

### Installation

```bash
# Clone the repository
git clone https://github.com/bernard1011/React-Native-ToDo-App.git

# Navigate to project folder
cd React-Native-ToDo-App

# Install dependencies
npm install

# Start the development server
npx expo start
```

Scan the QR code with Expo Go and the app will open on your device.

## 📱 Try it out

![alt text](assets/images/eas-update.svg)


🔗 **[EAS Dashboard](https://expo.dev/accounts/bernard1011/projects/ToDo/updates/e88c5dc4-8dbd-4453-8d07-018b96a54947)**

📱 **Open in Expo Go:** `exp://u.expo.dev/c6632ceb-9e8e-48d2-9c3e-69efb91b5075?channel-name=main`