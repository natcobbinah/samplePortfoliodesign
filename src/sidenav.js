import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {useStyles} from './sidenavStyles'
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';

import PersonPinCircleSharpIcon from '@material-ui/icons/PersonPinCircleSharp';
import NaturePeopleSharpIcon from '@material-ui/icons/NaturePeopleSharp';
import SportsHandballSharpIcon from '@material-ui/icons/SportsHandballSharp';
import FitnessCenterSharpIcon from '@material-ui/icons/FitnessCenterSharp';
import SportsKabaddiSharpIcon from '@material-ui/icons/SportsKabaddiSharp';
import FlightTakeoffSharpIcon from '@material-ui/icons/FlightTakeoffSharp';
import AboutMyselfCard from './about';
import LivingandWorkPlace from './livingandWorkplace'
import FunSport from './funsport'
import Skills from './skills'
import Experience from './experience'
import AwardsandCerts from './awardsandcerts'

const portfolioIcons =[
    <NaturePeopleSharpIcon/>,
    <PersonPinCircleSharpIcon/>,
    <SportsHandballSharpIcon/>,
    <FitnessCenterSharpIcon/>,
    <SportsKabaddiSharpIcon/>,
    <FlightTakeoffSharpIcon/>
]

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={clsx(classes.appBar, { [classes.appBarShift]: open,})}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen}   edge="start"
            className={clsx(classes.menuButton, {[classes.hide]: open,})}>
            <MenuIcon />
          </IconButton>
         
          <Typography variant="h6" noWrap>
            PORTFOLIO NAME
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Drawer variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}>

        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />

        <List>
          {['About', 'Living & WorkPlace', 'FunSport', 'Skills','Experience','Awards & Certifications'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                  {index === 0 ?  <Tooltip title="About">{portfolioIcons[0]}</Tooltip> :
                   index === 1 ?  <Tooltip title="Living and Workplace">{portfolioIcons[1]}</Tooltip> :
                   index === 2 ?  <Tooltip title="FunSport">{portfolioIcons[2]}</Tooltip> :
                   index === 3 ?  <Tooltip title="Skills">{portfolioIcons[3]}</Tooltip> :
                   index === 4 ?  <Tooltip title="Experience">{portfolioIcons[4]}</Tooltip> :
                   index === 5 ?  <Tooltip title="Awards and Certifications">{portfolioIcons[5]}</Tooltip> :
                                "Nothing"
                  }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <AboutMyselfCard/>

        <div className={classes.toolbar} />
        <LivingandWorkPlace/>

        <div className={classes.toolbar} />
        <FunSport/>

        <div className={classes.toolbar} />
        <Skills/>

        <div className={classes.toolbar} />
        <Experience/>

        <div className={classes.toolbar} />
        <AwardsandCerts/>
      </main>
    </div>
  );
}
