import React from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useStateValue } from 'utils/state';
import { CATEGORIES } from 'utils/constants';
import { CategoryItem } from './styles';

const Header = ({ history }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [, dispatch] = useStateValue();

  const handleMenuClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCategorySelect = category => {
    handleMenuClose();
    dispatch({
      type: 'changeCategory',
      category,
    });
    history.push(`/category/${category}`);
  };

  return (
    <Container maxWidth="lg">
      <AppBar position="fixed">
        <Toolbar>
          <Button color="inherit">
            <Link component={RouterLink} to="/" color="inherit">
              Home
            </Link>
          </Button>
          <Button
            aria-controls="category-menu"
            aria-haspopup="true"
            onClick={handleMenuClick}
            color="inherit"
          >
            Categories
          </Button>
        </Toolbar>
      </AppBar>

      <Menu
        id="category-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {CATEGORIES.map(category => (
          <MenuItem
            onClick={() => handleCategorySelect(category)}
            key={category}
          >
            <CategoryItem>{category}</CategoryItem>
          </MenuItem>
        ))}
      </Menu>
    </Container>
  );
};

// Since it is not a Component of <Route/> I use withRouter to expose {history} prop
export default withRouter(Header);
