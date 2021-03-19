/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import './convertMonthToJapanese.scss';
import Typography from "@material-ui/core/Typography";

const ConvertMonthToJapanese = ({ engMonthString }) => {
  const convertToJap = () => {
    switch (engMonthString) {
      case 'jan':
        return '1月'
      case 'feb':
        return '2月'
      case 'mar':
        return '3月'
      case 'arp':
        return '4月'
      case 'may':
        return '5月'
      case 'june':
        return '6月'
      case 'july':
        return '7月'
      case 'aug':
        return '8月'
      case 'sep':
        return '9月'
      case 'oct':
        return '10月'
      case 'nov':
        return '11月'
      case 'dec':
        return '12月'
    }
  }
  return (
    <Typography variant="h6" className="convert-month-wrapper">
      {convertToJap()}
    </Typography>
  );
};

export default ConvertMonthToJapanese;