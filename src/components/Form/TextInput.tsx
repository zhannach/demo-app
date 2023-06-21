import React from 'react';
import TextField, { BaseTextFieldProps } from '@mui/material/TextField';

import { UseFormRegister } from 'react-hook-form';
import { FormValues } from '../../types/form';


interface TextProps extends BaseTextFieldProps {
  label: string;
  name: string;
  register: UseFormRegister<FormValues>;
}

const TextInput = ({ label, name, register }: TextProps) => {
  return (
    <TextField
      InputLabelProps={{
        sx: {
          color: 'white',
          '&.Mui-focused': {
            color: '#fff',
            fontSize: '16px',
          },
        },
      }}
      inputProps={{
        sx: {
          color: '#ffff',
          fontSize: '16px',
          '&.Mui-focused': {
            borderColor: '#fff',
          },
        },
      }}
      {...register(name)}
      fullWidth
      id={name}
      label={label}
      name={name}
      variant="standard"
      autoComplete={name}
      autoFocus
    />
  );
};

export default TextInput;
