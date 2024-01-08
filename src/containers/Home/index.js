import React from 'react'
import HomeLogo from '../../assets/home-logo.png'
import { Container, HomeImg} from './styles'
import {CategoryCarousel, OffersCarousel } from '../../components'


export function Home(){

    return (
       <Container>
            <HomeImg src={HomeLogo} alt="banner" />
            <CategoryCarousel />
            <OffersCarousel />
       </Container> 
    )

}
