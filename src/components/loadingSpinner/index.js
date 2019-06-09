import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { LoadingBox } from './styles';

const LoadingSpinner = () => (
  <LoadingBox>
    <CircularProgress size={90} />
  </LoadingBox>
);

export default LoadingSpinner;
