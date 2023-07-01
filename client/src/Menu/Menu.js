import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from '../Register';
import Article from '../Article';
import CreatePage from '../CreatePage';
import CreatePost from '../CreatePost';
import ForumHome from '../ForumHome';
import Info from '../Info';
import Login from '../Login';
import PostAnswers from '../PostAnswers';
import Wiki from '../Wiki';
import Sidebar from './Sidebar';

const drawerWidth = 240;
const appBarHeight = "60px";

function ResponsiveDrawer(props) {
  const menuItems = [
    { title: "Wiki", route: "/wiki", showLoggedIn: true, showLoggedOff: false },
    { title: "Fórum", route: "/forum", showLoggedIn: true, showLoggedOff: false },
    { title: "Login", route: "/login", showLoggedIn: false, showLoggedOff: true },
    { title: "Cadastro", route: "/register", showLoggedIn: false, showLoggedOff: true },
    { title: "Criar artigo", route: "/create-article", showLoggedIn: true, showLoggedOff: false },
    { title: "Criar post", route: "/create-post", showLoggedIn: true, showLoggedOff: false },
  ]

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}

        style={{ background: '#FFFFFF' }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <Sidebar items={menuItems} />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          <Sidebar items={menuItems} />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` }, mt: appBarHeight, pt: "20px" }}
      >
        <main>
          <Routes>
            <Route path="/" element={<Info />} />
            <Route path="/wiki" element={<Wiki />} />
            <Route path="/forum" element={<ForumHome />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forum/answers/:postId" element={<PostAnswers />} />
            <Route path="/create-article" element={<CreatePage />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/login" element={<Login />} />
            <Route path="/article" element={<Article />} />
          </Routes>
        </main>
      </Box>
    </Box >
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;