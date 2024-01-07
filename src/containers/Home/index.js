import React from 'react'
import HomeLogo from '../../assets/home-logo.png'
import { Container, HomeImg} from './styles'
import CategoryCarousel from '../../components/CategoryCarousel'
import OffersCarousel from '../../components/OffersCarousel'

function Home(){

    return (
       <Container>
            <HomeImg src={HomeLogo} alt="banner" />
            <CategoryCarousel />
            <OffersCarousel />
       </Container> 
    )

}


export default Home