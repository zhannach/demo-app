import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface TextProps {
  label: string;
  name: string;
  register: (name: string) => UseFormRegisterReturn;
  error: FieldError | undefined;
}
const Password = ({ label, name, register, error }: TextProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <TextField
      {...register(name)}
      id={name}
      fullWidth
      variant="standard"
      autoComplete={name}
      autoFocus
      type={showPassword ? 'text' : 'password'}
      sx={{ color: '#ffff', borderColor: '#ffff' }}
      error={!!error}
      label={label}
      helperText={error && error.message}
      InputProps={{
        startAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? (
                <VisibilityOff sx={{ color: '#ffff' }} />
              ) : (
                <Visibility sx={{ color: '#ffff' }} />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Password;
