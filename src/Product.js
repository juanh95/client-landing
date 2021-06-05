import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';
import { Collapse } from 'react-collapse'
import './productCard.css'
import Consultation from './Consultation.js'

const useStyles = theme => ({
  root: {
    padding: '10px',
    borderRadius: 20,
    maxheight: '50px',
    maxwidth: 'auto'
  },
});

class Product extends React.Component {  
  constructor(props){
    super(props);
    this.state = {
      isComplete: false,
      open: true
    }

    this.handleComplete = this.handleComplete.bind(this);
    this.setOpen = this.setOpen.bind(this);
  }

  handleComplete(){
    this.setState({
      isComplete: !(this.state.isComplete)
    })
  }

  setOpen(){
    this.setState({
      open: !(this.state.open)
    })
  }

  render() {
    const { classes } = this.props
    var subtext; 
    var cardTitle;
    var shopButton;

    const defaultSubtext = <Typography variant="body2" color="textSecondary" component="p">Answer a few questions to get to know you!</Typography>;
    const startButton = <Button onClick={()=>this.setOpen()} size="small" color="primary" style={{float: 'left'}}> Start </Button> 
    const exitButton = <Button onClick={()=>this.setOpen()} size="small" color="primary" style={{float: 'left'}}> Exit </Button>

    if(this.props.type === "Influencer Application"){
      cardTitle = <Typography gutterBottom variant="h5" component="h2"> 
                    {this.props.type} 
                  </Typography>;
    } else {
      cardTitle = <Typography gutterBottom variant="h5" component="h2">
                    Virtual {this.props.type} Consultation
                  </Typography>;
      shopButton = <Button target="_blank" href={this.props.shopLink} 
                      size="small" 
                      color="primary" 
                      style={{float: 'right'}} 
                    >
                      Shop Monat {this.props.type} Products
                    </Button>;
    }

    switch(this.props.type){
      case "Hair": 
        subtext = <Typography variant="body2" color="textSecondary" component="p">
                    As you may know, I use and sell the most amazing and MOST HEALTHY, VEGAN , TOXIC FREE, SULFATE FREE, PARABEN FREE, and CRUELTY FREE HAIR PRODUCTS! 
                    I am so confident in saying that YOU and every person in general need to use this brand! It's incredible! I'm excited to see your transformation!
                    In order to put you on the proper hair care system
                    I need to ask you a few questions! 
                    The more I know about your hair, the better I can help you achieve your hair goal! 
                  </Typography>;
        break;

      case "Skin":
        subtext = <Typography variant="body2" color="textSecondary" component="p">
                    Driven by the vision to be the global leader in NATURALLY BASED anti-aging innovation, here's to celebrating the individuality 
                    and confidence that goes with looking and feeling your best at ANY age!
                    YOUR NEW SKINCARE ROUTINE IS JUST A FEW QUESTIONS AWAY! 
                    LET'S GET STARTED!
                  </Typography>;
        break;

      case "Influencer Application": 
        subtext = <Typography variant="body2" color="textSecondary" component="p">
                      Hi! If you clicked on here it's because you've probably seen how I work and you're interested in doing the same, with me! 
                      Working as a team leads to MUCH BIGGER results as opposed to working as a one man army. I LOVE and value my teammates and 
                      business partners so much, and I'm passionate about pouring into my team to grow together as a family. If you'd like to 
                      make money from home with my help and do so together, then fill this form out and I will contact you asap to get you on 
                      board and to making money asap! Look forward to meeting you and working together!
                  </Typography>;
        break;

      default:
        break;
    }

    return (
      <Card className={classes.root}>
          <Collapse isOpened={this.state.open}>
            <CardMedia
              component="img"
              style={{
                height: '200px',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
              image={this.props.image}
              title="Product Card"
            />
          </Collapse>
          <CardContent>
            {cardTitle}
            {this.state.open ? defaultSubtext : subtext}
            <Box style={{height: '20px'}} />
            <Collapse isOpened={!(this.state.open)}>
                <Consultation 
                  questions={this.props.survey}
                /> 
              <Box style={{height: '5px'}}/> 
            </Collapse>
          </CardContent>
        <CardActions>
          {this.state.open ? startButton : exitButton} 
          {shopButton}
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(useStyles)(Product)