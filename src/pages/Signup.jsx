import React from 'react'
import phone from '../assets/gamers.jpg'
import { SignupCard } from '../components/login/SignupCard'
import backgroundImage from '../assets/download.jpg'

export function Signup() {
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
            <div className="right-login" style={{backgroundColor:"#3C006B",borderTopRightRadius:"20px",borderBottomRightRadius:"20px"}} >
                <SignupCard />
            </div>
        </div>
    </div>
)
}
