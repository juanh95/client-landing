import React from 'react'
import Product from './Product';
import Banner from 'react-js-banner'
import Box from '@material-ui/core/Box'
import hairQuestions from './hairQuestions'
import skinQuestions from './skinQuestions'
import influencerQuestions from './influencerQuestions'
import hairConsultationImage from './images/hair-consultation.jpg'
import skinConsultationImage from './images/skin-consultation.jpg'
import influencerImage from './images/influencer.jpg'
import { isBrowser } from 'react-device-detect';

class App extends React.Component {
  render(){
    var direction; 
    if(isBrowser){
      direction = 'row'
    } else {
      direction = 'column'
    }
    return (
      <div>
        <Banner 
          title="Flash Sale NOW Live!! 50% OFF"
          css={{color: "#FFFFFF", backgroundColor: "red", fontFamily: "arial"}}
        />
        <Box style={{width: 'auto'}} display="flex" flexDirection={direction} p={1} m={1}>
          <Box p={1}>
            <Product
              type="Hair"
              shopLink="https://carolinajherrera.mymonat.com/all-our-products/"
              survey={hairQuestions}
              image={hairConsultationImage}
            />
          </Box>
          <Box p={1}>
            <Product 
              type="Skin"
              shopLink="https://carolinajherrera.mymonat.com/skincare/"
              survey={skinQuestions}
              image={skinConsultationImage}
            />
          </Box>
          <Box p={1}>
            <Product 
              type="Influencer Application"
              survey={influencerQuestions}
              image={influencerImage}
            />
          </Box>
        </Box>
      </div>
    )
  }
}

export default App;
