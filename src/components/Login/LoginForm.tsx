import axios from "axios";
import { useState } from "react";
import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    //MDBIcon,
    MDBRow,
    MDBCol,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
  import { MDBIcon} from 'mdbreact';
import SocialMediaIcons from "./SocialMediaIcons";
import "../../App.css";
import { useGlobalContext } from "../contexts";
import { useNavigate } from "react-router-dom";
import firebase from 'firebase/compat/app';
import { auth } from "../../firebase"

import { iconSize } from "../styles/styles";

const projectID = "dc00873d-eec9-4376-b0cf-6a209cd5f3a3";


export const LoginForm = (props: any) : JSX.Element => {

    const { userName, setUserName } = useGlobalContext();
    const { secret, setSecret } = useGlobalContext();
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const navigateTo = () => {
        navigate("/chats")
    }
    console.log(props);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const authObject = { 'Project-ID': projectID, 'User-Name': userName, 'User-Secret': secret }
        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            localStorage.setItem('username', userName);
            localStorage.setItem('password', secret);
            //window.location.reload(); jer ovaj reloaduje stranu Login i ne radi navigate
            setError('');
            navigateTo();

        } catch {
            setError('Ooops, incorrect credentials');
        }
        
    }

    return (
        <MDBContainer fluid className='my-5' style = {{marginLeft: "-2em"}}>
            <MDBRow className='g-0 align-items-center'>
                <MDBCol col='6'>
                    
                    <MDBCard className='my-5 cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
                        <MDBCardBody className='p-5 shadow-5 text-center'>

                            <h2 className="fw-bold mb-5">Sign in</h2>

                            <MDBInput wrapperClass='mb-4' label='UserName' id='form3' type='username' value= {userName} onChange={(e) => setUserName(e.target.value)} required/>
                            <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' value= {secret} onChange={(e) => setSecret(e.target.value)} required/>

                            <div className='d-flex justify-content-center mb-4'>
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                            </div>

                            <MDBBtn className='w-100 mb-4' size='sm' onClick = {handleSubmit}>sign in</MDBBtn>

                            <div className="text-center">
                                <p>or sign up with:</p>
                                    <SocialMediaIcons/>   
                            </div>

                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol col='6'>
                    <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" className="w-100 rounded-4 shadow-4"
                        alt=""/>
                </MDBCol>
                <MDBCol col='6'>
                    {error}
                </MDBCol>
            </MDBRow>

        </MDBContainer>
    )
}

export default LoginForm;

