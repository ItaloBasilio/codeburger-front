import React, { useEffect, useState } from 'react'

import { Container } from './styles'
import api from '../../../services/api'




function NewProduct() {
  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('products')

    }

    loadOrders()
  }, [])





  return (
    <Container>

      
    </Container>
  )

}

export default NewProduct