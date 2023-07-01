import AssignmentInd from '@mui/icons-material/AssignmentInd';
import Forum from '@mui/icons-material/Forum';
import Key from '@mui/icons-material/Key';
import LibraryBooks from '@mui/icons-material/LibraryBooks';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../UserContext';
import { useNavigate } from 'react-router-dom';

function Sidebar({ items }) {
    const userInfo = React.useContext(UserContext);
    const loggedIn = !(!userInfo.username);
    const navigate = useNavigate();
  
    const logOut = () => {
      userInfo.setUsername(undefined)
      navigate('/');
    }

    return (
        <div>
            <Toolbar><h1>Wiki + Fórum</h1></Toolbar>
            <Divider />
            <List>
            {items.filter((item) => { return (loggedIn && item.showLoggedIn) || (!loggedIn && item.showLoggedOff) }).map((item, index) => (
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
            {loggedIn &&
                <ListItem>
                <ListItemButton onClick={() => logOut()}>
                    <ListItemIcon>
                    {0 % 2 === 0 ? <Key /> : <AssignmentInd />}
                    </ListItemIcon>
                    <ListItemText primary='Logout' />
                </ListItemButton>
                </ListItem>
            }
            </List>
        </div>
    );
}

export default Sidebar;