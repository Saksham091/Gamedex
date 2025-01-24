import './login.css';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa'

function Login() {
    const toggleMode = (mode) => {
        document.querySelector(".container_login").classList.toggle("sign-up-mode", mode === "signup");
    };

    return (
        <div className="container_login">
            <div className="forms-container">
                <div className="signin-signup">
                    <form className="sign-in-form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i> <FaUser /> </i>
                            <input type="text" name="userName" placeholder="Username" />
                        </div>
                        <div className="input-field">
                            <i> <FaLock /> </i>
                            <input type="password" name="password" placeholder="Password" />
                        </div>
                        <div className="button">
                            <div className="outer">
                                <div className="btn transparent">
                                    <button type="submit" value="Login" className="btn-form solid">Login</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <form className="sign-up-form">
                        <h2 className="title">Sign up</h2>
                        <div className="form-name">
                            <div className="input-field">
                                <i> <FaUser /> </i>
                                <input type="text" name="fristName" placeholder="Firstname" />
                            </div>
                            <div className="input-field">
                                <i> <FaUser /> </i>
                                <input type="text" name="lastName" placeholder="Lastname" />
                            </div>
                        </div>
                        <div className="input-field">
                            <i> <FaUser /> </i>
                            <input type="text" name="userName" placeholder="Username" />
                        </div>
                        <div className="input-field">
                            <i> <FaEnvelope /> </i>
                            <input type="email" name="email" placeholder="Email" />
                        </div>
                        <div className="input-field">
                        <i> <FaLock /> </i>
                            <input type="password" name="password" placeholder="Password" />
                        </div>
                        <div className="button">
                            <div className="outer">
                                <div className="btn transparent">
                                    <button type="submit" value="Sign up"> Sign Up </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here ?</h3> 
                        <p>Click here to make your profile</p>
                        <div className="button">
                            <div className="outer">
                                <div className="btn transparent">
                                    <button onClick={() => toggleMode("signup")}>Sign up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="" className="image" alt="" />
                </div>

                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us ?</h3>
                        <p>Click here to login and get early updates of new games</p>
                        <div className="button">
                            <div className="outer">
                                <div className="btn transparent">
                                    <button onClick={() => toggleMode("signin")}>Sign in</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="" className="image" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Login;
