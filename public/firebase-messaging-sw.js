// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

if('serviceWorker' in navigator) { 
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
  .then(function(registration) {
   console.log("Service Worker Registered");
  messaging.useServiceWorker(registration);  
    }); 
    }


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

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notification = JSON.parse(payload.data.notification);

  const notificationTitle = notification.title;
  const notificationOptions = {
    body: notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});