import React from 'react'
import PropTypes from 'prop-types'

import { useCart } from '../../hooks/cartContext'
import { Button } from '../Button'
import { Container, Image, ProductName, ProductPrice } from './styles'
import { useHistory } from 'react-router-dom'

export function CardProduct({ product }) {
    const { putProductInCart } = useCart()
    const { push } = useHistory() 
    return (
        <Container>
            <Image src={product.url} alt="imagem-produto" />
            <div>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.formatedPrice}</ProductPrice>
                <Button
                    onClick={() => {
                        putProductInCart(product)
                        push('/carrinho')
                    }}
                >
                    Quero esse!</Button>
            </div>
        </Container>
    )
}


CardProduct.propTypes = {
    product: PropTypes.object
}