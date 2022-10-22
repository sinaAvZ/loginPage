import React, { Component } from 'react'
import Classes from './Login.module.css'
import LinkToSignUp from '../../components/Auth/LinkToSignUp/LinkToSignUp'
import SignIn from '../../components/Auth/signin/signin'
import Axios from '../../Axios'
import MobileAuth from '../../components/Auth/mobileAuth/mobileAuth'
class Login extends Component {
    state = {
        signinshow: false,
        signupshow: false,
        hidemobileauth: false
    }

    signInShowHandler = () => {
        this.setState({ signinshow: true })
    }
    signUpshowHandler = () => {
alert("Maybe we'll see something soon :)")
    }
    render() {

        if (this.state.signinshow) {
            this.state.hidemobileauth = true
        }
        return (
            <div className={Classes.Login} >
                <MobileAuth hide={this.state.hidemobileauth}
                    signUp={this.signUpshowHandler}
                    signIn={this.signInShowHandler} />
                <SignIn />
                <LinkToSignUp />
            </div>

        )
    }
}
export default Login