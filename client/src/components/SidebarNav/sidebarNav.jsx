import React from 'react'

import { makeStyles } from "@material-ui/core/styles";

import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";


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
      marginBottom: theme.spacing(0),
    },
    fullList: {
      width: "auto",
    },
    icons: {
      color: "#909090",
      marginLeft: theme.spacing(1),
      marginBottom: theme.spacing(0),
    },
    MuiDivider: {
      backgroundColor: "#373737",
      marginTop: theme.spacing(-1),
    },
  }));


export default function SideBar() {
    const classes = useStyles();
    return (
        <List>
        <ListItem button>
          <ListItemIcon className={classes.icons}>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon className={classes.icons}>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="MOm" />
        </ListItem>
      </List>
    )
}
