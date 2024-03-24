import { useContext, useState } from "react"
import "./login.scss"
import { signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../../firebase"
import {useNavigate} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext.jsx"
function Login(){
    const navigate = useNavigate("");
    const {dispatch} = useContext(AuthContext)

    function handleLogin(e){
            e.preventDefault()
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                dispatch({type:"LOGIN",payload:user})
                navigate("/")
                // ...
            })
            .catch((error) => {
                setError(true)
                // ..
            });

    }

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState(false)
 return(
    <>
        <div className="login">
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <input type="password" name="" id="" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button type="submit">Login</button>
                {
                    error && ( <span>Wrong Email or password</span>)
                }
                
                
               
            </form>

        </div>
    </>
 )
}

export default Login

