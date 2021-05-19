import React, { useState }from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Box from '@material-ui/core/Box'

const Consultation = (props) => {
  const [page, setPage] = useState(1)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [hairType, setHairType] = useState('')
  const [scalpType, setScalpType] = useState('')
  const [frizzy, setFrizzy] = useState('')
  const [endsType, setEndsType] = useState('')
  const [washFrequency, setWashFrequency] = useState('')
  const [chemTreated, setChemTreated] = useState('')
  const [colorTreated, setColorTreated] = useState('')
  const [heatingFrequency, setHeatingFrequency] = useState('')
  const [washOrGo, setWashOrGo] = useState('')
  const [mainConcern, setMainConcern] = useState('')
  const [contact, setContact] = useState('')
  const [igName, setIgName] = useState('')
  const [prefContact, setPrefContact] = useState('')
  const [complete, setComplete] = useState(false)

  // function handleSubmit(event) {
    
  // }

  function handleNext(event) {
    // alert(`This was the input ${input}`)
    setPage(page+1);
  }

  function handlePrev(event) {
    // alert('page went back')
    setPage(page-1);
  }

  function handleSubmit(event) {
    var data = {
      email: email,
      name: name,
      hairType: hairType,
      scalpType: scalpType,
      frizzy: frizzy, 
      endsType: endsType, 
      washFrequency: washFrequency,
      chemTreated: chemTreated,
      colorTreated: colorTreated, 
      heatingFrequency: heatingFrequency,
      washOrGo: washOrGo, 
      mainConcern: mainConcern, 
      contact: contact,
      igName: igName, 
      prefContact: prefContact,
    }

    /*
      TODO: Export of JSON file readable to server
    */
    
    props.handleComplete()
  }

  switch(page){
    
    /* Name Question*/
    case 1: 
    return (
      <React.Fragment>
        <TextField 
        value={name}
        onInput={ e => setName(e.target.value)}
        id="standard-basic" 
        label="First and Last Name" 
        style={{width: '200px'}}
        />
        <Button onClick={() => handlePrev()}>Prev</Button>
        <Button onClick={() => handleNext()}>Next</Button>
      </React.Fragment>
    )
    
    /* Hair Type Question */
    case 2: 
    return (
      <React.Fragment>
        <Box style={{height: '20px'}}/>
        <FormControl component="fieldset">
          <FormLabel style={{color: 'black'}} component="legend"> What is your hair like? </FormLabel>
          <RadioGroup aria-label="hair-type" name="hair-type" value={hairType} onChange={e => setHairType(e.target.value)}>
            <FormControlLabel value="Straight" control={<Radio />} label="Straight" />
            <FormControlLabel value="Wavy" control={<Radio />} label="Wavy" />
            <FormControlLabel value="Curly" control={<Radio />} label="Curly" />
          </RadioGroup>
        </FormControl>
        <Button onClick={() => handlePrev()}>Prev</Button>
        <Button onClick={() => handleNext()}>Next</Button>
      </React.Fragment>
    )
    
    /* Scalp Type Question */
    case 3: 
    return (
      <React.Fragment>
        <Box style={{height: '20px'}}/>
        <FormControl component="fieldset">
          <FormLabel style={{color: 'black'}} component="legend"> What is your scalp like? </FormLabel>
          <RadioGroup aria-label="scalp-type" name="scalp-type" value={scalpType} onChange={e => setScalpType(e.target.value)}>
            <FormControlLabel value="Dry" control={<Radio />} label="Dry" />
            <FormControlLabel value="Greasy / Oily" control={<Radio />} label="Greasy / Oily" />
            <FormControlLabel value="Normal" control={<Radio />} label="Normal" />
          </RadioGroup>
        </FormControl>
        <Button onClick={() => handlePrev()}>Prev</Button>
        <Button onClick={() => handleNext()}>Next</Button>
      </React.Fragment>
    )
    
    /* Frizziness Question */
    case 4: 
    return (
      <React.Fragment>
        <Box style={{height: '20px'}}/>
        <FormControl component="fieldset">
          <FormLabel style={{color: 'black'}} component="legend"> Do you struggle with frizziness? </FormLabel>
          <RadioGroup aria-label="frizziness" name="frizziness" value={frizzy} onChange={e => setFrizzy(e.target.value)}>
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <Button onClick={() => handlePrev()}>Prev</Button>
        <Button onClick={() => handleNext()}>Next</Button>
      </React.Fragment>
    )
    

    /* Ends Type Question */
    case 5: 
    return (
      <React.Fragment>
        <Box style={{height: '20px'}}/>
        <FormControl component="fieldset">
          <FormLabel style={{color: 'black'}} component="legend"> How are your ends? </FormLabel>
          <RadioGroup aria-label="ends-type" name="ends-type" value={endsType} onChange={e => setEndsType(e.target.value)}>
            <FormControlLabel value="Split" control={<Radio />} label="Split" />
            <FormControlLabel value="Good" control={<Radio />} label="Good" />
            <FormControlLabel value="Ok" control={<Radio />} label="Ok" />
          </RadioGroup>
        </FormControl>
        <Button onClick={() => handlePrev()}>Prev</Button>
        <Button onClick={() => handleNext()}>Next</Button>
      </React.Fragment>
    )
      
    /* Hair Wash Frequency Question */
    case 6: 
    return (
      <React.Fragment>
        <Box style={{height: '20px'}}/>
        <FormControl component="fieldset">
          <FormLabel style={{color: 'black'}} component="legend"> How often do you wash your hair? </FormLabel>
          <RadioGroup aria-label="wash-frequency" name="wash-frequency" value={washFrequency} onChange={e => setWashFrequency(e.target.value)}>
            <FormControlLabel value="1-3 Times a Week" control={<Radio />} label="1-3 Times a Week" />
            <FormControlLabel value="Daily" control={<Radio />} label="Daily" />
            <FormControlLabel value="Every Other Day" control={<Radio />} label="Every Other Day" />
          </RadioGroup>
        </FormControl>
        <Button onClick={() => handlePrev()}>Prev</Button>
        <Button onClick={() => handleNext()}>Next</Button>
      </React.Fragment>
    )
    
    /* Chem Treatment Question */
    case 7: 
    return (
      <React.Fragment>
        <Box style={{height: '20px'}}/>
        <FormControl component="fieldset">
          <FormLabel style={{color: 'black'}} component="legend"> Do you have any chemical treatments on your hair? </FormLabel>
          <RadioGroup aria-label="chem-treatment" name="chem-treatment" value={chemTreated} onChange={e => setChemTreated(e.target.value)}>
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <Button onClick={() => handlePrev()}>Prev</Button>
        <Button onClick={() => handleNext()}>Next</Button>
      </React.Fragment>
    )
    
    /* Color Treatment Question */
    case 8: 
    return (
      <React.Fragment>
        <Box style={{height: '20px'}}/>
        <FormControl component="fieldset">
          <FormLabel style={{color: 'black'}} component="legend"> Is your hair color treated? </FormLabel>
          <RadioGroup aria-label="color-treatment" name="color-treatment" value={colorTreated} onChange={e => setColorTreated(e.target.value)}>
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <Button onClick={() => handlePrev()}>Prev</Button>
        <Button onClick={() => handleNext()}>Next</Button>
      </React.Fragment>
    )

    /* Heating Tool Frequency Question */
    case 9: 
    return (
      <React.Fragment>
        <Box style={{height: '20px'}}/>
        <FormControl component="fieldset">
          <FormLabel style={{color: 'black'}} component="legend"> How often do you use heating tools on your hair such as blow dryers, straighteners, or curlers? </FormLabel>
          <RadioGroup aria-label="heating-frequency" name="heating-frequency" value={heatingFrequency} onChange={e => setHeatingFrequency(e.target.value)}>
            <FormControlLabel value="Every Day" control={<Radio />} label="Every Day" />
            <FormControlLabel value="1-3 Times A Week" control={<Radio />} label="1-3 Times A Week" />
            <FormControlLabel value="Hardly Ever" control={<Radio />} label="Hardly Ever" />
            <FormControlLabel value="Never" control={<Radio />} label="Never" />
          </RadioGroup>
        </FormControl>
        <Button onClick={() => handlePrev()}>Prev</Button>
        <Button onClick={() => handleNext()}>Next</Button>
      </React.Fragment>
    )

    /* Wash / Go Question */
    case 10: 
    return (
      <React.Fragment>
        <Box style={{height: '20px'}}/>
        <FormControl component="fieldset">
          <FormLabel style={{color: 'black'}} component="legend"> Are you a wash and go or do you style your hair every day? </FormLabel>
          <RadioGroup aria-label="wash-go" name="wash-go" value={washOrGo} onChange={e => setWashOrGo(e.target.value)}>
            <FormControlLabel value="Wash and Go" control={<Radio />} label="Wash and Go" />
            <FormControlLabel value="Style" control={<Radio />} label="Style" />
          </RadioGroup>
        </FormControl>
        <Button onClick={() => handlePrev()}>Prev</Button>
        <Button onClick={() => handleNext()}>Next</Button>
      </React.Fragment>
    )

    /* Main Concern Question */
    case 11: 
    return (
      <React.Fragment>
        <Box style={{height: '20px'}}/>
        <FormControl component="fieldset">
          <FormLabel style={{color: 'black'}} component="legend"> What is your main concern? </FormLabel>
          <RadioGroup aria-label="main-concern" name="main-concern" value={mainConcern} onChange={e => setMainConcern(e.target.value)}>
            <FormControlLabel value="Hydration" control={<Radio />} label="Hydration" />
            <FormControlLabel value="Volume" control={<Radio />} label="Volume" />
            <FormControlLabel value="Shine and Smoothness" control={<Radio />} label="Shine and Smoothness" />
            <FormControlLabel value="More Texture" control={<Radio />} label="More Texture" />
            <FormControlLabel value="Hair Growth" control={<Radio />} label="Hair Growth" />
          </RadioGroup>
        </FormControl>
        <Button onClick={() => handlePrev()}>Prev</Button>
        <Button onClick={() => handleNext()}>Next</Button>
      </React.Fragment>
    )

    /* Contact  Question */
    case 12: 
    return (
      <React.Fragment>
        <Box style={{height: '20px'}}/>
        <FormControl component="fieldset">
          <FormLabel style={{color: 'black'}} component="legend"> Would you like me to contact you with your ideal hair pack? </FormLabel>
          <RadioGroup aria-label="contact" name="contact" value={contact} onChange={e => setContact(e.target.value)}>
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />          
          </RadioGroup>
        </FormControl>
        <Button onClick={() => handlePrev()}>Prev</Button>
        <Button onClick={() => handleNext()}>Next</Button>
      </React.Fragment>
    )

     /* IG Name Question*/
     case 13: 
     return (
       <React.Fragment>
         <TextField 
         value={igName}
         onInput={ e => setIgName(e.target.value)}
         id="standard-basic" 
         label="What is your IG Name?" 
         style={{width: '200px'}}
         />
         <Button onClick={() => handlePrev()}>Prev</Button>
         <Button onClick={() => handleNext()}>Next</Button>
       </React.Fragment>
     )

     /* Email Question*/
     case 14: 
     return (
       <React.Fragment>
         <TextField 
         value={email}
         onInput={ e => setEmail(e.target.value)}
         id="standard-basic" 
         label="Email: " 
         style={{width: '200px'}}
         />
         <Button onClick={() => handlePrev()}>Prev</Button>
         <Button onClick={() => handleNext()}>Next</Button>
       </React.Fragment>
     )

     /* Preferred Contact Question*/
     case 15: 
     return (
      <React.Fragment>
        <FormControl component="fieldset">
          <FormLabel style={{color: 'black'}} component="legend"> How do you prefer me to contact you? </FormLabel>
          <RadioGroup aria-label="preferred-contact" name="preferred-contact" value={prefContact} onChange={e => setPrefContact(e.target.value)}>
            <FormControlLabel value="E-Mail" control={<Radio />} label="E-Mail" />
            <FormControlLabel value="Call" control={<Radio />} label="Call" />    
            <FormControlLabel value="Text" control={<Radio />} label="Text" />       
          </RadioGroup>
        </FormControl>
        <Button onClick={() => handlePrev()}>Prev</Button>
        <Button variant='contained' color='primary' onClick={() => handleSubmit()}>Submit</Button>
      </React.Fragment>
    )

    default: console.log('done')
  }
}

export default Consultation
