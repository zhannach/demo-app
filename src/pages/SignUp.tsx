import React, { useState } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver} from '@hookform/resolvers/yup';
import {  useNavigate } from "react-router-dom";

import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import { FormContainer, FormButton } from '../components/Form/Form.styled';
import Password from '../components/Form/Password';
import TextInput from '../components/Form/TextInput';
import Title from '../components/Form/Title';
import { FormData } from '../types/form';
import { registerUser } from '../redux/api';

import { schema } from '../helpers/Schema';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } =  useForm<FormData>({
    defaultValues: {
      fullName: '',
      userName: '',
      password: '',
      confirmPassword: ''
    },
    mode: 'onChange', reValidateMode: 'onChange',
    resolver: yupResolver<FormData
    >(schema) });
    const dispatch = useDispatch()
    const [isSuccess, setIsSuccess] = useState(false)
    const isLoading = useSelector((state: RootState) => state.user.isLoading)
    const error = useSelector((state: RootState) => state.user.error)
    const user = useSelector((state: RootState) => state.user.user)
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormData> = (data) => {
      const {userName, password, fullName} = data
      dispatch(registerUser({userName, password, fullName}))
      console.log(user)
      if (!error) {
        setIsSuccess(true)
        setTimeout(() => {
          setIsSuccess(false)
          reset()
          navigate('/');
        }, 1500)
      }
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
        {isSuccess && <Alert severity="success">You have successfully registered</Alert>}
        {error && <Alert severity="error" sx={{marginBottom: '10px'}}>{error}</Alert>}
        <FormContainer component="form" onSubmit={handleSubmit(onSubmit)}>
          <TextInput label={'Full Name'} error={errors.fullName} name={'fullName'} register={register} />
          <TextInput label={'User Name'} error={errors.userName} name={'userName'} register={register} />
          <Password label={'Password'} error={errors.password} name={'password'} register={register}/>
          <Password label={'Confirm Password'} error={errors.confirmPassword} name={'confirmPassword'} register={register}  />
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
