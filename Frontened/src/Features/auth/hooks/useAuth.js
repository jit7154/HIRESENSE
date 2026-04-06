import { useContext, useEffect } from "react";
import { AuthContext } from "../auth.context";
import { login,register,logout,getMe } from "../services/auth.api";

//ye hook layer hi iska use hota hai state and api alayer ko manage kraanaa
export const useAuth=()=>{
    const context =useContext(AuthContext)

    const{user,setUser,loading,setLoading}=context


    //flow aisa hai ki like hum sabse pehle load screen dikahengee
    //api call hoga for login
    //then uska jo response aya uskoo store karnegeeee
    //data ko user set karengee
    //then loading kio false karnege

    const handleLogin =async ({username,password})=>{
        setLoading(true)
       try {
        const data =await login({username,password})
        setUser(data.user)
        localStorage.setItem("username", data.user.username) // ✅ save username
        return true;
       }

        catch(err){
            console.log(err)
            return false;

        }finally{
        setLoading(false)}
    }

    const handleRegister =async ({username,email,password})=>{
        setLoading(true)
        try{
        const data =await register({username,email,password})
        setUser(data.user)
         localStorage.setItem("username", data.user.username)
        return true}
         
        catch(err){
            console.log(err)

        }finally{
        setLoading(false)}
    }
    const handleLogout =async ()=>{
       try {setLoading(true)
        const data =await logout()
        setUser(null)
        localStorage.removeItem("username")
        } // ✅ clear on logout
        catch(err){
            console.log(err)

        }
        finally{
        setLoading(false)}
    }
    
    
    useEffect(() => {

        const getAndSetUser = async () => {
            try {

                const data = await getMe()
                setUser(data.user)
            } catch (err) { } finally {
                setLoading(false)
            }
        }

        getAndSetUser()

    }, [])


    

    return {user,loading,handleLogin,handleRegister,handleLogout}
}
