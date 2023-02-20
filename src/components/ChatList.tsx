import { useState, useEffect } from "react";
import React from 'react';
//import { getChats, getApiUrl } from "react-chat-engine"
import axios from "axios";
import { getChats } from "./Functions/getApiUrl";

export const ChatList = (props: any): JSX.Element => {
    console.log(props);
    const [value, setValue] = useState("");
    getChats(props);
    
    const handleSubmit = async () => {
        try {
            await getChats(props);
        } catch {
            console.log("error");
            
        }
    }
    
    useEffect (() => {
        setValue("nana");
        handleSubmit();
    });

    return (
        <div>
            {value}
        </div>
       
    )
}