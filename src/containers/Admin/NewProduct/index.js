import React, { useEffect, useState } from 'react'

import { Container , Label , Input , ButtonStyled , LabelUpload } from './styles'
import api from '../../../services/api'
import ReactSelect from 'react-select'
import { useForm } from "react-hook-form"




function NewProduct() {
  const [ fileName, setFileName ] = useState(null)
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data)

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('products')

    }

    loadOrders()
  }, [])





  return (
    <Container>
      <form noValidate>
      <Label>Nome</Label>
      <Input type='text' {...register("name")} />

      <Label>Preço</Label>
      <Input type='number' {...register("price")} />


      <LabelUpload>
        { fileName || 'Carregue a imagem do produto'}
        
      <input 
      type='file' 
      accept='image/png, image/jpeg, image/jpg'
      {...register("file")}
      onChange={value => {
        setFileName(value.target.files[0]?.name)
      
      }}
      />
      </LabelUpload>

      <ReactSelect />
      
      <ButtonStyled>Adicionar produto</ButtonStyled>
      </form>
    </Container>
  )

}

export default NewProduct