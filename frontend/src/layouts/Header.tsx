import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import './Header.sass';
import { useAuth } from "react-oidc-context";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Header () {
  const auth = useAuth();
  const buttonStyle: React.CSSProperties = { 
    right: '2rem', position: 'fixed' 
  }

  function buttonLoginLogout() {
    if(auth.isAuthenticated) {
      return <Button style={buttonStyle} onClick={() => auth.signoutRedirect()}>Log out</Button>
    } else {
      return <Button style={buttonStyle} onClick={() => auth.signinRedirect()}>Log in</Button>
    }
  }

  useEffect(() => {
    const token = auth.user?.access_token
    if(token) {
      localStorage.setItem('token', token)
    }
  }, [auth.user?.access_token])

  return (
    <header className='header'>
      <AppBar position='static' className='header'>
        <Toolbar>
          <Link to="/" style={{ textDecoration: 'none', color: '#444' }}>
            <Typography variant='h6'>Game Platform</Typography>
          </Link>
          { buttonLoginLogout() }
        </Toolbar>
      </AppBar>
    </header>
  )
}