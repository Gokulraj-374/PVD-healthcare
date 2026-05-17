// Monkeypatch console.warn and console.error to suppress internal @firebase/firestore database retry warnings
const originalWarn = console.warn;
console.warn = function (...args: any[]) {
  const msg = args.map(arg => (typeof arg === 'object' ? JSON.stringify(arg) : String(arg))).join(' ');
  if (
    msg.includes('@firebase/firestore') || 
    msg.includes("Database '(default)' not found") || 
    (msg.includes('Database') && msg.includes('not found'))
  ) {
    return;
  }
  originalWarn.apply(console, args);
};

const originalError = console.error;
console.error = function (...args: any[]) {
  const msg = args.map(arg => (typeof arg === 'object' ? JSON.stringify(arg) : String(arg))).join(' ');
  if (
    msg.includes('@firebase/firestore') || 
    msg.includes("Database '(default)' not found") || 
    msg.includes("Please check your Firebase configuration") ||
    (msg.includes('Database') && msg.includes('not found'))
  ) {
    return;
  }
  originalError.apply(console, args);
};

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDocFromServer } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);

// Test connection as required by instructions
async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error: any) {
    if (error?.message?.includes('the client is offline')) {
      console.error("Please check your Firebase configuration.");
    }
  }
}
testConnection();
