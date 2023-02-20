import React, { useState } from 'react';
import { ChatEngine } from 'react-chat-engine';
import "./App.css";
import ChatFeedTwo from './components/ChatFeedTwo';
import { ChatList } from './components/ChatList';
import LoginForm from './components/Login/LoginForm';
import { PrettyChatWindow } from 'react-chat-engine-pretty';
import { MyGlobalContext } from './components/contexts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "../src/components/Chats/chats.css";
import "../src/components/Chats/index.css";
import Chats from './components/Chats/Chats';
import ChatMessage from './components/Messages/ChatMessage';


function App() {

  const [userName, setUserName] = useState("");
  const [secret, setSecret] = useState("");
  const [chatId, setChatId] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  
  //localStorage.removeItem('username'); 
  //ako je username empty u localstroage idi na loginForm

  return (
  <Router>
    <MyGlobalContext.Provider
      value= {{ 
        userName, setUserName, 
        secret, setSecret, 
        chatId, setChatId,
        userAvatar, setUserAvatar,
        //isLoading, setIsLoading
      }}>
            <div className="App">
                <Routes>
                    <Route path = "" element = {<LoginForm/>}></Route>
                    <Route path = "/chats" element = {<Chats/>}></Route>
                </Routes>
                {/* <ChatMessage/> */}
            </div>

    </MyGlobalContext.Provider>
  </Router>
  )

















  // if (localStorage.getItem('username') == null ) return <LoginForm/>;
  // console.log(localStorage.getItem('username'));

  // //localStorage.removeItem('username'); 
  // //ako je username empty u localstroage idi na loginForm

  // return (

  //   <ChatEngine
  //     height = {"100vh"}
  //     publicKey={'dc00873d-eec9-4376-b0cf-6a209cd5f3a3'}
  //     userName={'Aleksandra'}
  //     userSecret={'qwerty'}
  //     renderChatFeed = {(chatAppProps: any) => <ChatFeedTwo {...chatAppProps}/>}
  //     onNewMessage = { () => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play() }
  //     renderChatList={(chatAppState: any) => <ChatList {...chatAppState} />}
  //   />


    // <PrettyChatWindow
    //   projectId="dc00873d-eec9-4376-b0cf-6a209cd5f3a3"
    //   username="Aleksandra"
    //   secret="qwerty"
    //   style={{ height: '50vh' }}
    //   renderChatFeed = {(chatAppProps: any) => <ChatFeedTwo {...chatAppProps}/>}
    //   //onNewMessage = { () => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play() }
    // />
  //);
}

export default App;
