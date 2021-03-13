import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import Main from './Main';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [flag, setFlag] = useState(false);
    const [home, setHome] = useState(true);
    const [mainPage,setMainPage] = useState(false);
    const [login, setLogin] = useState(true);
    const [info, setInfo] = useState(true);

    function handleLogin(e){
        e.preventDefault();
        let pass = localStorage.getItem("password").replace(/"/g,"");
        let mail = localStorage.getItem("email").replace(/"/g,"");
        // .replace(/"/g,"") is used to remove the double quotes for the string
        console.log("password: "+pass);
        console.log("mail: "+mail);
        console.log("email: "+email);
        console.log("epass: "+password);

        if (!email || !password) {
            setFlag(true);
            console.log("EMPTY");
        } else if ((password !== pass) || (email !== mail)) {
            setFlag(true);
        } else {
            setHome(false);
            setFlag(false);
        }
    }

    function signUp(e){
        e.preventDefault();
        if (!email || !password){
            setFlag(true);

        } 
        else {
            setFlag(false);
            localStorage.setItem("email", JSON.stringify(email));
            localStorage.setItem("password", JSON.stringify(password));
            console.log("Saved in Local Storage");
            setLogin(!login);
        }
    }

    return (
        <div>
            {home ? 
                <form>
                    <h3>LogIn/SignUp</h3>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <button type="submit" onClick={signUp} className="btn btn-dark btn-lg btn-block">SignUp</button>
                    <button type="submit" onClick={handleLogin} className="btn btn-dark btn-lg btn-block">Login</button>

                    {flag && <Alert color='primary' variant="warning" >
                        Email/Password is incorrect
                            </Alert>}
                </form>
            
                :<Main/>
            }
        </div>
    )
}

export default Login;
