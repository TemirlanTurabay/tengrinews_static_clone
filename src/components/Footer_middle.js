import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function FooterMiddle() {
  const footerLinks = ['About', 'Contact editorial', 'Jobs', 'Advertising'];

  return (
    <BottomNavigation sx={{ height: 80, width: '100%', color: 'white', backgroundColor: 'black' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 40,
          marginTop: 10,
        }}
      >
        <div style={{ marginTop: 20 }}>
          {footerLinks.map((label) => (
            <Button sx={{ color: 'white', fontWeight: 700, fontSize: 12 }}>
              {label}
            </Button>
          ))}
        </div>
        <div style={{ marginTop: 5, display: 'flex', gap: 10 }}>
          <p>
            <a href="tel:+7770014499">Редакция: +7 (777) 001 44 99</a>
          </p>
          <p>
            <a href="tel:+77003888188">Advertising: +7 (700) 3 888 188</a>
          </p>
        </div>
        <div style={{ marginTop: 20, display: 'flex', gap: 10 }}>
          <InstagramIcon />
          <XIcon />
          <YouTubeIcon />
          <FacebookIcon />
          <TelegramIcon />
          <WhatsAppIcon />
        </div>
      </div>
    </BottomNavigation>
  );
}
