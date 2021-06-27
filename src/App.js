import React, { useRef, useState } from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyCxdnFf1B3-rXupnBeJVJD-XEL5-dyacQc",
  authDomain: "red-panda-chat.firebaseapp.com",
  databaseURL: "https://red-panda-chat-default-rtdb.firebaseio.com",
  projectId: "red-panda-chat",
  storageBucket: "red-panda-chat.appspot.com",
  messagingSenderId: "7333990285",
  appId: "1:7333990285:web:044f858d73d0cc5a7b37c4",
  measurementId: "G-GE0ZJDW4RC"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();


function App() {
  
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1><a class="zoom" href="https://jonathantrans.github.io/RedPanda/"><img class="second" src="/images/favicon.png" alt="red" /></a></h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
  <div class="shadow">    
    <h6 data-aos="fade-in" data-aos-duration="1700"><img class="ultra" src="/images/favicon.png" alt="red" /> Red Panda Chat</h6>
    <h5 data-aos="fade-in" data-aos-duration="1700" data-aos-delay="800">We are excited to see you here today! <span class="wave">👋</span>
    <br></br></h5>
    <br></br>
    <div data-aos="fade-in" data-aos-duration="1700" data-aos-delay="1800">
      <button class="btn-r" onClick={signInWithGoogle}>⠀
      <svg
              class = "google"
              viewBox="5 -10 30 30"
              enableBackground="new 5 -5 30 30"
              width="22px"
            >
              <path
                fill="#fff"
                d="M15.3-4.2C11.6-3 8.4-.2 6.6 3.2 6 4.5 5.6 5.7 5.3 7c-.7 3.3-.2 6.7 1.3 9.7 1 1.9 2.4 3.7 4.2 5 1.6 1.3 3.5 2.2 5.6 2.7 2.6.7 5.3.7 7.8.1 2.3-.5 4.5-1.6 6.3-3.2 1.9-1.7 3.2-3.9 3.9-6.2.8-2.6.9-5.3.4-8-4.8 0-9.6 0-14.4 0 0 2 0 3.9 0 5.9 2.8 0 5.6 0 8.3 0-.3 1.9-1.5 3.6-3.1 4.6-1 .7-2.2 1.1-3.4 1.3-1.2.2-2.5.2-3.7 0-1.2-.2-2.4-.7-3.4-1.4-1.6-1.1-2.9-2.8-3.5-4.6-.7-1.9-.7-4 0-5.8.5-1.3 1.2-2.5 2.2-3.5 1.2-1.2 2.8-2.1 4.6-2.5 1.5-.3 3-.2 4.5.2 1.2.4 2.4 1 3.3 1.9.9-.9 1.9-1.8 2.8-2.8.5-.5 1-1 1.5-1.5-1.4-1.3-3.1-2.3-4.9-3-3.3-1.2-7-1.2-10.3-.1z"
              ></path>
              <path
                fill="#EA4335"
                d="M15.3-4.2c3.3-1.1 7-1.1 10.3.1 1.8.7 3.5 1.7 4.9 3-.5.5-1 1-1.5 1.5-.9.9-1.9 1.8-2.8 2.8-.9-.9-2.1-1.5-3.3-1.9-1.4-.4-3-.5-4.5-.2-1.7.4-3.3 1.2-4.6 2.5-1 1-1.8 2.2-2.2 3.5-1.7-1.3-3.3-2.5-5-3.8 1.8-3.5 5-6.2 8.7-7.5z"
              ></path>
              <path
                fill="#FBBC05"
                d="M5.3 7c.3-1.3.7-2.6 1.3-3.7 1.7 1.3 3.3 2.5 5 3.8-.7 1.9-.7 4 0 5.8-1.7 1.3-3.3 2.5-5 3.8-1.5-2.9-2-6.4-1.3-9.7z"
              ></path>
              <path
                fill="#4285F4"
                d="M20.3 7.2c4.8 0 9.6 0 14.4 0 .5 2.6.4 5.4-.4 8-.7 2.4-2 4.6-3.9 6.2-1.6-1.2-3.2-2.5-4.9-3.7 1.6-1.1 2.7-2.8 3.1-4.6-2.8 0-5.6 0-8.3 0 0-2 0-4 0-5.9z"
              ></path>
              <path
                fill="#34A853"
                d="M6.6 16.7c1.7-1.3 3.3-2.5 5-3.8.6 1.8 1.9 3.5 3.5 4.6 1 .7 2.2 1.2 3.4 1.4 1.2.2 2.4.2 3.7 0 1.2-.2 2.4-.6 3.4-1.3 1.6 1.2 3.2 2.5 4.9 3.7-1.8 1.6-3.9 2.7-6.3 3.2-2.6.6-5.3.6-7.8-.1-2-.5-3.9-1.5-5.6-2.7-1.7-1.3-3.2-3-4.2-5z"
              ></path>
            </svg>
            ⠀Sign in with Google</button>
      </div>
</div>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button class="btn-exit" onClick={() => auth.signOut()}>Sign Out⠀<i class="fas fa-moon"></i></button>
  )
}


function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(100);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>
      <br></br><br></br><div data-aos="fade-up" data-aos-duration="1700" data-aos-delay="400"><h4>Welcome to</h4></div>
      <div><h4 data-aos="fade-up" data-aos-duration="1700" data-aos-delay="400">Red Panda Chat</h4></div>
      <div><h5 data-aos="fade-up" data-aos-duration="1700" data-aos-delay="400">This is the beginning of this chat.</h5></div>
      <br></br><br></br><div data-aos="fade-up" data-aos-duration="1700" data-aos-delay="400" id="divId"></div>
      <br></br>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Say Hello!" />
      {/* <div class="center">
<div class="container">
    <div class="emoji">
        <span>🙂</span>
        <div id="emoji-picker">
            <div class="emoji-arrow"></div>
        </div>
    </div>
</div>
</div> */}

      <button type="submit" disabled={!formValue}><img src="https://img.icons8.com/color/48/000000/bamboo.png"/></button>

    </form>
  </>)
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img data-aos="zoom-in" data-aos-duration="800" src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p data-aos="zoom-in" data-aos-duration="800" >{text}</p>
    </div>
  </>)
}


export default App;
