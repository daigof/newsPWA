import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import LoadingSpinner from 'components/loadingSpinner';
import NewsCard from 'components/newsCard';
import { MainBox } from './styles';
import { ENDPOINT } from 'utils/constants';
import { capitalize } from 'utils/helpers';

const Category = ({ match }) => {
  const { category } = match.params;
  const [categoryNews, setCategoryNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // common closure trick in Effects to call on demand
    const fetchCategoryNews = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        // magic of async/await
        const result = await axios(`${ENDPOINT}&category=${category}`);
        setCategoryNews(result.data.articles);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchCategoryNews();
  }, [category]);

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
          {capitalize(category)} News
        </Typography>

        {/* Should be more elaborate: <Redirect/> route or Component like Spiner but this will do for now */}
        {isError && <div>Something went wrong ...</div>}

        {isLoading ? (
          <LoadingSpinner />
        ) : (
          // I am an expert in pure css Flexbox but trying this Material UI component because I chose the Lib
          <Grid container justify="center" spacing={2}>
            {categoryNews.map(headline => (
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

export default Category;
