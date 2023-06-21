import React from 'react';
import TextField from '@mui/material/TextField';

import styled from 'styled-components';

const WhiteBorderTextField = styled(TextField)`
   margin: '0',
`;

type TextProps = {
    label: string,
    name: string
}

const TextInput = ({label, name}: TextProps) => {
  return (
    <WhiteBorderTextField
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
