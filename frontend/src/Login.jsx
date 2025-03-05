import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import image from "./assets/snapchat.jpg";
import { useNavigate } from 'react-router-dom';
import { base_url } from "./config";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();


        if (!email || !password) {
            alert("All fields are required");
            return;
        }


        setLoading(true);

        axios
            .post(`${base_url}/user/Login`, { email, password })
            .then((result) => {
                if (result.data.message === "Login Successful") {
                    navigate("/home");
                } else {
                    alert(result.data.message || "Login failed. Please try again")
                }

            })
            .catch((err) => {
                setLoading(false);
                console.error('Error:', err);
                setError('Registration failed. Please try again.');
            });

    };

    return (
        <div>
            <div className='container'>
                <form style={formstart}>
                    <div className="text-center">
                        <img src={image} style={img} className="text-center" alt="Snapchat Logo" />
                    </div>
                    <h2 className='text-center mt-3 mb-4'>Login to Snapchat</h2>

                    {error && <div className="alert alert-danger">{error}</div>}

                    <div className="mb-2 mt-2">
                        <label htmlFor="username" className="form-label">Username/Email</label>
                        <input
                            className="form-control"
                            id="username"
                            type="text"
                            placeholder="Enter username"
                            onChange={e => setEmail(e.target.value)}

                        />
                    </div>

                    <div className="mb-2 mt-2">
                        <label htmlFor="pwd" className="form-label">Password</label>
                        <input
                            className="form-control"
                            id="pwd"
                            type="password"
                            placeholder="Enter your password"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>

                    <button
                        className='btn mb-2 mt-2'
                        style={btn}
                        onClick={onSubmit}
                        disabled={loading}
                    >
                        {loading ? 'Loading...' : 'Login'}
                    </button>

                </form>
            </div>
        </div>
    );
};

const img = {
    width: "35px",
    height: "35px",
};

const formstart = {
    maxWidth: "100%",
    width: "400px",
    margin: "50px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
};

const btn = {
    width: "100%",
    backgroundColor: "yellow",
};

export default Login;
