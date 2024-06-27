import React from 'react'
import phone from '../assets/gamers.jpg'
import { LoginCard } from '../components/login/LoginCard'
import backgroundImage from '../assets/download.jpg'

export const Login=()=> {
    return (
        <div className='home' style={{ backgroundImage: `url(${backgroundImage})` ,  backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw', }}>
            <div className="containers" style={{ borderTopRightRadius:"20px", borderBottomRightRadius:"20px" }}>
                <div className="login-left">
                 
                        <img src={phone} className="phone-img" alt="Gamer" style={{height:"100%", width:"100%", borderTopRightRadius:"20px", borderBottomRightRadius:"20px"}} />
                    
                </div>
                <div className="right-login" >
                    <LoginCard />
                </div>
            </div>
        </div>
    )
}
