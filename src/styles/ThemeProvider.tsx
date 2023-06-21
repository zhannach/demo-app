import { ThemeProvider, createTheme } from '@mui/material/styles';
import { GlobalStyle } from './GlobalStyles.tsx';

const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        "root": {
          color: "white",
          "&.Mui-focused": {
            "color": "#fff"
          }
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          ":after": {
            borderBottom: '2px solid white',
          },
        },
      },
    },
    
  },
});

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export const CustomThemeProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
