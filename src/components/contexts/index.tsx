import { createContext, useContext } from "react";

export type GlobalContent = {
    userName: string,
    setUserName: (c: string) => void,
    secret: string
    setSecret:(c: string) => void,
    chatId: string,
    setChatId:(c: string) => void,
    userAvatar: string,
    setUserAvatar: (c: string) => void,
    //isLoading: boolean,
    //setIsLoading: (c: boolean) => void
}
export const MyGlobalContext = createContext<GlobalContent>({
    userName: "",
    setUserName : () => {},
    secret: "",
    setSecret: () => {},
    chatId : "",
    setChatId: () => {},
    userAvatar: "",
    setUserAvatar: () => {},
    //isLoading: true,
    //setIsLoading: () => {}
})

export const useGlobalContext = () => useContext(MyGlobalContext);

