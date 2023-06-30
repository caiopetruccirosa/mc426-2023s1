import AssignmentInd from '@mui/icons-material/AssignmentInd';
import Forum from '@mui/icons-material/Forum';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import Key from '@mui/icons-material/Key';
import LibraryBooks from '@mui/icons-material/LibraryBooks';
import MenuIcon from '@mui/icons-material/Menu';
import RateReviewIcon from '@mui/icons-material/RateReview';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Register from './Register';
import UserContext from './UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Article from './Article';
import CreatePage from './CreatePage';
import CreatePost from './CreatePost';
import ForumHome from './ForumHome';
import Info from './Info';
import Login from './Login';
import PostAnswers from './PostAnswers';
import Wiki from './Wiki';
const drawerWidth = 240;
const appBarHeight = "60px";

function ResponsiveDrawer(props) {
  const homes = [
    { title: "Wiki", route: "/wiki" },
    { title: "Fórum", route: "/forum" },
  ]
  const loginItems = [
    { title: "Login", route: "/login" },
    { title: "Cadastro", route: "/register" },
  ]

  const creationItems = [
    { title: "Criar artigo", route: "/create-article" },
    { title: "Criar post", route: "/create-post" },
  ]

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [id, setId] = React.useState("");
  const userInfo = React.useContext(UserContext);
  const loggedIn = !(!userInfo.username);
  const navigate = useNavigate();

  const logOut = () => {
    userInfo.setUsername(undefined)
    navigate('/');
  }

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


  function logout() {

    setEmail('')
  }

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
        {!loggedIn && loginItems.map((item, index) => (
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
        {loggedIn &&
          <>
            <ListItem>
              <ListItemButton onClick={() => logOut()}>
                <ListItemIcon>
                  {0 % 2 === 0 ? <Key /> : <AssignmentInd />}
                </ListItemIcon>
                <ListItemText primary='Logout' />
              </ListItemButton>
            </ListItem>
          </>
        }
      </List>
      <Divider />
      <List>
        {creationItems.map((item, index) => (
          <Link index={index} className='link-custom' to={item.route}>
            <ListItem key={index}>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <HistoryEduIcon /> : <RateReviewIcon />}
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