import React from 'react'

import PropTypes from 'prop-types'

import { UserProvider } from './userContext'
import { CartProvider } from './cartContext'

const AppProvider = ({ children }) => (

    <UserProvider>
        <CartProvider>{children}</CartProvider>
    </UserProvider>


)

AppProvider.proTypes = {
    children: PropTypes.node
}

export default AppProvider