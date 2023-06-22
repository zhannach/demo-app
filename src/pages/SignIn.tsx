import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';

import { SignInForm } from '../types/form';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { FormContainer, FormButton } from '../components/Form/Form.styled';
import Password from '../components/Form/Password';
import TextInput from '../components/Form/TextInput';
import Title from '../components/Form/Title';

import { signInSchema } from '../helpers/schema';
import { loginUser } from '../redux/api';
import { AppDispatch, RootState } from '../redux/store';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({
    defaultValues: {
      userName: '',
      password: '',
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver<SignInForm>(signInSchema),
  });
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const error = useSelector((state: RootState) => state.user.error);
  const isUserActive = useSelector((state: RootState) => state.user.isUserActive);

  useEffect(() => {
    if (isUserActive) {
      navigate('/main');
    }
  }, [navigate, isUserActive]);

  const onSubmit: SubmitHandler<SignInForm> = (data) => {
    const { userName, password } = data;
    dispatch(loginUser({ userName, password }));
  };

  return (
    <Container component="main" sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
        }}
      >
        <Title text={'Sign in'} />
        {error && (
          <Alert severity="error" sx={{ marginBottom: '10px' }}>
            {error}
          </Alert>
        )}
        <FormContainer component="form" onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            error={errors.userName}
            label={'User Name'}
            name={'userName'}
            register={register}
          />
          <Password
            error={errors.password}
            label={'Password'}
            name={'password'}
            register={register}
          />
          <FormButton type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: '24px' }}>
            Sign In
          </FormButton>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <span>Don't have an account?</span>
            <span>
              <Link
                to="/signup"
                component={RouterLink}
                variant="body2"
                sx={{ margin: '8px', textDecoration: 'none' }}
              >
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
