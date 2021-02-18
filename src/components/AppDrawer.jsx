import React from 'react';
import clsx from 'clsx';
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import Mask from '../img/mask.png';
import { Hidden } from '@material-ui/core';


const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginBottom:"14%"

    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        background:"#273c75" 
       
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
      
        
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        direction: "rtl",
       
    },
    drawerPaper: {
        width: drawerWidth,
        direction: "rtl"
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    content: {
        flexGrow: 1,

        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
        direction: "rtl",
        
    },
    text:{
        fontSize:"15px",
        fontFamily:"Peyda",
    
    },
    title:{
        flexGrow: 10,
    },
    link:{
        color:"#353b48"
    },
    mask:{
        fontSize:"20px",
        fontFamily:"Peyda",
        marginTop:"25px",
        margin:"0 auto",
        color:'#273c75'
    },
    image:{
        width:"90px",
        height:"90px",
        marginTop:"-25px",
        margin:"0 auto"

    }
   
 
}));

export default function PersistentDrawerLeft() {
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
        <Hidden smUp>

        

    
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.btn , classes.menuButton, open && classes.hide)}
                        
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap className={classes.title}>
                        <Link to="/">
                        <img src={"../img/logo.png"} alt={"logo"} style={{
                        width: "65px",
                        height: "65px",
                        marginLeft:"75%"
                    }} />
                        </Link>
                
          </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>

                    <ListItem button >
                        <Typography variant="h6" className={classes.text}>
                            <Link to="/" className={classes.link} onClick={handleDrawerClose}>
                                خانه
              </Link>
                        </Typography>


                    </ListItem>

                    <ListItem button >
                        <Typography variant="h6" className={classes.text}>
                            <Link to="/search" className={classes.link}  onClick={handleDrawerClose}>
                            جستجو
              </Link>
                        </Typography>


                    </ListItem>

                    <ListItem button >
                        <Typography variant="h6" className={classes.text}>
                            <Link to="/world" className={classes.link}  onClick={handleDrawerClose}>
                                آمار جهان
              </Link>
                        </Typography>


                    </ListItem>

                    <ListItem button >
                        <Typography variant="h6" className={classes.text}>
                            <Link to="/stats" className={classes.link}  onClick={handleDrawerClose}>
                                آمار کشور ایران
              </Link>
                        </Typography>


                    </ListItem>

                    <ListItem button >
                        <Typography variant="h6" className={classes.text}>
                            <Link to="/worldTable" className={classes.link}  onClick={handleDrawerClose}>
                                جدول کشور ها
              </Link>
                        </Typography>


                    </ListItem>
                    <ListItem button >
                        <Typography variant="h6" className={classes.text}>
                            <Link to="/weather" className={classes.link}  onClick={handleDrawerClose}>
                                  آب و هوا
              </Link>
                        </Typography>


                    </ListItem>
                    <ListItem button >
                        <Typography variant="h6" className={classes.text}>
                            <Link to="/airquality" className={classes.link}  onClick={handleDrawerClose}>
                                 کیفیت هوا 
              </Link>
                        </Typography>


                    </ListItem>
                    <ListItem button >
                        <Typography variant="h6" className={classes.text}>
                            <Link to="/vaccine" className={classes.link}  onClick={handleDrawerClose}>
                            از واکسن چه خبر؟!
  
              </Link>
                        </Typography>


                    </ListItem>
                    <ListItem button >
                        <Typography variant="h6" className={classes.text}>
                            <Link to="/virusMap" className={classes.link}  onClick={handleDrawerClose}>
                                    نقشه گستردگی ویروس 
              </Link>
                        </Typography>


                    </ListItem>
                    <ListItem button >
                        <Typography variant="h6" className={classes.text}>
                            <Link to="/virus" className={classes.link} onClick={handleDrawerClose}>
                                  چیزهایی که باید بدانیم 
              </Link>
                        </Typography>


                    </ListItem>

                </List>
                <Divider />
                    <ListItem>
                        <Typography variant="h4" className={classes.mask}>
                        #ماسک_بزنیم

                        </Typography>
                    </ListItem>
                    <ListItem>
                    <img src={Mask} alt="mask" className={classes.image}/>

                    </ListItem>
            </Drawer>
          

        </div>
        </Hidden>
    );
}
