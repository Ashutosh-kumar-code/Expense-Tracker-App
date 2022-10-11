import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

const storedata=()=>{
    localStorage.setItem("Email: ", email)
    localStorage.setItem("Password: ", password)
}

    function handleSubmit(event) {
        event.preventDefault(); 
        console.log("Email: " + email, " , Password: ", password);
        navigate("/home")
    }

    return (
        <>
            <div className="loginform">
                
                <div className="login">
              
                    <form action="" onSubmit={handleSubmit}>
                    <h1>Expense Tracker</h1>
                        <div className='leftform'>

                            <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your email' required/> 
                            <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required/> 
                            <button type='submit' onClick={storedata}>LogIn</button>

                        </div>
                    </form>
                    <div className='rightform'>
                        <div className="loginimg">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
