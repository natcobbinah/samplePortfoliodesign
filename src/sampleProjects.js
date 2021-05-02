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

function sampleProjectNames(){
  return[
    'Directional drilling calculator',
    'Systems of Equations Solver',
    'Bulk sms app',
    'Payroll Management system',
    'Java Text writer',
    'Tank Calculator',
    'CollarPoints Calculator',
    'Dental Clinic Software',
    `To download and test these project source codes, they're all made available at: [Sourceforge & Github]`,
  ]
}

const  sampleProjectImages =  [  
            `Computes the true vertical depth, horizontal deviation at the end of build, 
              total measured depth and the various angles and radius given the kick-off point,
              build-up rate and other required data`,
             
            `For solving systems of equations with two or more unknown variables , 
             using gaussian and gauss-jordan elimination to solve the problems in its
             matrix simplifications`,
            
            `For sending of single and multiple messages using Bulk SMS platform.`,
            
            `A payroll management system designed and implemented using Springboot and Netflix OSS microservice Architecture`,
            
            `A sample text writer written in java to provide basic word editing, typing and formatting functions with extra functionalities`,
            
            `This calculator supports quadratic, trignometric, permutation, combination functions with basic 
             arithmetic operations, supporting one operator at a time, supports systems of equations ranging from
             two or more unkowns to any number of variables, and statistical operations`,

            `Searches through a matrix of any size, looking for a value which is the maximum in its row but minimum in its column`,
            
            `A desktop-based dental clinic application used in the management of business process and maintaining 
            professionalism (patient confidentiality, maintaining appropriate relation with patients) of any dental
            clinic which assist in the contribution of making a dental clinic reliable. Supports sms messaging, booking
            appointments, and communication over a local area intranet`,

            `https://sourceforge.net/u/fmg3ckali/profile && 
              https://github.com/natcobbinah`,
      ]

export default function SampleProjectsDemo() {
  const classes = useStyles();
  const steps = sampleProjectNames();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Sample Projects Demo ShowCase
        </Typography>
       
        <Stepper nonLinear orientation="vertical">
        {steps.map((data, i) => (
          <Step key={data} active={true}>
            <StepLabel>{data}</StepLabel>
            <StepContent>
              <Typography>{sampleProjectImages[i]}</Typography>
              <div className={classes.actionsContainer}></div>
            </StepContent>
          </Step>
        ))}
        </Stepper>

      </CardContent>
    </Card>
  );
}
