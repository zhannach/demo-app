import React from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver} from '@hookform/resolvers/yup';

import { FormData } from '../types/form';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { FormContainer, FormButton } from '../components/Form/Form.styled';
import Password from '../components/Form/Password';
import TextInput from '../components/Form/TextInput';
import Title from '../components/Form/Title';

import { schema } from '../helpers/Schema';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      userName: '',
      password: '',
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver<FormData
    >(schema)
  });
  console.log(errors, 111)
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
  };
  return (
    <Container component="main" sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
        }}
      >
        <Title text={'Sign in'} />
        <FormContainer component="form" onSubmit={handleSubmit(onSubmit)}>
          <TextInput error={errors.userName} label={'User Name'} name={'userName'} register={register} />
          <Password error={errors.password} label={'Password'} name={'password'} register={register} />
          <FormButton type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: '24px' }}>
            Sign In
          </FormButton>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <span>Don't have an account?</span>
            <span>
              <Link href="/signup" variant="body2" sx={{ margin: '8px', textDecoration: 'none' }}>
                {'New Account'}
              </Link>
            </span>
          </Box>
        </FormContainer>
      </Box>
    </Container>
  );
};
export default SignIn;
