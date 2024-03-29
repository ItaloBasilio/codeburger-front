import React from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'

import api from '../../services/api'
import {Button , ErrorMessage} from '../../components'
import RegisterImg from '../../assets/cadastro.png'

import {
    Container,
    RegisterImage,
    ContainerItens,
    Label,
    Input,
    SignInLink

} from './styles'

export function Register() {

    const schema = Yup.object().shape({
        name: Yup.string().required("Campo nome é obrigatório"),
        email: Yup.string()
            .email("Entre com um e-mail válido")
            .required("E-mail é obrigatório"),
        password: Yup.string()
            .required("A senha é obrigatória")
            .min(6, "A senha deve ter pelo menos 6 caracteres"),
        confirmPassword: Yup.string()
            .required("A senha é obrigatória")
            .oneOf([Yup.ref('password')], "As senhas devem ser iguais")
    })


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });



    const onSubmit = async clientData => {
        try {
            const {status} = await api.post(
                'users',
                {
                    name: clientData.name,
                    email: clientData.email,
                    password: clientData.password
                },
                { validateStatus: () => true }
            )

            if(status === 201 || status === 200){
                toast.success('Cadastro criado com sucesso');
            }
            else if(status === 409){
                toast.error('E-mail já cadastrado! Faça Login para continuar!');
            }else {
                throw new Error() 
            }

            
        } catch (err) {
            toast.error('Falha no sistema! Tente novamente')
        }

    }

    return (
        <Container>
            <RegisterImage src={RegisterImg} alt="register-image" />
            <ContainerItens>

                <h1>Cadastre-se</h1>

                <form noValidate onSubmit={handleSubmit(onSubmit)} >

                    <Label error={errors.name?.message}>Nome</Label>
                    <Input type='text' {...register("name")} error={errors.name?.message} />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>

                    <Label error={errors.email?.message}>Email</Label>
                    <Input type='email' {...register("email")} error={errors.email?.message} />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <Label error={errors.password?.message}>Senha</Label>
                    <Input type='password' {...register("password")} error={errors.password?.message} />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>

                    <Label error={errors.confirmPassword?.message}>Confirmar Senha</Label>
                    <Input type='password' {...register("confirmPassword")} error={errors.confirmPassword?.message} />
                    <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

                    <Button type='submit' style={{ marginTop: 25, marginBottom: 25 }}>Criar conta</Button>
                </form>
                <SignInLink>Já possui conta?<Link style={{color:"red"}} to="/login"> Entrar</Link> </SignInLink>
            </ContainerItens>
        </Container>
    )
}
