import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Container, Label, Input, ButtonStyled, LabelUpload , ContainerInput } from './styles';
import api from '../../../services/api';
import ReactSelect from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from '../../../components';
import { toast } from 'react-toastify';


function EditProduct() {

  

  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);
  const { 
    push,
    location: { 
      state: { product } 
    } 
  } = useHistory()

  console.log(product)

  // Yup
  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto'),
    price: Yup.string().required('Digite o preço'),
    category: Yup.object().required('Escolha uma categoria'),
    offer: Yup.bool()
    
  });
  

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async data => {
    const productDataFormData = new FormData()

    productDataFormData.append( 'name', data.name )
    productDataFormData.append( 'price', data.price )
    productDataFormData.append( 'category_id', data.category.id )
    productDataFormData.append( 'file', data.file[0] )
    productDataFormData.append( 'offer', data.offer)

    await toast.promise(api.put(`products/${product.id}`, productDataFormData ),{
      pending: 'Editando produto',
      success: 'Produto editado com sucesso',
      error: 'Falha ao editar o produto'
    })

    setTimeout(() => {
        push('/listar-produtos')
    }, 2000);
  }


  // Carregar categorias da API
  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories');
      setCategories(data);
    }

    
    loadCategories();
  }, []);

  

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
        <Label>Nome</Label>
        <Input type='text' {...register('name')} defaultValue={product.name}/>
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>

        <div>
        <Label>Preço</Label>
        <Input type='number' {...register('price')} defaultValue={product.price}/>
        <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </div>

        <div>
        <LabelUpload>
          {fileName || (
            <>
              <CloudUploadIcon />
              Carregue a imagem do produto
            </>
          )}

          <input
            type='file'
            accept='image/png, image/jpeg, image/jpg'
            {...register('file')}
            onChange={(event) => {
              setFileName(event.target.files[0]?.name);
            }}
          />
        </LabelUpload>
        <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </div>


        <div>
        <Controller
          name='category'
          control={control}
          defaultValue={product.category}
          render={({ field }) => (
            <ReactSelect
              {...field}
              options={categories}
              getOptionLabel={(cat) => cat.name}
              getOptionValue={(cat) => cat.id}
              defaultValue={product.category}
              onChange={(selectedOption) => {
                field.onChange(selectedOption);
              }}
              placeholder='Categorias'
              styles={{
                control: (styles) => ({
                  ...styles,
                  border: 'none',
                }),
                singleValue: (styles) => ({
                  ...styles,
                  color: '#000',
                  fontWeight: '600',
                  border: 'none',
                }),
                option: (styles, { isFocused }) => ({
                  ...styles,
                  backgroundColor: isFocused ? '#ff0000' : 'transparent', // Cor de fundo quando hover
                  color: isFocused ? '#fff' : '#000', // Cor do texto quando hover
                }),
              }}
            />
            
          )}
        />
        <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </div>

        <ContainerInput>
        <input 
        type='checkbox'
        {...register('offer')} 
        defaultChecked={product.offer}
        />
        <Label>Produto em oferta?</Label>
        </ContainerInput>
        

        <ButtonStyled type='submit'>Editar produto</ButtonStyled>
      </form>
    </Container>
  );
}

export default EditProduct;
