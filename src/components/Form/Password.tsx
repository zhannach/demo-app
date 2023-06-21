import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import { FormValues } from '../../types/form';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import styled from 'styled-components';
import { BaseTextFieldProps } from '@mui/material';
import { UseFormRegister } from 'react-hook-form';

const WhiteFormControl = styled(FormControl)`
  width: '100%',
  height: "35px", 
  color: "#ffff",
  & label.Mui-focused {
    color: "#ffff"
  }
`

interface TextProps extends BaseTextFieldProps {
  label: string;
  name: string;
  register: UseFormRegister<FormValues>;
}
const Password = ({ label, name, register }: TextProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <WhiteFormControl variant="standard">
      <InputLabel htmlFor={name}>
        {label}
      </InputLabel> 
      <Input
        {...register(name)}
        id={name}
        type={showPassword ? 'text' : 'password'}
        sx={{ color: '#ffff', borderColor: '#ffff' }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOff sx={{color: '#ffff'}} /> : <Visibility sx={{color: '#ffff'}}/>}
            </IconButton>
          </InputAdornment>
        }
      />
    </WhiteFormControl>
  );
};

export default Password;
