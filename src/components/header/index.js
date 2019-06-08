import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { CATEGORIES } from 'utils/constants';
import { CategoryItem } from './styles';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container maxWidth="lg">
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">
            <Link component={RouterLink} to="/" color="inherit">
              Home
            </Link>
          </Button>
          <Button
            aria-controls="category-menu"
            aria-haspopup="true"
            onClick={handleClick}
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
        onClose={handleClose}
      >
        {CATEGORIES.map(category => (
          <MenuItem onClick={handleClose} key={category}>
            <CategoryItem>{category}</CategoryItem>
          </MenuItem>
        ))}
      </Menu>
    </Container>
  );
};

export default Header;
