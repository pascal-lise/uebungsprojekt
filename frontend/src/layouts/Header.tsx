import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import './Header.sass';
import { useAuth } from "react-oidc-context";

export default function Header () {
  const auth = useAuth();

  function buttonLoginLogout() {
    const authenticated = auth.isAuthenticated
    return <Button style={{ right: '2rem', position: 'fixed' }} onClick={() => authenticated ? void auth.signoutRedirect() : void auth.signinRedirect()}>
      { authenticated ? 'Log out' : 'Log in' }
    </Button>
  }

  return (
    <header className='header'>
      <AppBar position='static' className='header'>
        <Toolbar>
          <Typography variant='h6'>Games Platform</Typography>
            { buttonLoginLogout() }
        </Toolbar>
      </AppBar>
    </header>
  )
}