import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
// import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';
import image1 from './images/hair-consultation.jpg'
// import { AnimateSharedLayout, motion } from 'framer-motion';
// import { CSSTransition } from 'react-transition-group'
import { Collapse } from 'react-collapse'
import './productCard.css'
import Consultation from './Consultation.js'
// import SimpleCard from './sampleCard'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    padding: '10px',
    borderRadius: 20,
    maxheight: '50px'
  },
  // media: {
  //   height: open ? 250 : 150,
  //   borderTopLeftRadius: 20,
  //   borderTopRightRadius: 20,
  // },
});

export default function Product() {
  const classes = useStyles();  
  const [open, setOpen] = useState(true);
  const [isComplete, setIsComplete] = useState(false)
  
  const handleComplete = () => {
    setIsComplete(!isComplete)
  }

  return (
    <Card className={classes.root}>
      {/* <CardActionArea> */}
        <Collapse isOpened={open}>
          <CardMedia
            component="img"
            style={{
              height: '200px',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
            image={image1}
            title="Hair Consultation"
          />
        </Collapse>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Virtual Hair Consulation
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Answer a few questions to get to know you and your hair!
          </Typography>
          <Collapse isOpened={!open}>
            {/* Questionaire goes here! */}
            {!isComplete ? <Consultation handleComplete={handleComplete} /> : <h1>Your consultation is under Review!</h1>}
            <Box style={{height: '50px'}} />
          </Collapse>
        </CardContent>
      {/* </CardActionArea> */}
      <CardActions>
        {open ? <Button onClick={()=>setOpen(!open)} size="small" color="primary" style={{float: 'left'}}> Start </Button> 
        : 
        <Button onClick={()=>setOpen(!open)} size="small" color="primary" style={{float: 'left'}}> Exit </Button>
        }
        <Button target="_blank" href="https://carolinajherrera.mymonat.com/all-our-products/" 
          size="small" 
          color="primary" 
          style={{float: 'right'}}
        >
          Shop Monat Hair Products
        </Button>
      </CardActions>
    </Card>
  )
}