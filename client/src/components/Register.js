import React, { useState } from 'react' // using Use State Hooks
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: "", email: "", password: "", cpassword: ""
    })

    let name, value
    const handleInputs = (element) => {
        name = element.target.name
        value = element.target.value

        setUser({ ...user, [name]: value })
    }

    const PostData = async (e) => {
        e.preventDefault()

        const { name, email, password, cpassword } = user
        console.log(name);

        const res = await fetch('/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, password, cpassword
            })
        })

        const data = await res.json()

        if(data.status === 422 || !data){
            window.alert("Invalid Registration")
            console.log("Invalid Registration");
        }
        else{
            window.alert("Registration Successful")
            console.log("Registration Successful")

            navigate("../login", { replace: true });
        }
    }

    return (
        <div>
            <h1 className='register'>Register</h1>
            <form method="post">
                Name: <input type="text" name='name' value={user.name} onChange={handleInputs}></input>
                Email: <input type="text" name='email' value={user.email} onChange={handleInputs}></input>
                Password: <input type="text" name='password' value={user.password} onChange={handleInputs}></input>
                Confirm Password: <input type="text" name='cpassword' value={user.cpassword} onChange={handleInputs}></input>
                <button type="submit" onClick={PostData}>Submit</button>
            </form>
        </div>
    )
}

export default Register
