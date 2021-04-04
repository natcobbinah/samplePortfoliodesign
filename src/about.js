import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

export default function AboutMyselfCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          About Myself
        </Typography>
        <Typography paragraph>
        An OOP programming language enthusiast who relishes building enterprise application software with JEE, SPA frameworks,
        TypeScript and client requested framework to get the job done, and who beliefs in having the requisite knowledge of best
        practices, tools and processes regarded by the industry to be optimal in order to build better computer systems that achieves
        business goals sooner for individuals and corporate organizations, with top priority on establishing a positive connection
        with clients
        </Typography>
      </CardContent>
    </Card>
  );
}
