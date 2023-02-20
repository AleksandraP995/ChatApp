import ChatMessage from "./Messages/ChatMessage";
import MyMessage from "./Messages/MyMessage";
import TheirMessage from "./Messages/TheirMessage";
import React from 'react';
import { useGlobalContext } from "./contexts";

const ChatFeedTwo = (props: any): JSX.Element=> {

    console.log(props);
    console.log(localStorage.getItem('username'));


    const { chats, activeChat, userName, messages } = props;
    const chat = chats !== null ? chats[activeChat] : "title";
    const peopleUserNames: [] = chat.people !== undefined ? chat.people.map((person: any) => person.person.username) : [];

    const { userAvatar, setUserAvatar, chatId, setChatId} = useGlobalContext();
    setChatId(activeChat);

    const matchedUser = chat.people !== undefined ? chat.people.filter((pers:any) => {
        // console.log(props.userName);
        // console.log(pers.person.username);
        pers.person.username == props.userName;
    }) : "not found";
    console.log(matchedUser);
   
    setUserAvatar(chat.admin.avatar)
    console.log(userAvatar!);
    
    const renderReadReceipts = (message: { id: any; }, isMyMessage: boolean) => chat.people.map((person: { last_read: any; person: { avatar: any; }; }, index: any) => person.last_read === message.id && (
      <div
        key={`read_${index}`}
        className="read-receipt"
        style={{
          float: isMyMessage ? 'right' : 'left',
          backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
        }}
      />
    ));
  
    const renderMessages = () => {
      const keys = Object.keys(messages);
      return keys.map((key, index) => {
        const message = messages[key];
        const lastMessageKey = index === 0 ? null : keys[index - 1];
        const isMyMessage = userName === message.sender.username;
  
        return (
          <div key={`msg_${index}`} style={{ width: '100%' }}>
            <div className="message-block">
              {isMyMessage
                ? <MyMessage message={message} />
                : <TheirMessage message={message} lastMessage={messages[lastMessageKey!]} />}
            </div>
            <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
              {renderReadReceipts(message, isMyMessage)}
            </div>
          </div>
        );
      });
    };
  
    if (!chat) return <div />;
  
    return (
      <div className="chat-feed">
            <div className="chat-title-container">
              <div className="chat-title">{chat.title}</div>
              <div className="chat-subtitle">
                      {peopleUserNames.map((name: string) => `${name}`)}
              </div>
            </div>
            {renderMessages()}
            <div style={{ height: '100px' }} />
            <div className="message-form-container">
              <ChatMessage {...props} chatId={activeChat} userAvatar = {userAvatar}/>
            </div>
      </div>
    );
  };
  
  export default ChatFeedTwo;