# My Meetups

A React application that allows users to add meetups by submitting data to Firebase, view all meetups, toggle between all meetups and favorite meetups, and add new meetups. The meetups are displayed on the "All Meetups" page with an option to add a particular meetup to favorites.

## Features

- Add new meetups with user-provided data.
- Store meetups data in Firebase.
- Retrieve and display meetups from Firebase.
- Toggle between "All Meetups", "Favorite Meetups", and "Add New Meetup" pages.
- Add meetups to favorites.

## Getting Started

Follow the instructions below to clone and run the project on your local machine.

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or later)
- npm (Node Package Manager) - comes with Node.js
- A Firebase project with Realtime Database configured

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/aditya-narayan-sahoo/demo-application.git
   cd demo-application
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Firebase**

   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Enable Realtime Database in Firebase.
   - Get your Firebase configuration details (API key, Auth domain, Database URL, etc.).
   - Create a `.env` file in the root of the project and add your Firebase configuration:

     ```
     REACT_APP_FIREBASE_API_KEY=your_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
     REACT_APP_FIREBASE_DATABASE_URL=your_database_url
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     REACT_APP_FIREBASE_APP_ID=your_app_id
     ```

### Running the Application

1. **Start the Development Server**

   ```bash
   npm run dev
   ```

   This command will start the application in development mode. Open [http://localhost:3000](http://localhost:5173) to view it in your browser.

### Project Structure

```
react-meetups/
│
├── public/                   # Public directory
│   ├── index.html            # Main HTML file
│   └── ...
│
├── src/                      # Source directory
│   ├── components/           # Components directory
│   │   ├── layout/           # Layout components (Layout, MainNavigation)
│   │   ├── meetups/          # Meetups components (MeetupList, MeetupItem)
│   │   └── ui/               # UI components (Card, Button)
│   │
│   ├── pages/                # Pages directory (AllMeetups, NewMeetup, Favourites)
│   ├── App.jsx               # Main App component
│   ├── index.jsx             # Entry point
│   └── ...
│
├── .env                      # Environment variables
├── package.json              # Project configuration and dependencies
└── README.md                 # Readme file
```

### Firebase Configuration

Ensure your Firebase database rules are set to allow read and write operations if not using Firebase Authentication for this project:

```json
{
  "rules": {
    ".read": "true",
    ".write": "true"
  }
}
```

### Usage

- **Adding a Meetup:** Go to the "Add New Meetup" page, fill in the form, and submit to add a new meetup to Firebase.
- **Viewing All Meetups:** The "All Meetups" page will display all meetups retrieved from Firebase.
- **Favorite Meetups:** Click the "Add to Favorites" button on any meetup to add it to your favorites. Toggle to the "Favorite Meetups" page to view your favorite meetups.

### Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [React Router](https://reactrouter.com/) - For routing between different pages
- [Firebase](https://firebase.google.com/) - For backend services and database

### Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

### Acknowledgments

- Special thanks to the React and Firebase communities for their excellent documentation and support.

---

Feel free to customize the content, links, and details based on your specific project needs and repository setup!
