import React from "react";
import "./navBar.css";
import brand from "./yt_logo_rgb_dark.png";

import { fade, makeStyles } from "@material-ui/core/styles";

// Top App NavBar
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import InputBase from "@material-ui/core/InputBase";

// Side Drawer
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

// Icons
import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import YouTubeIcon from "@material-ui/icons/YouTube";
import SlideshowIcon from "@material-ui/icons/Slideshow";
import PlayCircleIcon from "@material-ui/icons/PlayCircleFilledWhite";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
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
    color: "#000000",
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
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(1, 1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  searchButton: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    color: "#A4a4a4",
    background: "#323232",
    border: "1px solid #323232",
    borderRadius: "2px",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 0, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
    backgroundColor: "#202020",
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
        <ListItem>
          <ListItemText
            classname={classes.listHeader}
            primary="SUBSCRIPTIONS"
          />
        </ListItem>
        <ListItem button classname={classes.listItem}>
          <ListItemIcon className={classes.icons}>
            <AccountCircleOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="SCOTT MANLEY" />
        </ListItem>
        <ListItem button classname={classes.listItem}>
          <ListItemIcon className={classes.icons}>
            <AccountCircleOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="CHILLED COW" />
        </ListItem>
        <ListItem button classname={classes.listItem}>
          <ListItemIcon className={classes.icons}>
            <AccountCircleOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="NASA JPL" />
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

              <div className={classes.search}>
                <div className={classes.searchIcon}></div>
                <InputBase
                  placeholder="Search"
                  variant="outlined"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
              <Button
                edge="start"
                className={classes.searchButton}
                aria-label="menu"
              >
                <SearchIcon />
              </Button>
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
