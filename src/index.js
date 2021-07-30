import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd,
} from "@react-firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyCWcIiFy411Erksyc1_bwpkZlmXS3g9ke4",
  authDomain: "wri-py.firebaseapp.com",
  databaseURL: "https://wri-py-default-rtdb.firebaseio.com",
  projectId: "wri-py",
  storageBucket: "wri-py.appspot.com",
  messagingSenderId: "763971699145",
  appId: "1:763971699145:web:f5350a0a3a2f24971aa818",
};

ReactDOM.render(
  <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
    <FirebaseAuthConsumer>
      {({ isSignedIn, user, providerId }) => {
        return (
          <React.StrictMode>
            <App user={user} />
          </React.StrictMode>
        );
      }}
    </FirebaseAuthConsumer>
  </FirebaseAuthProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
