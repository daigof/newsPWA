import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import LoadingSpinner from 'components/loadingSpinner';
import NewsCard from 'components/newsCard';
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
        const cache = await caches.open('news-headlines');
        const cachedResponse = await cache.match(ENDPOINT);
        let result;
        if (cachedResponse) {
          result = await cachedResponse.json();
        } else {
          const axiosResult = await axios(ENDPOINT);
          result = axiosResult.data;
          cache.put(ENDPOINT, new Response(axiosResult.request.response));
        }
        setHeadlines(result.articles);
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
          <LoadingSpinner />
        ) : (
          <Grid container justify="center" spacing={2}>
            {headlines.map(headline => (
              <Grid key={headline.title} item>
                <NewsCard newsData={headline} />
              </Grid>
            ))}
          </Grid>
        )}
      </MainBox>
    </Container>
  );
};

export default Home;
