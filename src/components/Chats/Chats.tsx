import React, { useEffect, useState } from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatMessage from '../Messages/ChatMessage';
import "./chats.css";

export const Chats = () => {

    const [showChat, setShowChat] = useState(false);

    useEffect(() => {
        if(typeof document == null) {
            setShowChat(true)
        }
    })

    return (
        <div className="background">
            <div className="shadow">
                <ChatEngine
                    height = {"100vh"}
                    publicKey={process.env.REACT_APP_PUBLIC_KEY}
                    userName={process.env.REACT_APP_USERNAME}
                    userSecret={process.env.REACT_APP_USER_SECRET}
                    onNewMessage = { () => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play() }
                    renderNewMessageForm= { (chatAppProps: any) => <ChatMessage {...chatAppProps} />}
                />
            </div>
        </div>
    )
};

export default Chats;



// const navigate = useNavigate();

// const navigateTo = () => {
//     navigate("/")
// }

// const handleLogout = async () => {
//     await auth.signOut();
//     navigateTo()
// }