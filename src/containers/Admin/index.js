import React from 'react'
import Orders from './Orders'
import Listproducts from './ListProducts'

import { Container , ContainerItems } from './styles'
import { SideMenuAdmin } from '../../components'

export function Admin(){
    return (
        <Container>
            <SideMenuAdmin />
            <ContainerItems>
                <Orders />
                <Listproducts/>
            </ContainerItems>
            
        </Container>
    )
}