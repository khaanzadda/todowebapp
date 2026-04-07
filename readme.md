# 🚀 TodoWebApp

### *The professional task manager for speed and simplicity.*

**TodoWebApp** is a full-stack productivity tool that allows users to manage their daily tasks with real-time cloud synchronization. Built with **React** and **Firebase**, it offers a seamless experience from authentication to complex task management.

-----

## 🖼️ App Previews

| **Landing Page** | **User Dashboard** |
| :--- | :--- |
|  |  |

-----

## ✨ Features

  * **🔐 Secure Authentication:** Full flow with **Sign Up, Login, and Logout** functionality using Firebase Auth.
  * **💾 Real-time Cloud Firestore:** Instant data synchronization across all devices and sessions.
  * **📝 CRUD Functionality:** \* **Create:** Add tasks with titles and descriptions.
      * **Edit:** Full update support to modify task details, priorities, and dates on the fly.
      * **Delete:** Remove tasks instantly from the dashboard.
  * **🚦 Priority & Deadlines:** Categorize tasks by **Low, Medium, or High** priority and track specific due dates.
  * **🛡️ Secure Configuration:** Implemented Vite environment variables for backend security and a custom validation check to ensure config integrity.

-----

## 🛠️ Tech Stack

  * **Frontend:** React.js (Vite)
  * **Backend:** Firebase (v10+)
  * **Database:** Cloud Firestore
  * **Authentication:** Firebase Auth
  * **Styling:** Custom CSS / Modern UI

-----

## 🚀 Installation & Setup

1.  **Clone the repository**

    ```bash
    git clone https://github.com/khanzada-khan/TodoWebApp.git
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Environment Variables**
    Create a `.env` file in the root and add your Firebase credentials:

    ```env
    VITE_FIREBASE_API_KEY=your_key
    VITE_FIREBASE_AUTH_DOMAIN=your_domain
    VITE_FIREBASE_PROJECT_ID=your_id
    VITE_FIREBASE_STORAGE_BUCKET=your_bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
    VITE_FIREBASE_APP_ID=your_app_id
    ```

4.  **Run the app**

    ```bash
    npm run dev
    ```

-----

## 👨‍💻 Developed by

**Khanzada Khan** *Building scalable web solutions with modern tech stacks.*