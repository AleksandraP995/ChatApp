
import React from 'react';
import { avatarStyle } from '../styles/styles';

export const TheirMessage = ({ message, lastMessage } : any) : JSX.Element => {
    
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
    const timeSent = message.created.substr(11, 16);
    const time = timeSent.substring(0,5);
    
    return (
        <div className="message-row">
            {isFirstMessageByUser && (
                <div
                className="message-avatar"
                style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}
                />
            )}

            {message.attachments && message.attachments.length > 0  ?
            (
                <img
                    src = {message.attachments[0].file}
                    alt="message-attachment"
                    className="message-image"
                    style={{ float: 'right' }}
                />
            ) : 
        
            (<div className="d-flex flex-row justify-content-start">
                <img
                src= {message.sender.avatar}
                alt="avatar 1"
                style={avatarStyle}
                />
                <div>
                    <p
                    className="small p-2 me-3 mb-1 rounded-3"
                    style={{ backgroundColor: "#f5f6f7", color: "black"}}
                    >
                    {message.text}
                    </p>
                    <p className="small ms-3 mb-3 rounded-3 text-muted">
                    {time}
                    </p>
                </div>
            </div>)}
      </div>  
    )
}

export default TheirMessage;