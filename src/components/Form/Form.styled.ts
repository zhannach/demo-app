import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export const FormButton = styled(Button)(() => ({
  width: '330px',
  fontFamily: "Montserrat",
  height: '44px',
  backgroundColor: 'var(--second-color)',
  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '155%',
  textTransform: "none"
}));





export const FormContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  color: "white",
  rowGap: "18px",
  fontFamily: 'Montserrat',
  width: "328px"
}));
