import React, { useState } from 'react'

export default function Login() {
    const [user, SetUsername] = useState("")
    const [pass, SetPass] = useState("")
    console.log(user, pass)
    return (
        <>
            <div> Enter your username: <input type='text' name='user' value={user} onInput={(e) => SetUsername(e.target.value)} /></div>
            <div>Enter your password: <input type='password' name='pass' value={pass} onInput={(e) => SetPass(e.target.value)} /></div>
            <div><input type='checkbox' /> Is Admin?</div>
            <button type='submit' onClick={() => console.log("Username:", user, "Password:", pass)}>Submit</button>
        </>
    )
}
