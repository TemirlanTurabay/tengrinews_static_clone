import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import ComputerIcon from '@mui/icons-material/Computer';

export default function Footer_bottom() {
  return (
    <BottomNavigation sx={{height: 80, width: '100%', color: 'white', backgroundColor: 'black'}}>
      <div style={{
        display: 'flex', 
        flexDirection: 'row', 
        gap: 20,
        marginTop: 10 
        }}>
        <p>© 2008-2024 LLP «EML»</p>
        <p>Правила использования материалов</p>
        <p>Privacy Policy</p>
        <p>Скачать наше приложение</p>
        <div style={{marginTop: 20, display: 'flex', gap: 10}}>
          <AppleIcon/>
          <AndroidIcon/>
          <ComputerIcon/>
        </div>
      </div>
    </BottomNavigation>
  );
}