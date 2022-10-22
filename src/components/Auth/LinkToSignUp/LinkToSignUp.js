import Classes from './LinkToSignUp.module.css'
import React from 'react'
import BackgroundImage from '../../../assets/signup/Frame 3.png'
import { Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    Button: {
        padding: "1rem 2rem",
        borderRadius: "3rem",
        border: "1px solid #fff",
        color: "#fff",
        margin: "1rem"
    }
}));
const Signup = props => {
    const Class = useStyles()
    return (
        <div className={Classes.LinkToSignUp}>
            <img src={BackgroundImage} className={Classes.BackgroundImage} />
            <div className={Classes.Content}>

                <Typography variant="h3" gutterBottom>
                    Hello Friend !
                </Typography>
                <Typography variant="h5">Sign in if you have already registered
                    or Click on Sign Up to register</Typography>
                <Button href="/" variant="outlined" size="large" className={Class.Button}>
                    SIGN UP
                </Button>

            </div>
        </div>
    )
}
export default Signup