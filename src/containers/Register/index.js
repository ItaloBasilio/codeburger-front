import React from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"

import api from '../../services/api'
import Button from '../../components/Button'
import RegisterImg from '../../assets/cadastro.png'

import { 
    Container,
    RegisterImage,
    ContainerItens,
    Label, 
    Input, 
    SignInLink,
    ErrorMessage    

} from './styles'

function Register() {

    const schema = Yup.object().shape({
        name: Yup.string().required("Campo nome é obrigatório"),
        email: Yup.string().email("Entre com um e-mail válido").required("E-mail é obrigatório"),
        password: Yup.string().required("A senha é obrigatória").min(6, "A senha deve ter pelo menos 6 caracteres"),
        confirmPassword: Yup.string().required("A senha é obrigatória").min(6, "A senha deve ter pelo menos 6 caracteres"),
    })


    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async clientData => {

        const response =  await api.post('users', {
            name: clientData.name,
            email: clientData.email,
            password: clientData.password 
        })

        console.log(response)
    }

    return (
        <Container>
            <RegisterImage src={RegisterImg} alt="register-image"/>
            <ContainerItens>

                <h1>Cadastre-se</h1>

                <form noValidate onSubmit={handleSubmit(onSubmit)} >

                <Label>Nome</Label>
                <Input type='text' {...register("name")} error={errors.name?.message} />
                <ErrorMessage>{errors.name?.message}</ErrorMessage>

                <Label>Email</Label>
                <Input type='email' {...register("email")} error={errors.email?.message} />
                <ErrorMessage>{errors.email?.message}</ErrorMessage>

                <Label>Senha</Label>
                <Input type='password' {...register("password")} error={errors.password?.message} />
                <ErrorMessage>{errors.password?.message}</ErrorMessage>

                <Label>Confirmar Senha</Label>
                <Input type='password' {...register("confirmPassword")} error={errors.confirmPassword?.message} />
                <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

                <Button type='submit' style={{marginTop: 25, marginBottom: 25}}>Criar conta</Button>
                </form>
                <SignInLink>Já possui conta?<a> Entrar</a> </SignInLink>
            </ContainerItens>
        </Container>
    )
}

export default Register