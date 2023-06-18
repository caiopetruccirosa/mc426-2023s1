import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import AssignmentInd from '@mui/icons-material/AssignmentInd';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Forum from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Key from '@mui/icons-material/Key';
import LibraryBooks from '@mui/icons-material/LibraryBooks';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import UserContext from './UserContext';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Register from './Register';
import LoginTeste from './Menu';
import MC102 from './MC102';
import MC202 from './MC202';
import MC322 from './MC322';
import Info from './Info';
import axios from 'axios';
import ForumHome from './ForumHome';
import Home from './Home';
import Login from './Login';
import { Button } from '@mui/material';
import { Navigate } from "react-router-dom";
import CreatePost from './CreatePage';


const drawerWidth = 240;
const appBarHeight = "60px";

function ResponsiveDrawer(props) {
  const homes = [
    { title: "Wiki", route: "/home" },
    { title: "Fórum", route: "/forum" },
  ]
  const items = [
    { title: "MC102", route: "/MC102" },
    { title: "MC202", route: "/MC202" },
    { title: "MC322", route: "/MC322" },
  ]
  const loginItems = [
    { title: "Login", route: "/login" },
    { title: "Cadastro", route: "/register" },
    { title: "Criar página", route: "/create-page" },
  ]

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [id, setId] = React.useState("");
  const userInfo = React.useContext(UserContext);

  React.useEffect(() => {
    axios
      .post(
        "https://api-todo-list-six.vercel.app/user",
        { id: userInfo.id },
        { withCredentials: true }
      )
      .then((response) => {
        setEmail(response.data.email);
      });
  }, []);

  //FUNÇÃO MOCKADA ENQUANTO N TEMOS O ENDPOINT


  function logout() {

    setEmail('')
  }

  // function logout(){
  //   axios.post('https://api-todo-list-six.vercel.app/logout', {}, {withCredentials:true})
  //   .then(()=>{
  //     setEmail('')
  //   })
  // }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar><h1>Wiki + Fórum</h1></Toolbar>
      <Divider />

      <List>
        {homes.map((item, index) => (
          <Link index={index} className='link-custom' to={item.route}>
            <ListItem key={index}>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <LibraryBooks /> : <Forum />}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          </Link >
        ))}
      </List>
      <List>
        {loginItems.map((item, index) => (
          <Link index={index} className='link-custom' to={item.route}>
            <ListItem key={index}>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <Key /> : <AssignmentInd />}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          </Link >
        ))}
      </List>
      <Divider />
      <List>
        {items.map((item, index) => (
          <Link index={index} className='link-custom' to={item.route}>
            <ListItem key={index}>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          </Link >
        ))}
      </List>
      <Divider />
    </div>
  );


  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
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
          <Typography variant="h6" noWrap component="div">
            TITULO
          </Typography>
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
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` }, mt: appBarHeight }}
      >
        <main>
          <Routes>
            <Route path="/" element={<Info />} />
            <Route path="/home" element={<Home />} />
            <Route path="/forum" element={<ForumHome />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create-page" element={<CreatePost />} />
            <Route path="/login" element={<Login />} />
            <Route path="/MC102" element={<MC102 />} />
            <Route path="/MC202" element={<MC202 />} />
            <Route path="/MC322" element={<MC322 />} />
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