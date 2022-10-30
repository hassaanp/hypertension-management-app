import '../styles/globals.css'

import { doc, getFirestore } from 'firebase/firestore';
import { FirebaseAppProvider, FirestoreProvider, useFirestoreDocData, useFirestore, useFirebaseApp } from 'reactfire';

const firebaseConfig = {
  /* Add in your config object from the Firebase console */
};

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
