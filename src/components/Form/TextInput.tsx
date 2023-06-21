import React from 'react';
import TextField from '@mui/material/TextField';

import { FieldError, UseFormRegister } from 'react-hook-form';
import { FormData } from '../../types/form';

interface TextProps {
  label: string;
  name: keyof FormData;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
}

const TextInput = ({ label, name, register, error }: TextProps) => {
  return (
    <>
      <TextField
        InputLabelProps={{
          shrink: true,
        }}
        {...register(name)}
        fullWidth
        error={!!error}
        id={name}
        type={'text'}
        label={label}
        name={name}
        variant="standard"
        autoComplete={name}
        autoFocus
        helperText={error && error.message}
      />
    </>
  );
};

export default TextInput;
