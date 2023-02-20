import firebase from "firebase/compat";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit"
import React from "react";
import { TiSocialFacebook, TiSocialGooglePlus, TiSocialSkype,TiSocialGithub, TiSocialTwitter } from "react-icons/ti";
import { auth } from "../../firebase";
import { iconSize } from "../styles/styles";
export const SocialMediaIcons = () => {
    return (
        <div>
            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                <TiSocialGooglePlus size= {iconSize} onClick = {() => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())}/>

            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                <TiSocialTwitter size= {iconSize} onClick = {() => auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())}/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                <TiSocialFacebook size= {iconSize}  onClick = {() => auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())}/>  
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                <TiSocialGithub size= {iconSize}  onClick = {() => auth.signInWithPopup(new firebase.auth.GithubAuthProvider())}/>
            </MDBBtn>
        </div>
    )
}

export default SocialMediaIcons;