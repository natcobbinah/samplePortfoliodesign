import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function experienceStages(){
  return[
    'Software Developer and Engineer',
    'Salesforce Certified Commerce Cloud digital developer',
    'Software Development and Engineering Trainee',
    'Teaching Assistant',
    'Intern'
  ]
}

const  Experiencedata =  [  
              `Work on both frontend and backend technologies, SPA 
               frameworks, Software testing and learning towards 
               Advanced Computer Science degree, a dream to attain 
               in the coming years`,
    
              `Adapt SFRA(Storefront Reference Architecture) to build 
               e-commerce sites on the Salesforce Platformm, using
               ISML templates and BM(Business Manager)`,
    
              `Undertook the training of acquiring and furthering my skills in IT/Digital skills
               Training programme at Amalitech Training Academy Ltd, specializing in and majoring in 
               Software Development and Engineering comprising, learning and coding of sample projects
               comprising but not limited to Core Java, JEE, SPA frameworks(React & Angular), Springboot 
               for developing restful APIs with or without HATEOS implementations, with or without Netflix
               OSS architecture, CI / CD, and software skills comprising but not limited to Business Communication 
               Skills, Intercultural Communication, Personal and Professional Development and Others.
               `,
    
              `Taught Computer Literacy,Introduction to computing and also assisted in lecturing on 
               on behalf of Senior Lecturers with their classes. Also took part in grading and overseeing 
               final students with their project work defence.`,
    
              `A month worth internship with Takoradi Flour Mills, monitoring and servicing of network and CCTVs, and 
               also learning industrial practice of my computing knowledge.`
      ]



export default function Experience() {
  const classes = useStyles();
  const steps = experienceStages();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Experience
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
