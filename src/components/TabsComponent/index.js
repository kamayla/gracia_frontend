import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";

export default function TabsComponent({ items }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} centered>
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
