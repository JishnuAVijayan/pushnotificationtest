import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { getToken, onMessageListener } from './firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Row, Col, Toast} from 'react-bootstrap';



function App() {
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({title: '', body: ''});
  const [isTokenFound, setTokenFound] = useState(false);
  console.log(setTokenFound, "123");
  getToken(setTokenFound);

  onMessageListener().then(payload => {
    setShow(true);
    setNotification({title: payload.notification.title, body:payload.notification.body})
    console.log(payload);
    console.log("Message received. ", JSON.stringify(payload));
    console.log(payload.notification.body)
  }).catch(err => console.log('failed: ', err));

  return (
    <div className="App">
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide animation style={{
          position: 'absolute',
          top: 20,
          right: 20,
          minWidth: 200
        }}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">{notification.title}</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body>{notification.body}</Toast.Body>
        </Toast>

        {isTokenFound && <h1> Notification permission enabled 👍🏻 </h1>}
        {!isTokenFound && <h1> Need notification permission ❗️ </h1>}
        <Button className="App-button" onClick={() => setShow(true)}>Show Toast</Button>
    </div>
  );
}

export default App;
