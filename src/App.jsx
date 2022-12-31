import './App.css';
import { TabPage, TabController } from './TabController/TabController';
import { News } from './News/News';
import { Storage } from './Storage/Storage';
import { Login } from './Login/Login';
import { useAuthUser } from './useAuthUser';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmSYVa_3SGc9m41W33sqsgAt6IA-WRC4w",
  authDomain: "bucketrobotics-70f4c.firebaseapp.com",
  projectId: "bucketrobotics-70f4c",
  storageBucket: "bucketrobotics-70f4c.appspot.com",
  messagingSenderId: "144885792683",
  appId: "1:144885792683:web:73d18aae53ff5cb2031cee",
  measurementId: "G-GHCTQDYT75"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

function App() {
  const uid = useAuthUser(auth);

  function signOutUser() {
    signOut(auth);
  }

  return (
    <div className="App">
      {uid ? (
        <>
          <TabController>
            <TabPage name="News">
              <News db={db} />
            </TabPage>
            <TabPage name="Storage">
              <Storage />
            </TabPage>
          </TabController>
          <button type="button" onClick={signOutUser}>Sign Out</button>
        </>
      ) : (
        <Login auth={auth} />
      )}
    </div>
  );
}

export default App;
