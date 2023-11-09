import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import Clouds from 'vanta/dist/vanta.clouds.min';

const WelcomeScreen = ({ children }) => {
  const myRefDiv = useRef(null);
  const [vanta, setVanta] = useState(0);

  console.log('REFDIFF::CURRENT', myRefDiv.current);

  useEffect(() => {
    console.log('REFDIFF::CURRENT:FIRST', myRefDiv.current);

    if (!vanta) {
      setVanta(Clouds({
        THREE,
        el: myRefDiv.current,
      }));
    }

    return () => {
      if (vanta) {
        vanta.destroy();
        console.log('Release the resources');
      }
    };
  }, [vanta]);

  return (
    <div ref={myRefDiv}>
      WelcomeScreen{children}
    </div>
  );
};
WelcomeScreen.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WelcomeScreen;
