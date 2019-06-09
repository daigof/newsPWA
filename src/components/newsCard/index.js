import React from 'react';
import Moment from 'react-moment';

import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from '@material-ui/core/Link';
import { CardStyled, ExpandIconButton, ExpandIconButtonBox } from './styles';

const NewsCard = ({ newsData }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
        <CardMedia
          component="img"
          src={newsData.urlToImage}
          title={newsData.title}
        />
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
