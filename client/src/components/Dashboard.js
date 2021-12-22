import React, { useEffect, useState } from 'react'

const Dashboard = () => {    
    const [userData, setUserData] = useState('')
    const [show, setShow] = useState(false)
    

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
            setShow(true)

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getUserContact()
    }, [])

    return (
        <div>
            <h1 method="POST">Dashboard</h1>
                <h5>{ show ? userData.name : 'Anonymous'}</h5>
        </div>
    )
}

export default Dashboard
