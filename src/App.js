import React, { useReducer } from 'react';
import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';
import reducer from './context/reducer';
import Context from './context/context';
import { ThemeProvider } from 'styled-components';
import './misc.css';
import { lightTheme, darkTheme } from './components/styled/Themes';
import GlobalStyles from '../src/components/styled/GlobalStyles';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Page from './components/Page';
import Dashboard from './views/Dashboard';
import About from './views/About';
function App() {
  const [state, dispatch] = useReducer(reducer, {
    isDark: false,
  });
  return (
    <Context.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={state.isDark ? darkTheme : lightTheme}>
        <React.Fragment>
          <GlobalStyles />
          <Router>
            <Header />
            <Sidebar />
            <Page>
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/about" component={About} />
              </Switch>
            </Page>
          </Router>
        </React.Fragment>
      </ThemeProvider>
    </Context.Provider>
  );
}

export default App;
