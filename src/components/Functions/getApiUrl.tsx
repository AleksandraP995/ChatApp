import axios from "axios";

export function getApiUrl(props: any) {
    if (props && props.development) {
      return 'http://127.0.0.1:8000';
    }
  
    return 'https://api.chatengine.io';
  }

export function getChats(props: any, callback?: any) {
    axios.get(getApiUrl(props) + "/chats/", {
      headers: {
        "Public-Key": props.publicKey ? props.publicKey : props.projectID,
        "User-Name": props.userName,
        "User-Secret": props.userPassword ? props.userPassword : props.userSecret
      }
    }).then(function (response) {
      props.onGetChats && props.onGetChats(response.data);
      callback && callback(response.data);
    })["catch"](function (error) {
      console.log('Fetch Chats Error', error);
    });
  }