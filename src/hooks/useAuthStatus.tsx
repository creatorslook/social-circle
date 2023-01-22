import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";

const useAuthStatus = () => {
    const [authStatus, setAuthStatus] = useState(false)
    const user = auth.currentUser

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
               setAuthStatus(true) 
            }
            else {
                setAuthStatus(false)
            }
        })
    }, [user])

    return authStatus;
};

export default useAuthStatus;