import "../styles/globals.css";

import { doc, getFirestore } from "firebase/firestore";
import {
  FirebaseAppProvider,
  FirestoreProvider,
  useFirestoreDocData,
  useFirestore,
  useFirebaseApp,
} from "reactfire";

const firebaseConfig = {
  apiKey: "AIzaSyAUSC_-gT3-1iPdgYjgNIizFJzX6lGaQog",
  authDomain: "hypertension-management.firebaseapp.com",
  projectId: "hypertension-management",
  storageBucket: "hypertension-management.appspot.com",
  messagingSenderId: "945134787891",
  appId: "1:945134787891:web:8e274ea02ff96e27317246",
};

function MyApp({ Component, pageProps }) {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Component {...pageProps} />
    </FirebaseAppProvider>
  );
}

export default MyApp;
