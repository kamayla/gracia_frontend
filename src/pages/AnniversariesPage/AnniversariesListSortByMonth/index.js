/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import './anniversariesListSortByMonth.scss';
import ConvertMonthToJapanese from '../ConvertMonthToJapanese'
import AnniversaryCard from './AnniversaryCard'

const AnniversariesListSortByMonth = ({ anniversaries, parentReload }) => {
  const months = Object.keys(anniversaries);
  const list = months.map((month) => {
    const innerArray = anniversaries[month].map((anniversary) => {
      return (
        <AnniversaryCard anniversary={anniversary} parentReload={parentReload} />
      );
    });
    return (
      <div>
        <ConvertMonthToJapanese engMonthString={month} />
        {innerArray}
      </div>
    );
  });
  return (
    <>
      {list}
    </>
  );
};

export default AnniversariesListSortByMonth;
