import React, { useState, useEffect } from "react";
import Anniversary from './Anniversary'
import './anniversaries.scss';

const Anniversaries = ({ anniversaries, parentReload }) => {
  const list = anniversaries.map((value, index) => {
    return <Anniversary key={index} value={value} parentReload={parentReload} />;
  })
  return (
    <div className="anniversaries-wrapper">
      {list.length !== 0 ?
        list :
        (
          <div className="no-anniversaries">
            <h3>まだ記念日がありません</h3>
          </div>
        )
      }
    </div>
  );
}

export default Anniversaries;
