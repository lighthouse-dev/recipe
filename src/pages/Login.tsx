import firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import { useEffect } from 'react';
import ENV from '../env.json';

const firebaseConfig = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DB_URL,
  projectId: ENV.FIREBASE_PROJECT_ID,
  storageBucket: ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_MESSAGING_SENDER_ID,
  appId: ENV.FIREBASE_APPID,
  measurementId: ENV.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult: any, redirectUrl: any) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      console.log(authResult);
      console.log(redirectUrl);

      debugger;
      return true;
    },
    uiShown: function () {
      // The widget is rendered.
      // Hide the loader.
      // debugger;
      // document?.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: '/list',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  // tosUrl and privacyPolicyUrl accept either url string or a callback
  // function.
  // Terms of service url/callback.
  tosUrl: '<your-tos-url>',
  // Privacy policy url/callback.
  privacyPolicyUrl: function () {
    window.location.assign('<your-privacy-policy-url>');
  }
};

const Login = () => {
  useEffect(() => {
    new firebaseui.auth.AuthUI(firebase.auth());
    start('#firebaseui-auth-container', uiConfig);
  }, []);

  return (
    <>
      <div id="firebaseui-auth-container" />
    </>
  );
};

export default Login;