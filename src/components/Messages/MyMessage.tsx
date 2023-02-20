import React from 'react';
import { avatarStyle } from '../styles/styles';

export const MyMessage = ({message}  : any) => {
    console.log(message);
    const timeSent = message.created.substr(11, 16);
    const time = timeSent.substring(0,5);
    
    if (message.attachments && message.attachments.length > 0 ) {
        return (
            <img
                src = {message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{ float: 'right' }}
            />
        )
    }
    return (
        
        <div className="d-flex flex-row justify-content-end mb-4 pt-1">
            <div>
                <p className="small p-2 me-3 mb-1 text-white rounded-3" style = {{backgroundColor: "#8f90bf"}}>
                    {message.text}
                </p>
                <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
                    {time}
                </p>
            </div>
            <img 
                src={message.sender.avatar}
                alt="avatar 1"
                style={avatarStyle}
            />
        </div>
 
       
        
    )
}

export default MyMessage;