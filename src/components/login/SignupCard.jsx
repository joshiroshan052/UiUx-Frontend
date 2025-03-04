import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/connect.png'
import { url } from '../../baseUrl'
import { AuthContext } from '../../context/Auth'
import { Disabled } from '../disabled/Disabled'


export const SignupCard = () => {
    const context = useContext(AuthContext)
    const [username, setUsername] = useState('')
    const [password, setPasword] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const signup = async () => {
        try {
            const response = await axios.post(`${url}/auth/register`, {
                email, password, username, name
            })
            context.setAuth(response.data.user)
            localStorage.setItem('user', JSON.stringify(response.data.user))
            localStorage.setItem("access_token", response.data.access_token)
            localStorage.setItem("refresh_token", response.data.refresh_token)
        } catch (err) {
            context.throwErr(err.response.data.message)
        }
    }

    return (
        <div className="right-logins">
            <div className="signup-box " style={{display:'flex',flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
                <div className='' style={{display:"flex",justifyContent:"center", marginTop:"10px"}}>
                <img style={{ width: '15%' }} src={logo} alt="" />

                </div>
                <p style={{ marginTop: '0px', color: 'gray', fontSize: '15px', marginBottom: '10px', width: '70%', textAlign: 'center', fontWeight: 'bold' }}>Sign up </p>

                <input value={email} onChange={e => setEmail(e.target.value)} className='border' style={{ marginTop: '15px', width: '75%', height: '37px', fontSize: '13px', backgroundColor: '#fafafa ', outline: 'none', borderRadius: '5px' }} type="text" placeholder='Email  address' />
                <input value={name} onChange={e => setName(e.target.value)} className='border' style={{ marginTop: '15px', width: '75%', height: '37px', fontSize: '13px', backgroundColor: '#fafafa ', outline: 'none', borderRadius: '5px' }} type="text" placeholder='Full Name' />
                <input value={username} onChange={e => setUsername(e.target.value)} className='border' style={{ marginTop: '15px', width: '75%', height: '37px', fontSize: '13px', backgroundColor: '#fafafa ', outline: 'none', borderRadius: '5px' }} type="text" placeholder='Username' />
                <input value={password} onChange={e => setPasword(e.target.value)} className='border' style={{
                    marginTop: '15px', width: '75%', height: '37px', fontSize: '13px', backgroundColor: '#fafafa ',
                    outline: 'none', borderRadius: '5px'
                }} type="password" placeholder='Password' />
                
                <p style={{ color: 'gray', fontSize: '12px', textAlign: 'center', width: '78%', marginTop: '17px' }}>
                    By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.
                </p>
                {
                    username && password && name && email ? <button onClick={() => signup()} style={{ border: 'none', outline: 'none', background: 'blue', padding: '7px 9px', borderRadius: '5px', color: 'white', backgroundColor: '#2196f3', marginTop: '18px', fontSize: '13.85px', width: '75%', fontWeight: 'bold' }}>Sign Up</button> : <Disabled text="Sign Up" />
                }

            </div>
            <div className=" border" style={{ textAlign: 'center' }}>
                <p style={{ color: 'gray', fontSize: '14px' }}>Have an account ?<Link to="/login" style={{ color: '#2196f3', fontWeight: 'bold', marginLeft: '6px', textDecoration: 'none', fontSize: '13.5px' }}>Log in</Link></p>
            </div>
        </div>
    )
}
