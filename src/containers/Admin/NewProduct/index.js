import React, { useEffect, useState } from 'react';
import { Container, Label, Input, ButtonStyled, LabelUpload } from './styles';
import api from '../../../services/api';
import ReactSelect from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from '../../../components';

function NewProduct() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);

  // Yup
  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto'),
    price: Yup.string().required('Digite o preço'),
    category: Yup.object().required('Escolha uma categoria'),
    file: Yup.mixed().test('required', 'Carregue um arquivo', (value) => {
      return value && value.length > 0;
    }).test('fileSize', 'Tamanho máximo de 2mb', (value) => {
      return value && value[0] && value[0].size <= 200000;
    }).test('type', 'Arquivos permitidos: jpeg, png, jpg', (value) => {
      return (
        (value && value[0] && value[0].type === 'image/jpeg') ||
        (value && value[0] && value[0].type === 'image/png')
      );
    }),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

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
        <Label>Nome</Label>
        <Input type='text' {...register('name')} />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>

        <Label>Preço</Label>
        <Input type='number' {...register('price')} />
        <ErrorMessage>{errors.price?.message}</ErrorMessage>

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

        <Controller
          name='category'
          control={control}
          render={({ field }) => (
            <ReactSelect
              {...field}
              options={categories}
              getOptionLabel={(cat) => cat.name}
              getOptionValue={(cat) => cat.id}
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

        <ButtonStyled type='submit'>Adicionar produto</ButtonStyled>
      </form>
    </Container>
  );
}

export default NewProduct;
