import React from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';

import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { FormContainer, FormButton } from '../components/Form/Form.styled';
import Password from '../components/Form/Password';
import TextInput from '../components/Form/TextInput';
import Title from '../components/Form/Title';
import { FormValues } from '../types/form';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } =  useForm<FormValues>({
    defaultValues: {
      fullName: '',
      userName: '',
      password: '',
      confirmPassword: ''
    },
    mode: 'onChange', reValidateMode: 'onChange' });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
      console.log(data)
    };

  return (
    <Container component="main" sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
        }}
      >
        <Title text={'Sign up'} />
        <FormContainer component="form" onSubmit={handleSubmit(onSubmit)}>
          <TextInput label={'Full Name'} name={'fullName'} register={register} />
          <TextInput label={'User Name'} name={'userName'} register={register} />
          <Password label={'Password'} name={'password'} register={register}/>
          <Password label={'Confirm Password'} name={'confirmPassword'} register={register}  />
          <FormButton type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: '24px' }}>
            Sign Up
          </FormButton>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <span>I have an account?</span>
            <span>
              <Link href="/" variant="body2" sx={{ margin: '8px', textDecoration: 'none' }}>
                {'Go to Sign in'}
              </Link>
            </span>
          </Box>
        </FormContainer>
      </Box>
    </Container>
  );
};
export default SignUp;
