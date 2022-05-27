import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import './Header.sass';
import { useAuth } from "react-oidc-context";

export default function Header () {
  const auth = useAuth();

  return (
    <header className='header'>
      <AppBar position='static' className='header'>
        <Toolbar>
          <Typography variant='h6'>Games Platform</Typography>
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