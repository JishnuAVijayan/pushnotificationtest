import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBVPNvxhM7SxmY_TH6J5V5J8P38eBZ04bU",
    authDomain: "fir-cloud-notification-ed8a7.firebaseapp.com",
    projectId: "fir-cloud-notification-ed8a7",
    storageBucket: "fir-cloud-notification-ed8a7.appspot.com",
    messagingSenderId: "113157422836",
    appId: "1:113157422836:web:f77ebee014e6ed670228a1"
  };
  firebase.initializeApp(firebaseConfig);

 const messaging = firebase.messaging();

 export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
});

 export const getToken = (setTokenFound) => {
    return messaging.getToken({vapidKey: 'BKUPtyJmYUUTX0NEMn3qoDAOywBfQr86AesWMLsCzDdxlYzM2ppQdn20XlkN8a7asZUgV25lo2-O7UCFJJCZDMc'}).then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log('No registration token available. Request permission to generate one.');
        setTokenFound(false);
        // shows on the UI that permission is required 
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });
  }

