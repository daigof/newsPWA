import React, { useEffect } from 'react';
import Moment from 'react-moment';
import { useInView } from 'react-intersection-observer';

import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from '@material-ui/core/Link';
import {
  CardStyled,
  ExpandIconButton,
  ExpandIconButtonBox,
  NewsImage,
  NewsImageContainer,
} from './styles';
import placeholder from './placeholder.png';

const NewsCard = ({ newsData }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // Libraries are migrating/encouraging Hooks by default. Yayyyyy!!!
  const [ref, inView, intersectionEntry] = useInView({
    triggerOnce: true,
    // Intentionally LARGE margin to see the placeholder before loading
    rootMargin: '-150px',
  });

  useEffect(() => {
    const loadImage = () => {
      const image = intersectionEntry.target;
      image.setAttribute('src', image.getAttribute('data-src'));
      image.removeAttribute('data-src');
    };
    // inView && console.log(newsData.title);
    inView && loadImage();
  }, [inView, intersectionEntry]);

  return (
    <CardStyled>
      <CardHeader
        title={<Typography variant="subtitle1">{newsData.title}</Typography>}
        subheader={
          <Typography variant="caption">
            <Moment fromNow>{newsData.publishedAt}</Moment>
          </Typography>
        }
      />

      {newsData.urlToImage && (
        <NewsImageContainer filter={inView ? 'filter' : ''}>
          <NewsImage
            ref={ref}
            src={placeholder}
            data-src={newsData.urlToImage}
            alt={newsData.title}
          />
        </NewsImageContainer>
      )}

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {newsData.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
        <ExpandIconButtonBox expanded={expanded}>
          <ExpandIconButton
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </ExpandIconButton>
        </ExpandIconButtonBox>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            <Link href={newsData.url} target="_blank">
              Url to Article
            </Link>
          </Typography>
          {newsData.content && (
            <Typography paragraph>{newsData.content}</Typography>
          )}
        </CardContent>
      </Collapse>
    </CardStyled>
  );
};

export default NewsCard;
