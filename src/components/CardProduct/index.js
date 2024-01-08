import React from 'react'
import PropTypes from 'prop-types'

import {Button} from '../Button'

import {
    Container,
    Image,
    ProductName,
    ProductPrice,
    ButtonCart

} from './styles'

export function CardProduct({ product }) {

    return (
        <Container>
            <Image src={product.url} alt="imagem-produto" />
            <div>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.formatedPrice}</ProductPrice>
                <ButtonCart>Quero esse!</ButtonCart>
            </div>
        </Container>
    )
}


CardProduct.propTypes = {
    product: PropTypes.object
}