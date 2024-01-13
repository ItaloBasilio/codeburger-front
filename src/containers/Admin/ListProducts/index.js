import React, { useEffect, useState } from 'react'

import { Container, Img , EditIconStyles } from './styles'
import api from '../../../services/api'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Cancel';
import formatCurrency from '../../../utils/formatCurrency'



function Listproducts() {
  const [products, setProducts] = useState()

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('products')

      setProducts(data)
    }

    loadOrders()
  }, [])



  function isOffer(offerStatus) {
    if (offerStatus) {
      return <CheckBoxIcon style={{ color: '#44cc11'}} />
    }
    return <CancelIcon style={{ color: '#f81d01'}} />
  }



  return (
    <Container>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align='center'>Nome</TableCell>
              <TableCell align='center'>Preço</TableCell>
              <TableCell align='center'>Produto em Oferta</TableCell>
              <TableCell align='center'>Imagem</TableCell>
              <TableCell align='center'>Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products && products.map((product) => (
              <TableRow
                key={product.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.name}
                </TableCell>
                <TableCell>{formatCurrency(product.price)}</TableCell>
                <TableCell align='center'>{isOffer(product.offer)}</TableCell>
                <TableCell><Img src={product.url} alt="imagem-produto" /></TableCell>
                <TableCell>
                  <EditIconStyles />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </Container>
  )

}

export default Listproducts