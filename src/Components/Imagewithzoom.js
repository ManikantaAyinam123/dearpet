import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
    '&:hover::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.3)',

    },
    '& img': {
      transition: 'transform 1s ease',
      width: '100%',
      height: 'auto',


    },
    '&:hover img': {
      transform: 'scale(1.1)',
    },
  },
}));


function Imagewithzoom({ src, alt, border }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={src} alt={alt} border={border || 'none'} />
    </div>
  );
}

export default Imagewithzoom;
