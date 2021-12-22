import React, { useState } from 'react' // using Use State Hooks
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [ email, setEmail ] = useState('')
    const [password, setPassword ] = useState('')

    const loginUser = async(e) => {
        e.preventDefault()

        const res = await fetch('/login', {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            } ,
            body: JSON.stringify({
                email, password
            })
        })

        const data = res.json()

        if(res.status === 400 || !data){
            window.alert("Invalid credentials")
        }
        else{
            window.alert("Login Successfull")
            navigate("../", { replace: true });
        }
    }

    return (
        <div>
            <h1 className='register'>Login</h1>
            <form method="POST">
                Email: <input type="text" name='email' value={email}
                    onChange={ (e) => setEmail(e.target.value) }>
                </input>
                Password: <input type="text" name='password' value={password}
                    onChange={ (e) => setPassword(e.target.value) }>
                </input>
                <button type="submit" onClick={loginUser}>Submit</button>
            </form>
        </div>
    )
}

export default Login
