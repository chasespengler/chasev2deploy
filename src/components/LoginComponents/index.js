import React from 'react'
import {
    LoginInputContainer,
    InputContainer,
    InputLabelContainer,
    InputLabel,
    UsernameInput,
    PasswordInput,
} from './LoginElements'

const LoginBox = () => {

    return (
        <LoginInputContainer className={"row"}>
            <InputContainer className={"col-12"}>
                <InputLabelContainer className='col-4'>
                    <InputLabel>Username: </InputLabel>
                </InputLabelContainer>
                <InputContainer className='col-8'>
                    <UsernameInput type={"text"}/>
                </InputContainer>
            </InputContainer>
            <InputContainer className='col-12'>
                <InputLabelContainer className='col-4'>
                    <InputLabel>Password: </InputLabel>
                </InputLabelContainer>
                <InputContainer className='col-8'>
                    <PasswordInput type={"password"} />
                </InputContainer>
            </InputContainer>
        </LoginInputContainer>
    )
}

export default LoginBox