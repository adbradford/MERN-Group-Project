import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import background from '../images/pexels-fauxels-3183183.jpg'

const SignIn = () => {

    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    })

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/users/login', userInfo, { withCredentials: true })
            .then(res => {
                console.log(res)
                // setLoggedIn(true);
                navigate("/projects")
            })
            .catch(err => console.log(err))

    }

    const changeHandler = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })

    }


    return (
        <div className="container-fluid vh-100 d-flex justify-content-center align-items-center" style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}>
            <div className='row'>
                <div className='w-100'>
                    <div className="card p-5" style={{ backgroundColor: 'white', border: '2px solid black', borderRadius: '10px', width: '500px', margin: '0auto' }}>
                    <h1 className='text-center mb-5'>Project Manager</h1>
                    <h3 class="text-center">Login:</h3>
                        <form class="col-md-6 mx-auto" onSubmit={submitHandler}>

                            <div class="form-group">
                                <label for="email">Email:</label>
                                <input type="email" class="form-control" id="email" name="email" required value={userInfo.email} onChange={changeHandler} />
                            </div>

                            <div class="form-group">
                                <label for="password">Password:</label>
                                <input type="password" class="form-control" id="password" name="password" required value={userInfo.password} onChange={changeHandler} />
                            </div>

                            <button type="submit" class="btn btn-primary mt-3">Sign in</button>

                        </form>

                        <p className="mt-3 col-6 offset-3 row"> <span>Need to register? </span>
                            <span className="ml-2 "><Link to="/">Register</Link></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
                    )
}

                    export default SignIn