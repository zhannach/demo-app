import { ThemeProvider, createTheme } from '@mui/material/styles';
import { GlobalStyle } from './GlobalStyles.tsx';
import { store } from '../redux/store.ts';
import { Provider } from 'react-redux';

const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'white',
          '&.Mui-focused': {
            color: '#fff',
            fontSize: '16px',
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          color: '#ffff',
          flexBasis: '1',
          display: 'flex',
          flexDirection: 'row-reverse',
          fontSize: '16px',
          width: '100%',
          ':after': {
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

export const CustomProvider = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </Provider>
  );
};
