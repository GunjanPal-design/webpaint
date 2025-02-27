import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios'

const Sign = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            alert("Enter the name")
            return
        }
        if (!email) {
            alert("Enter the email")
            return
        }
        if (!password) {
            alert("Enter the password")
            return
        }
        if (!confirmpassword) {
            alert("Confirm your password")
            return
        }
    }
    axios
        .post('http://localhost:9000/user/signup', { name, email, password, confirmpassword })
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            console.error('error', err);
            alert('Registration failed');
        });

    console.log(Response, 'res')
    return (

        <div className='container ' >
            <h2 className='text-center mt-4'>Registration-form</h2>
            <form style={formstart}>
                <div className="mb-2 mt-2">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input className="form-control" id="username" type="text" placeholder="Enter username" onChange={e => setName(e.target.value)} />
                </div>
                <div className="mb-2 mt-2">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input className="form-control" id="email" type="email" placeholder="Enter your mail" onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="mb-2 mt-2">
                    <label htmlFor="pwd" className="form-label">Password</label>
                    <input className="form-control" id="pwd" type="password" placeholder="Enter your password" onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="mb-2 mt-2">
                    <label htmlFor="pwd" className="form-label">Confirm Password</label>
                    <input className="form-control" id="pwd" type="password" placeholder="Confirm your password" onChange={e => setConfirmPassword(e.target.value)} />
                </div>
                <button className='btn bg-info mb-2 mt-2 ' style={btn} onClick={onSubmit}>Register</button>


            </form>



        </div>
    )
}

const formstart = {
    maxWidth: " 400px",
    margin: "50px auto",
    padding: "20px",
    backgroundColor: " #f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",


}
const btn = {
    width: "100%",
}


export default Sign;
