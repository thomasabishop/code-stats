import React, { useReducer } from 'react';
import reducer from './context/reducer';
import Context from './context/context';
import { ThemeProvider } from 'styled-components';
import './misc.css';
import { lightTheme, darkTheme } from './components/styled/Themes';
import GlobalStyles from '../src/components/styled/GlobalStyles';
import MainLayout from './layout/MainLayout';

function App() {
  const [state, dispatch] = useReducer(reducer, {
    isDark: false,
  });
  return (
    <Context.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={state.isDark ? darkTheme : lightTheme}>
        <React.Fragment>
          <GlobalStyles />
          <MainLayout />
        </React.Fragment>
      </ThemeProvider>
    </Context.Provider>
  );
}

export default App;
