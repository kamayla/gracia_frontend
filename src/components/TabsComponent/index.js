import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  bar: {
    backgroundColor: '#e6aa5f',
  },
}));
export default function TabsComponent({ items }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square>
      <AppBar className={classes.bar} position="static">
        <Tabs
         value={value}
         onChange={handleChange}
         centered
         TabIndicatorProps={{
            style: { background: "rgb(220 121 0)", height: '3px' }
          }}
        >
          {items.map((item) => {
            return <Tab key={item.label} label={item.label} />;
          })}
        </Tabs>
      </AppBar>
      <Box p={1}>
        {items.map((item, index) => {
          return index === value && item.component;
        })}
      </Box>
    </Paper>
  );
}

TabsComponent.propTypes = {
  items: PropTypes.array.isRequired,
};
