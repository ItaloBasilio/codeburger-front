import React from 'react'
import { useHistory } from 'react-router-dom'

import Person from '../../assets/person.png'
import Cart from '../../assets/cart.png'
import Logo from '../../assets/logo.png'

import { Container, ContainerLeft, PageLink, ContainerRight, ContainerText, Line, LogoBurger, PageLinkExit } from './styles'



export function Header() {

    const {
        push, location: { pathname}
} = useHistory()

    return (
        <Container>
            <LogoBurger>
                <img src={Logo} alt='logo-burger' />
            </LogoBurger>
            <ContainerLeft>
                <PageLink onClick={()=> push('/')} isActive={pathname === '/' }>Home</PageLink>
                <PageLink onClick={()=> push('/produtos')} isActive={pathname.includes('produtos') }>Ver Produtos</PageLink>                
            </ContainerLeft>

            <ContainerRight>
                <PageLink onClick={()=> push('/carrinho')}>
                    <img src={Cart} alt='carrinho' />
                </PageLink>
                <Line></Line>
                <PageLink>
                    <img className='user' src={Person} alt='logo-pessoa' />
                </PageLink>

                <ContainerText>
                    <p>
                        Olá, Ítalo
                    </p>
                    <PageLinkExit>Sair</PageLinkExit>
                </ContainerText>
            </ContainerRight>






        </Container>
    )

}
