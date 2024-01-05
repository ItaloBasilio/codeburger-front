import React from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"

import LoginImg from '../../assets/login-image.png'

import { 
    Container,
    LoginImage,
    ContainerItens,
    Label, 
    Input, 
    Button, 
    SignInLink,
    ErrorMessage    

} from './styles'

function Login() {

    const schema = Yup.object().shape({
        email: Yup.string().email("Entre com um e-mail válido").required(),
        password: Yup.string().required("A senha é obrigatória").min(6, "A senha deve ter pelo menos 6 caracteres"),
    })


    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => console.log(data)

    return (
        <Container>
            <LoginImage src={LoginImg} alt="login-image"/>
            <ContainerItens>

                <h1>Login</h1>

                <form noValidate onSubmit={handleSubmit(onSubmit)} >
                <Label>Email</Label>
                <Input type='email' {...register("email")} error={errors.email?.message} />
                <ErrorMessage>{errors.email?.message}</ErrorMessage>

                <Label>Senha</Label>
                <Input type='password' {...register("password")} error={errors.password?.message} />
                <ErrorMessage>{errors.password?.message}</ErrorMessage>

                <Button type='submit'>Entrar</Button>
                </form>
                <SignInLink>Não possui conta?<a> Criar conta</a> </SignInLink>
            </ContainerItens>
        </Container>
    )
}

export default Login