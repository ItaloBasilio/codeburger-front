import React, { useEffect, useState } from 'react';
import { Container, Label, Input, ButtonStyled, LabelUpload } from './styles';
import api from '../../../services/api';
import ReactSelect from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function NewProduct() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);
  const { register, handleSubmit, control } = useForm();
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

        <Label>Preço</Label>
        <Input type='number' {...register('price')} />

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

        <Controller
          name='category_id'
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
                  color: '#ed2f09',
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

        <ButtonStyled type='submit'>Adicionar produto</ButtonStyled>
      </form>
    </Container>
  );
}

export default NewProduct;
