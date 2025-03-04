import './login.css';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Loading from '../Loading/loading';

function Login() {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    // Toggle Between Login And Signup Form

    const signupIntitialValues = {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
    }

    const loginIntitialValues = {
        userName: '',
        password: '',
    }

    const [signup, setSignup] = useState(signupIntitialValues)
    const [login, setLogin] = useState(loginIntitialValues)
    const [update, setUpdate] = useState('')


    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });       
    }

    // Sign Up Function

 
    async function signupUser (e) {
        e.preventDefault();

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signup),
            });
            if (response.ok) {
                setError(false)
                setUpdate('Account Created Successfully')
                window.location.reload();
            } else {
                setError(true);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    // Login Function

    const loginUser = async (e) => {
        e.preventDefault();

        try {
            await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(login),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.token) {
                        setError(false);
                        sessionStorage.setItem('userId', data.token)
                        navigate('/');
                    }
                })
                .catch((error) => {
                    setError(true);
                    console.log(error)
                })
        } catch (error) {
            console.error('Error:', error);
        }
    }

    
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false); 
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const toggleMode = (mode) => {
        document.querySelector(".container_login").classList.toggle("sign-up-mode", mode === "signup");
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="container_login">
            <div className="forms-container">
                <div className="signin-signup">
                    <form className="sign-in-form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i> <FaUser /> </i>
                            <input type="text" onChange={(e) => onValueChange(e)} name="userName" placeholder="Username" />
                        </div>
                        <div className="input-field">
                            <i> <FaLock /> </i>
                            <input type="password" onChange={(e) => onValueChange(e)} name="password" placeholder="Password" />
                        </div>
                        {error && <p className='error'>Please enter a valid username or password</p>}
                        <div className="button">
                            <div className="outer">
                                <div className="btn transparent">
                                    <button type="submit" onClick={(e) => loginUser(e)} className="btn-form solid">Login</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <form className="sign-up-form">
                        <h2 className="title">Sign up</h2>
                        <div className="form-name">
                            <div className="input-field">
                                <i> <FaUser /> </i>
                                <input type="text" onChange={(e) => onInputChange(e)} name="firstName" placeholder="Firstname" />
                            </div>
                            <div className="input-field">
                                <i> <FaUser /> </i>
                                <input type="text" onChange={(e) => onInputChange(e)} name="lastName" placeholder="Lastname" />
                            </div>
                        </div>
                        <div className="input-field">
                            <i> <FaUser /> </i>
                            <input type="text" onChange={(e) => onInputChange(e)} name="userName" placeholder="Username" />
                        </div>
                        <div className="input-field">
                            <i> <FaEnvelope /> </i>
                            <input type="email" onChange={(e) => onInputChange(e)} name="email" placeholder="Email" />
                        </div>
                        {error && <p className='error'>Email Or Username Already In Use</p>}
                        <div className="input-field">
                            <i> <FaLock /> </i>
                            <input type="password" onChange={(e) => onInputChange(e)} name="password" placeholder="Password" />
                        </div>
                        <div className="button">
                            <div className="outer">
                                <div className="btn transparent">
                                    <button type="submit" onClick={(e)=>signupUser(e)} > Sign Up </button>
                                    <p className='update_info'>{update}</p>
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
