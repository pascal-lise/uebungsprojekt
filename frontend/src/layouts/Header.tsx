import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import './Header.sass'

export default class Header extends React.Component {
  render() {
    return (
        <AppBar position='static' className='header'>
          <Toolbar>
            <Typography variant='h5'>Spiele-Plattform</Typography>
          </Toolbar>
        </AppBar>
    )
  }
}