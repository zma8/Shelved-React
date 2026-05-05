import { useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../contexts/UserContext";
import { signOut } from "../services/authService";

const Navbar=()=>{
    const {user,setUser}=useContext(UserContext)
    const navigate=useNavigate()

    const handleSignOut=()=>{
        signOut()
        setUser(null)
        navigate('/sign-in')
    }

    return(
        <nav className="navbar">
            <h1 className="navbar-title">Shelved</h1>
            {user&&(
                <button className="navbar-signout" onClick={handleSignOut}>
                    Sign out
                </button>
            )}
        </nav>
    )
}

export default Navbar