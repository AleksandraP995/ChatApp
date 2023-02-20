import React, { ChangeEvent, useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardFooter,
  MDBIcon,
} from "mdb-react-ui-kit";
import "../../App.css";
import { sendMessage, isTyping } from "react-chat-engine";
import { avatarStyle, iconMediumSize, iconSize, iconSmallerSize } from "../styles/styles";
import Picker from 'emoji-picker-react';
import { InputEmoji } from "react-input-emoji";
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { useGlobalContext } from "../contexts";
import { TiSocialFacebook, TiSocialGooglePlus, TiSocialSkype,TiSocialGithub, TiSocialTwitter } from "react-icons/ti";
import { MdOutlineInsertEmoticon} from "react-icons/md";
import { RiSendPlaneFill} from "react-icons/ri";
import { ImAttachment } from "react-icons/im";
import "../Chats/chats.css";

export type ChatMessageProp = {
    chatId : string,
    userAvatar: any
}

export const ChatMessage = (props: any): JSX.Element => { //props: ChatMessageProp

    console.log(props);
    
    const { activeChat, userName, chats } = props;

    const userAvatar = chats !== null ? chats[activeChat].admin!.avatar : "";
    
    const [ value, setValue ] = useState("");
    const [chosenEmoji, setChosenEmoji] = useState<any[]>([]);
    const [showPicker, setShowPicker] = useState(false);

    const propsTwo = {activeChat, chats};

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(value);
        const text = value.trim();
        if(text.length > 0) {
            sendMessage(propsTwo, activeChat, {text}) //text se stavlja u objekat
            console.log("success");  
        }
        setValue("");
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
        isTyping(propsTwo, activeChat);
    }

    const handleUpload = (e: any) => {
        sendMessage(propsTwo, activeChat, {files : e.currentTarget.files, text: ""})
        console.log(e.currentTarget.files);   
    }

    const togglePicker = () => {
        setShowPicker(!showPicker);
    }

    const onEmojiClick = ( e : any) => {
        setChosenEmoji([...chosenEmoji, e.emoji]);
        setValue(value => value + e.emoji);
        setShowPicker(false)
    };

    const handleClickAway = () => {
        setShowPicker(false);
    };


    return (
        <MDBContainer className="container-dialog">
        <MDBRow className="container-row">
            <MDBCol className="container-col">
            <div  className = "picker">
                {showPicker && <Picker  onEmojiClick = {onEmojiClick}/>} 
            </div> 
                <MDBCard className="container-card"> 
                    <MDBCardFooter className="text-muted d-flex justify-content-start align-items-center p-3 container-footer">
                    <img
                        src= {userAvatar}
                        alt="avatar 3"
                        style={avatarStyle}
                    />

                    <input
                        type="text"
                        className="form-control form-control-lg"
                        value = {value}
                        id="exampleFormControlInput1"
                        placeholder="Type message"
                        onSubmit={handleSubmit}
                        onChange = {handleChange}
                    />

                    <label htmlFor="upload-button">
                        <span className="image-button">
                        <ImAttachment size= {iconSmallerSize}/>
                        </span>
                    </label>
                    <input
                        type="file"
                        multiple={false}
                        id="upload-button"
                        style={{ display: 'none' }}
                        onChange={handleUpload}
                    />

                    <ClickAwayListener  onClickAway={handleClickAway}>
                        <a className="ms-3 text-muted" href="#!">
                            <MdOutlineInsertEmoticon size= {iconMediumSize} onClick = {togglePicker}/>  
                        </a>
                    </ClickAwayListener>

                    <a className="ms-3" href="#!" >
                        <RiSendPlaneFill size= {iconMediumSize} className = "iconColor" onClick={handleSubmit}/>
                    </a>
                    </MDBCardFooter>
                </MDBCard>
                
            </MDBCol>
        </MDBRow>
    </MDBContainer> 
    )
}

export default ChatMessage;

