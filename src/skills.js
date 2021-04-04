import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

function skillsContent(){
  return[
    'Java',
    'SQL/NOSQL',
    'Version Control',
    'SPA Frameworks',
    'Microcontrollers'
  ]
}

const  skillsData =  [  
             'JSP, JakartaEE, Springboot, MicroServices,Rest HATEOS',
             'MySQL, MSSQL, Postgres, Oracle,mongoDB',
             'Git, SubVersion',
             'React, Angular, JavaScript, TypeScript',
             'Arduino, PIC, Proteus'
]

const skillsRating = [ 
  <PrettoSlider valueLabelDisplay="auto"  defaultValue={75} valueLabelDisplay="on"/>,
  <PrettoSlider valueLabelDisplay="auto"  defaultValue={75} valueLabelDisplay="on"/>,
  <PrettoSlider valueLabelDisplay="auto"  defaultValue={70} valueLabelDisplay="on"/>,
  <PrettoSlider valueLabelDisplay="auto"  defaultValue={70} valueLabelDisplay="on"/> ,
  <PrettoSlider valueLabelDisplay="auto"  defaultValue={60} valueLabelDisplay="on"/>
]

export default function Skills() {
  const classes = useStyles();
  const steps = skillsContent();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Skills, Tools and Technologies
        </Typography>
        
        <Stepper nonLinear orientation="vertical">
        {steps.map((data, i) => (
          <Step key={data} active={true}>
            <StepLabel>{data}</StepLabel>
            <StepContent>
              <Typography>{skillsData[i]}</Typography>
              {i === 0 ? skillsRating[0] : 
               i === 1 ? skillsRating[1] : 
               i === 2 ? skillsRating[2]  : 
               i === 3 ? skillsRating[3] : 
               i === 4 ? skillsRating[4] :
               "Nothing" 
              }
              <div className={classes.actionsContainer}></div>
            </StepContent>
          </Step>
        ))}
        </Stepper>
      </CardContent>
    </Card>
  );
}
