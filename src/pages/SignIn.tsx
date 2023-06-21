import React from 'react';

import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { FormContainer, FormButton } from '../components/Form/Form.styled';
import Password from '../components/Form/Password';
import TextInput from '../components/Form/TextInput';
import Title from '../components/Form/Title';

const SignIn = () => {
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
        <Title text={'Sign in'} />
        <FormContainer component="form">
          <TextInput label={'User Name'} name={'name'} />
          <Password label={'Password'} name={'password'} />
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
