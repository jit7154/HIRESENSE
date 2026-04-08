import React ,{useState}from 'react'
import "./auth.form.scss"
import { useNavigate, Link } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'

const Login=()=>{

    const navigate  = useNavigate()
    const { loading, handleLogin } = useAuth()
    

    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const [error, setError] = useState("")

     const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        
        
        const success = await handleLogin({ username, password })
        console.log("2. Did handleLogin succeed?:", success);
       
        if(success){
        navigate('/dashboard')

        
       }
       else{
        console.log("X. Success is false. Check the Network tab!");
        setError("Invalid username or password. Please try again.");
       }
    }
    // if(loading){
    //     return (<main><h1>Loading.......</h1></main>)
    // }

    console.log("DATA:", username, password)

    return(
        //saare components ya jo bhi hai sab main ke andr hi ate hanin
        <main>
            <div className="form-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor='username'></label>
                        <input
                        onChange={(e)=>{setUsername(e.target.value)}}
                         type='text' id="username" name ="username" placeholder='Enter username'/>
                    </div>
                    <div className="input-group">
                        <label htmlFor='password'></label>
                        <input 
                        onChange={(e)=>{setPassword(e.target.value)}}
                        type='password' id="password" name ="password" placeholder='Enter password'/>
                    </div>

                    {error && <p style={{color:"red"}}>{error}</p>}
                    <button type='submit' className='button primary-button' disabled={loading}>Login</button>
                </form>
                 <p>Do Not have an account ?<Link to="/register">Register</Link></p>
            </div>
            

        </main>
    )

    

}

export default Login