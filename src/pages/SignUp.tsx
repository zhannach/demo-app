import React from 'react';

import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { FormContainer, FormButton } from '../components/Form/Form.styled';
import Password from '../components/Form/Password';
import TextInput from '../components/Form/TextInput';
import Title from '../components/Form/Title';

const SignUp = () => {
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
        <FormContainer component="form">
          <TextInput label={'Full Name'} name={'name'} />
          <TextInput label={'User Name'} name={'name'} />
          <Password label={'Confirm Password'} name={'password'} />
          <Password label={'Password'} name={'password'} />
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
