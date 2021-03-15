import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Storefront from "@material-ui/icons/Storefront";
import Person from "@material-ui/icons/Person";
import Dashboard from "@material-ui/icons/Dashboard";
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
        <ListItemLink to={"/top"}>
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="記念日" />
        </ListItemLink>
        <ListItemLink to={"/dears"}>
          <ListItemIcon>
            <Storefront />
          </ListItemIcon>
          <ListItemText primary="大切な人" />
        </ListItemLink>
      </List>
      <Divider />
    </div>
  );
};

export default SideBar;
