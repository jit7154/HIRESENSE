//loading jab tk api call nhi hota and backened se data nhi ata tab tk load karaoo

import { createContext,useState,useEffect } from "react";
import { getMe } from "./services/auth.api";


export const AuthContext = createContext()


export const AuthProvider = ({ children }) => { 

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
    const getAndSetUser = async () => {
        console.log("1. useEffect Triggered!"); // Check if this prints
        try {
            setLoading(true);
            console.log("2. Calling getMe API..."); // Check if this prints
            
            const data = await getMe();
            
            console.log("3. API Response Received:", data);
            if (data && data.user) {
                setUser(data.user);
            }
        } catch (error) {
            console.error("4. API Call Crashed:", error);
        } finally {
            setLoading(false);
            console.log("5. Loading set to false.");
        }
    };

    getAndSetUser();
}, []);


  

    


    return (
        <AuthContext.Provider value={{user,setUser,loading,setLoading}} >
            {children}
        </AuthContext.Provider>
    )

    
}