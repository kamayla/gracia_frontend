import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';

import './loadingScreen.scss';

const LoadingScreen = ({ open }) => {
  return (
    <div className={open ? 'loading-screen-wrapper' : 'screen-none' }>
      <CircularProgress />
    </div>
  );
};

export default LoadingScreen;
