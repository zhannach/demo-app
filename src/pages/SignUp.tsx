import { useEffect } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import { FormContainer, FormButton } from '../components/Form/Form.styled';
import Password from '../components/Form/Password';
import TextInput from '../components/Form/TextInput';
import Title from '../components/Form/Title';
import { SignUpForm } from '../types/form';
import { registerUser } from '../redux/api';

import { signUpSchema } from '../helpers/schema';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';

const SignUp = () => {
  const navigate = useNavigate();
  const isUserActive = useSelector((state: RootState) => state.user.isUserActive);
  useEffect(() => {
    if (isUserActive) {
      navigate('/main');
    }
  }, [navigate, isUserActive]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({
    defaultValues: {
      fullName: '',
      userName: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver<SignUpForm>(signUpSchema),
  });
  const dispatch = useDispatch<AppDispatch>();
  const error = useSelector((state: RootState) => state.user.error);
  const user = useSelector((state: RootState) => state.user.user);

  const onSubmit: SubmitHandler<SignUpForm> = (data) => {
    const { userName, password, fullName } = data;
    dispatch(registerUser({ userName, password, fullName }));
  };

  return (
    <Container component="main" sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
        }}
      >
        <Title text={'Sign up'} />
        {user.id !== '' && (
          <Alert severity="success" sx={{ marginBottom: '14px' }}>
            You have successfully registered. Go to &#10145;
            <Link to="/" component={RouterLink} sx={{ margin: '8px', textDecoration: 'none' }}>
              {' '}
              Sign In
            </Link>
          </Alert>
        )}
        {error && (
          <Alert severity="error" sx={{ marginBottom: '10px' }}>
            {error}
          </Alert>
        )}
        <FormContainer component="form" onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label={'Full Name'}
            error={errors.fullName}
            name={'fullName'}
            register={register}
          />
          <TextInput
            label={'User Name'}
            error={errors.userName}
            name={'userName'}
            register={register}
          />
          <Password
            label={'Password'}
            error={errors.password}
            name={'password'}
            register={register}
          />
          <Password
            label={'Confirm Password'}
            error={errors.confirmPassword}
            name={'confirmPassword'}
            register={register}
          />
          <FormButton type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: '24px' }}>
            Sign Up
          </FormButton>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <span>I have an account?</span>
            <span>
              <Link
                to="/"
                component={RouterLink}
                variant="body2"
                sx={{ margin: '8px', textDecoration: 'none' }}
              >
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
