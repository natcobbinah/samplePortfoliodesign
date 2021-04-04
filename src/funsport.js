import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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

function funContent(){
  return[
    'Jogging',
    'Strength Training',
    'Reading',
    'Programming',
    'Playing Chess'
  ]
}

export default function FunSport() {
  const classes = useStyles();
  const steps = funContent();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          FunSport
        </Typography>

        <Stepper nonLinear>
        {steps.map((data, i) => (
          <Step key={data} active={true}>
            <StepLabel>{data}</StepLabel>
            <StepContent>
              <div className={classes.actionsContainer}></div>
            </StepContent>
          </Step>
        ))}

        </Stepper>
      </CardContent>
    </Card>
  );
}
