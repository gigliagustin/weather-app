import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <>
    Not found
    <div>
      <Link to="/main">Back to main</Link>
    </div>
  </>
);

export default NotFoundPage;
