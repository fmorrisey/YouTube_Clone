import React from "react";
import "./navBar.css";
import brand from "./yt_logo_rgb_dark.png";

import { makeStyles } from "@material-ui/core/styles";

// Top App NavBar
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

// Side Drawer
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
//import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import PlayCircleIcon from '@material-ui/icons/PlayCircleFilledWhite';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

// Icons
//import { HomeIcon, InboxIcon, WhatshotIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    textColor: "#FFFFFF",
    backgroundColor: "#202020",
    maxHeight: "56px",
  },
  MuiDrawer: {
    backgroundColor: "#202020",
  },
  menuButton: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    color: "#FFFFFF",
  },
  title: {
    flexGrow: 1,
  },
  brand: {
    marginBottom: theme.spacing(1),
  },
  list: {
    width: 240,
    color: "#FFFFFF",
  },
  listItem: {
    // Resize Later
  },
  listHeader: {
    color: "#909090",
    marginLeft: theme.spacing(2),
  },
  fullList: {
    width: "auto",
  },
  icons: {
    color: "#909090",
    marginLeft: theme.spacing(1),
  },
  MuiTopDivider: {
    backgroundColor: "#373737",
    marginTop: theme.spacing(-1),
  },
  MuiDivider: {
    backgroundColor: "#373737",
    margin: theme.spacing(1),
  },
}));

export default function NavBar() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleSidebar = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleSidebar(anchor, false)}
      onKeyDown={toggleSidebar(anchor, false)}
    >
      <List>
        <ListItem button classname={classes.listItem}>
          <ListItemIcon className={classes.icons}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button classname={classes.listItem}>
          <ListItemIcon className={classes.icons}>
            <WhatshotIcon />
          </ListItemIcon>
          <ListItemText primary="Trending" />
        </ListItem>
        <ListItem button classname={classes.listItem}>
          <ListItemIcon className={classes.icons}>
            <SubscriptionsIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button classname={classes.listItem}>
          <ListItemIcon className={classes.icons}>
            <YouTubeIcon />
          </ListItemIcon>
          <ListItemText primary="Originals" />
        </ListItem>
        <ListItem button classname={classes.listItem}>
          <ListItemIcon className={classes.icons}>
            <PlayCircleIcon />
          </ListItemIcon>
          <ListItemText primary="YouTube Music" />
        </ListItem>
        <Divider classes={{ root: classes.MuiDivider }} />
        <ListItem button classname={classes.listItem}>
          <ListItemIcon className={classes.icons}>
            <VideoLibraryIcon />
          </ListItemIcon>
          <ListItemText primary="Library" />
        </ListItem>
        <ListItem button classname={classes.listItem}>
          <ListItemIcon className={classes.icons}>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText primary="History" />
        </ListItem>
        <ListItem button classname={classes.listItem}>
          <ListItemIcon className={classes.icons}>
            <SlideshowIcon />
          </ListItemIcon>
          <ListItemText primary="Your Videos" />
        </ListItem>
        <ListItem button classname={classes.listItem}>
          <ListItemIcon className={classes.icons}>
            <WatchLaterIcon />
          </ListItemIcon>
          <ListItemText primary="Watch later" />
        </ListItem>
        <ListItem button classname={classes.listItem}>
          <ListItemIcon className={classes.icons}>
            <PlaylistPlayIcon />
          </ListItemIcon>
          <ListItemText primary="Playlist" />
        </ListItem>
        <ListItem button classname={classes.listItem}>
          <ListItemIcon className={classes.icons}>
            <ThumbUpIcon />
          </ListItemIcon>
          <ListItemText primary="Liked" />
        </ListItem>
        <Divider classes={{ root: classes.MuiDivider }} />
        <ListItem >
          <ListItemText classname={classes.listHeader} primary="SUBSCRIPTIONS" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <AppBar position="static" height="10px" className={classes.appBar}>
            <Toolbar>
              <IconButton
                onClick={toggleSidebar(anchor, true)}
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <img src={brand} alt={brand} className={classes.brand} />
            </Toolbar>
          </AppBar>

          <Drawer
            classes={{ paper: classes.MuiDrawer }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleSidebar(anchor, false)}
          >
            <Toolbar>
              <IconButton
                onClick={toggleSidebar(anchor, false)}
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <img src={brand} alt={brand} className={classes.brand} />
            </Toolbar>
            <Divider classes={{ root: classes.MuiTopDivider }} />
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
