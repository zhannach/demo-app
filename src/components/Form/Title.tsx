import React from 'react';
import Typography from '@mui/material/Typography';

const Title = ({text} : {text: string}) => {
  return (
    <Typography
      component="h1"
      variant="h5"
      sx={{
        color: 'white',
        fontSize: '56px',
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
