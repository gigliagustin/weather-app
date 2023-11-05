import { Grid } from '@mui/material';
import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import CityPage from './pages/CityPage';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import WelcomePage from './pages/WelcomePage';

const App = () => (
  <Grid
    container
    justifyContent="center"
    direction="row"
  >
    <Grid
      item
      lg={8}
      md={10}
      sm={11}
      xs={12}
    >
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/city" element={<CityPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </Grid>
  </Grid>
);

export default App;
