import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import './Header.sass';
import { useAuth } from "react-oidc-context";
import { Link } from 'react-router-dom';

export default function Header () {
  const auth = useAuth();

  return (
    <header className='header'>
      <AppBar position='static' className='header'>
        <Toolbar>
          <Link to="/" style={{ textDecoration: 'none', color: '#444' }}>
            <Typography variant='h6'>Game Platform</Typography>
          </Link>
          { 
            auth.isAuthenticated ?
              <Button style={{ right: '2rem', position: 'fixed' }} onClick={() => void auth.signoutRedirect()}>Log out</Button> :
              <Button style={{ right: '2rem', position: 'fixed' }} onClick={() => void auth.signinRedirect()}>Log in</Button> 
          }
        </Toolbar>
      </AppBar>
    </header>
  )
}