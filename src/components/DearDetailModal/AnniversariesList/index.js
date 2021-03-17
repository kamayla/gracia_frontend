import React, { useState, useEffect } from "react";
import Anniversaries from './Anniversaries'
import './anniversariesList.scss';


const AnniversariesList = ({ dear, changeIsOpen, parentReload }) => {
  const onClose = () => {
    changeIsOpen(false);
  };
  return (
    <div className="anniversaries-list-wrapper">
      <div className="anniversaries-list">
        <Anniversaries dear={dear} />
      </div>
    </div>
  );
};

export default AnniversariesList;
