import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/index.js';
import { GlobalStyles, MuiTheme } from '@/styles';
import { ThemeProvider } from '@mui/material';
import Layout from './components/layout';


function App() {
  return (
    <>
      <ThemeProvider theme={MuiTheme}>
        <GlobalStyles />
        <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} /> 
      </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
