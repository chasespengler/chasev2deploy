import React from 'react'
import {
    LoginContainer
} from './LoginElements';
import LoginBox from '../../components/LoginComponents'
import {Checky} from '../../App'

const LoginPage = () => {
    Checky();

    document.addEventListener('keypress', function(e){
        if (e.key === 'Enter'){
            console.log('hello');
        };
    });
    
    return (
        <LoginContainer>
            <LoginBox />
        </LoginContainer>
    )
}

export default LoginPage