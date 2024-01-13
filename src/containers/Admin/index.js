import React from 'react'
import Orders from './Orders'
import Listproducts from './ListProducts'
import PropTypes from 'prop-types'
import paths from '../../constants/paths'

import { Container , ContainerItems } from './styles'
import { SideMenuAdmin } from '../../components'
import NewProduct from './NewProduct'

export function Admin({match: { path }}){
    

    return (
        <Container>
            <SideMenuAdmin path={path} />
            <ContainerItems>
                { path === paths.Order && <Orders /> }
                { path === paths.Products && <Listproducts/> }
                { path === paths.NewProduct && <NewProduct/> }
            </ContainerItems>
            
        </Container>
    )
}

Admin.propTypes = {
    match: PropTypes.shape({
        path:PropTypes.string
    })  
}