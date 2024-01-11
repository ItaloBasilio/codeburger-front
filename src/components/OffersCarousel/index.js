import React, { useEffect, useState } from 'react'


import { useCart } from '../../hooks/cartContext'
import Offers from '../../assets/ofers.png'
import { Container, CategoryImg, ContainerItems, Image, Button } from './styles'
import formatCurrency from '../../utils/formatCurrency'
import Carousel from 'react-elastic-carousel'
import api from '../../services/api'
import { useHistory } from 'react-router-dom'


export function OffersCarousel() {
    const [offers, setOffers] = useState([])
    const { putProductInCart } = useCart()
    const { push } = useHistory()

    useEffect(() => {
        async function loadOffers() {
            const { data } = await api.get('products')

            const onlyOffers = data
                .filter(product => product.offer)
                .map(product => {
                    return { ...product, formatedPrice: formatCurrency(product.price) }
                })

            setOffers(onlyOffers)
        }

        loadOffers()
    }, [])

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
        { width: 1300, itemsToShow: 5 },
    ]



    return (
        <Container>
            <CategoryImg src={Offers} alt="ofertas" />

            <Carousel itemsToShow={5} style={{ width: '90%' }} breakPoints={breakPoints}>
                {
                    offers && offers.map(product => (
                        <ContainerItems key={product.id}>
                            <Image src={product.url} alt="foto_produto" />
                            <p className='titleProduct'>{product.name}</p>
                            <p className='titlePrice'>{product.formatedPrice}</p>
                            <Button 
                                onClick={() => {
                                putProductInCart(product)
                                push('/carrinho')
                                }}
                            >
                                Peça agora!
                            </Button>
                        </ContainerItems>

                    ))
                }
            </Carousel>
        </Container>
    )

}
