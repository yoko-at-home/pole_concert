import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  push,
  query,
  limitToLast,
  onValue,
  orderByKey,
} from "firebase/database";

const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_DATABASE_URL,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID,
} = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: REACT_APP_FIREBASE_DATABASE_URL,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export const messagesRef = ref(database, "messages");

export const pushMessage = ({ name, text }) => {
  try {
    console.log("Pushing message to Firebase:", { name, text });
    const newMessageRef = push(messagesRef, { name, text });
    console.log("Message pushed successfully with key:", newMessageRef.key);
  } catch (error) {
    console.error("Error pushing message to Firebase:", error);
  }
};

export const getMessages = (callback) => {
  const messagesQuery = query(messagesRef, orderByKey(), limitToLast(3000));
  return onValue(messagesQuery, (snapshot) => {
    const messages = snapshot.val();
    if (messages === null) return;

    const entries = Object.entries(messages);
    const newMessages = entries.map((entry) => {
      const [key, nameAndText] = entry;
      return { key, ...nameAndText };
    });
    callback(newMessages);
  });
};
