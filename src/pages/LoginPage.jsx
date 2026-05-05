import { useState,useContext } from "react";
import { useNavigate,Link } from "react-router-dom";
import { signIn } from "../services/authService";
import { UserContext } from "../contexts/UserContext";

const LoginPage=()=>{
    const {setUser}=useContext(UserContext)
    const navigate=useNavigate()
    const [formData,setFormData]=useState({email: '',password: ''})
    const[error,setError]=useState('')

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit=async (e)=>{
        e.preventDefault()
        setError('')
        try{
            const user=await signIn(formData)
            setUser(user)
            navigate('/')
        }catch(err){
            setError(err.message)
        }
    }

    return(
        <div className="auth-container">
            <h1 className="auth-title">Shelved</h1>
            <p className="auth-subtitle">Welcome back , books are waiting</p>
            <form className="auth-form" onSubmit={handleSubmit}>
                <input
                    className="auth-input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                <input 
                     className="auth-input"
                     type="password"
                     name="password"
                     placeholder="Password"
                     value={formData.password}
                     onChange={handleChange}
                     required
                 />
                {error&&<p className="auth-error">{error}</p>}
                <button className="auth-button" type="submit">Sign in</button>
            </form>
            <p className="auth-link">No account yet?<Link to='/sign-up'>Sign up</Link></p>
        </div>
    )
}

export default LoginPage