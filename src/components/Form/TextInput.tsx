import TextField from '@mui/material/TextField';

import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface TextProps {
  label: string;
  name: string;
  register: (name: string) => UseFormRegisterReturn;
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
