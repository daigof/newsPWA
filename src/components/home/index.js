import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

// import logo from 'images/logo.svg';
// import { useStateValue } from 'utils/state';

import { MainBox } from './styles';
import { ENDPOINT } from 'utils/constants';

const Home = () => {
  const [headlines, setHeadlines] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchHeadlines = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(ENDPOINT);
        console.log(result);
        setHeadlines(result.data.articles);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchHeadlines();
  }, []);

  return (
    <Container maxWidth="lg">
      <MainBox>
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          align="center"
          color="primary"
        >
          News Headlines
        </Typography>

        {isError && <div>Something went wrong ...</div>}

        {isLoading ? (
          <CircularProgress />
        ) : (
          <ul>
            {headlines.map(headline => (
              <li key={headline.title}>{headline.title}</li>
            ))}
          </ul>
        )}
      </MainBox>
    </Container>
  );
};

export default Home;
