import React from 'react'

import LoginImg from '../../assets/login-image.png'

import { 
    Container,
    LoginImage,
    ContainerItens,
    Label, 
    Input, 
    Button, 
    SignInLink    

} from './styles'

function Login() {
    return (
        <Container>
            <LoginImage src={LoginImg} alt="login-image"/>
            <ContainerItens>

                <h1>Login</h1>

                <Label>Email</Label>
                <Input />

                <Label>Senha</Label>
                <Input />

                <Button>Entrar</Button>
                <SignInLink>Não possui conta?<a> Criar conta</a> </SignInLink>
            </ContainerItens>
        </Container>
    )
}

export default Login