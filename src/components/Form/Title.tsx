import React from 'react';
import Typography from '@mui/material/Typography';

const Title = ({text, fontSize ="56px"} : {text: string, fontSize?: string}) => {
  return (
    <Typography
      component="h1"
      variant="h5"
      sx={{
        color: 'white',
        fontSize: {fontSize},
        fontWeight: '700',
        fontFamily: 'Montserrat',
        textTransform: 'uppercase',
        marginBottom: '48px',
      }}
    >
      {text}
    </Typography>
  );
};

export default Title;
