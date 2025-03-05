import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { base_url } from './config';


const Sign = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            alert("All fields are required");
            return;
        }
        if (password !== confirmpassword) {
            alert("Passwords do not match");
            return;
        }

        setLoading(true);


        axios
            .post(`${base_url}/user/Sign`, { name, email, password, confirmpassword })
            .then((result) => {
                console.log(result);
                alert('Registration successful!');
                setLoading(false);
                navigate('/Login')
            })
            .catch((err) => {
                console.error('error', err);
                setError('Registration failed. Please try again.');
                setLoading(false);
            });
    };

    return (
        <div className='container'>
            <h2 className='text-center mt-4'>Registration-form</h2>
            <form style={formstart}>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="mb-2 mt-2">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        className="form-control"
                        id="username"
                        type="text"
                        placeholder="Enter username"
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div className="mb-2 mt-2">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        className="form-control"
                        id="email"
                        type="email"
                        placeholder="Enter your mail"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
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
                <div className="mb-2 mt-2">
                    <label htmlFor="pwd" className="form-label">Confirm Password</label>
                    <input
                        className="form-control"
                        id="confirmpwd"
                        type="password"
                        placeholder="Confirm your password"
                        onChange={e => setConfirmPassword(e.target.value)}
                        value={confirmpassword}
                    />
                </div>

                <button
                    className='btn bg-info mb-2 mt-2'
                    style={btn}
                    onClick={onSubmit}
                    disabled={loading}
                >
                    {loading ? 'Registering...' : 'Register'}
                </button>

                <Link to='/Login'><button
                    className='btn bg-info-subtle mb-2 mt-2'
                    style={btn}

                    disabled={loading}
                >Login</button>
                </Link>

            </form>
        </div>
    );
};

const formstart = {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
};

const btn = {
    width: "100%",
};

export default Sign;
