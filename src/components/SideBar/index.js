import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Event from "@material-ui/icons/Event";
import Favorite from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    gridArea: "side-bar",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component={Link} {...props} />;
}

const SideBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemLink to={"/dears"}>
          <ListItemIcon>
            <Favorite />
          </ListItemIcon>
          <ListItemText primary="大切な人" />
        </ListItemLink>
        <ListItemLink to={"/anniversaries"}>
          <ListItemIcon>
            <Event />
          </ListItemIcon>
          <ListItemText primary="記念日一覧" />
        </ListItemLink>
        
      </List>
      <Divider />
    </div>
  );
};

export default SideBar;
