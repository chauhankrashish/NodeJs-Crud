import React, { useState } from 'react'

const Signup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const collectData=()=>{
        console.log(name,email,pwd);
    }

    return (
        <div className='register'>
            <div >
                <h1>Register</h1>
                <input className='inputBox' 
                value={name} onChange={(e) => setName(e.target.value)} 
                type='text' placeholder='Enter Name' />
                <input className='inputBox' 
                value={email} onChange={(e) => setEmail(e.target.value)} 
                type='text' placeholder='Enter Email' />
                <input className='inputBox' 
                value={pwd} onChange={(e) => setPwd(e.target.value)} 
                type='password' placeholder='Enter Password' />
                <input className='submit-btn' onClick={collectData} type='submit' value='Sign Up' />
            </div>
        </div>
    )
}

export default Signup;