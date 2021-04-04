import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';

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

function certifications(){
  return[
    'Salesforce Commerce Cloud Digital Developer',
    'IELTS',
    'Amalitech Performance Based Scholarship Graduate Training'
  ]
}

const  Experiencedata =  [  
             'Credential ID: 21986750',
             'Band (8) Test Report Form Number: 19GH009920COBN001A',
             '3X Winner',
      ]

export default function AwardsandCerts() {
  const classes = useStyles();
  const steps = certifications();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Awards and Certifications
        </Typography>
       
        <Stepper nonLinear orientation="vertical">
        {steps.map((data, i) => (
          <Step key={data} active={true}>
            <StepLabel>{data}</StepLabel>
            <StepContent>
              <Typography>{Experiencedata[i]}</Typography>
              <div className={classes.actionsContainer}></div>
            </StepContent>
          </Step>
        ))}
        </Stepper>


      </CardContent>
    </Card>
  );
}
