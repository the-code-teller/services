import React, { useEffect, useState } from 'react'

const Contact = () => {    
    const [userData, setUserData] = useState({
        name: "", email: "", message: ""
    })

    const getUserContact = async () => {
        try {
            const res = await fetch('/getdata', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const data = await res.json()
            console.log(data);
            setUserData({
                ...userData,
                name: data.name,
                email: data.email,
            })

            if(!res.status === 200){
                const error = new Error(res.error)
                throw error
            }

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getUserContact()
    }, [])

    //  We are storing data in states
    const handleInput = (event) => {
        const name = event.target.name
        const value= event.target.value

        setUserData({ ...userData, [name]:value})
    }

    // Send the data to backend
    const submitData = async (e) => {
        e.preventDefault()

        const {name, email, message} = userData

        const res = await fetch('/contact', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, message
            })
        })

        const data = await res.json()

        if (!data) {
            console.log("Message not sent");
        } else {
            alert("Message Sent")
            setUserData({ ...userData, message: ""}) // Make message field empty again
        }
    }

    return (
        <div>
            <h1 method="POST">Contact Us</h1>
            <form>
                Name: <input
                    value={userData.name}
                    onChange={handleInput}
                    name='name'
                ></input>
                Email: <input 
                    value={userData.email}
                    onChange={handleInput}
                    name='email'
                ></input>
                Message: <input
                    value={userData.message}
                    onChange={handleInput}
                    name='message'
                ></input>
                <button 
                    type="submit"
                    onClick={submitData}
                >Submit</button>
            </form>
        </div>
    )
}

export default Contact
