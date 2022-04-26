import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
        <AppBar position='static' className='header'>
          <Toolbar>
            <Typography variant='h5'>Games Platform</Typography>
          </Toolbar>
        </AppBar>
    )
  }
}