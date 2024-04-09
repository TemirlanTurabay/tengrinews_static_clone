import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import { Divider } from '@mui/material';

export default function Footer_verytop() {
  return (
    <BottomNavigation sx={{height: 70, width: '100%', color: 'white', backgroundColor: 'black'}}>
      <div style={{
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        gap: 20,
        marginTop: 10,
        }}>
        <img style={{height: 30, width: 200}} src={require("../images/logo_long_dark.png")}></img>
        <div style={{height: 5, width: 150, backgroundColor: 'green'}}></div>
      </div>
    </BottomNavigation>
  );
}