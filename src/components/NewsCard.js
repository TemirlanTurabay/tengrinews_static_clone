import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CommentIcon from '@mui/icons-material/Comment';

export default function NewsCard({image, title, date, watches, comments}) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia 
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.primary" style={{fontWeight: 700, fontSize: 20}}>
          {title}
        </Typography>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <p>{date}</p>
        <CardActions disableSpacing>
          <IconButton aria-label="watched_amount">
            <RemoveRedEyeIcon />
            <p style={{fontSize: 15}}>{watches}</p>
          </IconButton>
          <IconButton aria-label="comment_amount">
            <CommentIcon />
            <p style={{fontSize: 15}}>{comments}</p>
          </IconButton>
        </CardActions>
        </div>
      </CardContent>
    </Card>
  );
}