import React from 'react'
import Classes from './mobileAuth.module.css'
import BackgroundImage from '../../../assets/signup/Frame 3.png'
const mobileAuth = props => {
    let parentdiv = [Classes.MobileAuth]
    if (props.hide) {
        parentdiv.push(Classes.Hide)
    }
    return (
        <div className={parentdiv.join(' ')}>
            
            <img className={Classes.BackgroundImage} src={BackgroundImage}/>
            <div className={Classes.MobileAuthContent}>
                <h1>Hello Friend !</h1>
                <p className={Classes.SingUpText}>Sign in if you have already registered
                    or Click on Sign Up to register</p>
                <button className={Classes.Sign}
                onClick={props.signIn}>
                    Sign In</button>
                <button className={Classes.Sign}
                onClick={props.signUp}>
                    Sign Up</button>
            </div>
        </div>
    )
}
export default mobileAuth