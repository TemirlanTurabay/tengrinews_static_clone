import React from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import { Divider } from '@mui/material';

const Article = () => {
  return (
    <div>
    <div style={{ width: '1000px', height: '100%', border: '0px 0px 1px 0px', padding: '70px 50px 20px 40px', gap: '100px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '1120px', height: '1586px', gap: '70px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '1120px', height: '150px', gap: '24px' }}>
            <div style={{ fontWeight: 500, fontSize: '14px', lineHeight: '18px', opacity: '50%', width: '243px', height: '18px', gap: '4px' }}>
                02 сентября 2014 18:12
            </div>
            <div style={{ fontWeight: 700, fontSize: '50px', lineHeight: '38px' }}>
                In the footsteps of great Central Asian explorer
            </div>
            <div style={{ fontWeight: 400, fontSize: '24px', lineHeight: '36px' }}>
                <div style={{height: 5, width: 150, backgroundColor: 'green'}}></div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100px', height: '24px', gap: '20px' }}>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
                    <RemoveRedEyeIcon style={{color: 'green'}}/>
                    <p>2997</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
                    <CommentIcon style={{color: 'green'}}/>
                    <p>1</p>
                </div>
                <ShareIcon style={{color: 'green'}}/>
            </div>
        </div>
        <Divider/>
        <img 
        style={{ objectFit: 'cover', width: '1120px', height: '480px', gap: '4px' }} 
        src="https://en.tengrinews.kz/userdata/gallery_en/2020/gallery_585/thumb_b/photo_11758.jpeg.webp" 
        alt="" />
        <Divider/>
        <div style={{ display: 'flex', flexDirection: 'column', width: '1120px', height: '640px', gap: '24px' }}>
            <div style={{ width: '1120px', height: '588px', fontWeight: 400, fontSize: '22px', lineHeight: '36px' }}>
                How long are you awake in the morning before you go online? 
                Perhaps it’s while you’re still lying in bed, using a news feed or social media as the needed stimulant to push you out from under the covers. 
                Or maybe you wait to open your device until after a warm shower and cup of coffee. 
                If you use sleep tracking apps, you might say you never signed off in the first place.
                <br />
                <br />
                And, like millions of others during the pandemic, the internet is probably what enabled you to stay in touch with family, or complete entire years of work and/or school remotely. 
                If this sounds familiar, then you live in a part of the world where an internet connection now counts as an essential utility — one that’s as easy to take for granted as the natural gas heating your shower water or the electricity powering your coffee maker.
                <br />
                <br />
                But if you think we’re hyperconnected today, just wait. Globally, just over 55% of today’s households have an internet connection. 
                This gap between the internet haves and have-nots is referred to as the digital divide, and access is skewed toward richer nations. 
                The gap is projected to close in the next decade as billions of homes connect to the internet for the first time and by 2030 it’s estimated that the technology industry could account for 20% of the global electricity demand. 
                This presents a troublesome dichotomy. On one hand, it supports livelihoods, educations, and bolsters the global economy; 
                on the other hand, the increased usage of the apps, websites, and services that we build will place an even greater strain on our already-overloaded power grids.
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Article;


