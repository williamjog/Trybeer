import React, { useState } from 'react';
import propTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import LocalMallIcon from '@material-ui/icons/LocalMall';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import styles from './styles';

export default function TopMenu({ pageTitle }) {
  const history = useHistory();
  const classes = styles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={ classes.root }>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={ clsx(classes.appBar, {
          [classes.appBarShift]: open,
        }) }
      >
        <Toolbar className={ classes.toolBarMenu }>
          <IconButton
            fontSize="large"
            color="inherit"
            // aria-label="open drawer"
            onClick={ handleDrawerOpen }
            // edge="start"
            className={ clsx(classes.menuButton, open && classes.hide) }
          >
            <MenuIcon style={ { fontSize: '50px' } } data-testid="top-hamburguer" />
          </IconButton>
          <Typography
            className={ classes.topMenuTitle }
            data-testid="top-menu"
          >
            {/* { pageTitle } */}
            Let it Beer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={ classes.drawer }
        open={ open }
      >
        <div className={ classes.drawerContainer }>
          <IconButton onClick={ handleDrawerClose }>
            {theme.direction === 'ltr' ? <ChevronLeftIcon style={ { fontSize: '60px' } } />
              : <ChevronRightIcon />}
          </IconButton>
          <Divider />
          <List className={ classes.listContainer }>
            <ListItem
              button
              data-testid="side-menu-item-orders"
              value="Pedidos"
              onClick={ () => history.push('/admin/orders') }
            >
              <ListItemIcon>
                <ShoppingCartIcon style={ { fontSize: '50px' } } />
              </ListItemIcon>
              Pedidos
            </ListItem>
            <ListItem
              button
              data-testid="side-menu-item-profile"
              onClick={ () => history.push('/admin/profile') }
            >
              <ListItemIcon>
                <PersonIcon style={ { fontSize: '50px' } } />
              </ListItemIcon>
              Perfil
            </ListItem>
            <ListItem
              button
              data-testid="side-menu-item-logout"
              onClick={ () => history.push('/login') }
            >
              <ListItemIcon>
                <ExitToAppIcon style={ { fontSize: '50px' } } />
              </ListItemIcon>
              Sair
            </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>
    </div>
  );
}

TopMenu.propTypes = {
  pageTitle: propTypes.string.isRequired,
};
