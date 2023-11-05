/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = (props) => (
  <>
    Welcome
    <div>
      <Link to="/main">Go to main</Link>
    </div>
  </>
);

WelcomePage.propTypes = {};

export default WelcomePage;
