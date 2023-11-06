import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppFrame from './AppFrame';

export default {
  title: 'AppFrame',
  component: AppFrame,
};

export const AppFrameExample = () => (
  <Router>
    <AppFrame>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laborum atque quos
      mollitia repellat possimus, voluptatem rem minima odio nisi vitae itaque a
      recusandae labore explicabo omnis quidem ab harum.
    </AppFrame>
  </Router>
);
