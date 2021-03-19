/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import './anniversariesPage.scss';
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import AddAnniversaryModal from '../../components/AddAnniversaryModal';
import ConvertMonthToJapanese from './ConvertMonthToJapanese';
import AnniversariesListSortByMonth from './AnniversariesListSortByMonth';

import AnniversariesApi from '../../api/anniversaries'

const AnniversariesPage = () => {
  const [isOpenCreateAnniversaryModal, setIsOpenCreateAnniversaryModal] = useState(false);
  const [anniversaries, setAnniversaries] = useState([]);

  useEffect(() => {
    getAnniversaries()
  }, []);

  const getAnniversaries = () => {
    AnniversariesApi.listSortByMonth().then((res) => {
      setAnniversaries(res.data);
    })
  }
  return (
    <div className="top-page-wrapper">
      <AddAnniversaryModal open={isOpenCreateAnniversaryModal} changeIsOpen={setIsOpenCreateAnniversaryModal} />
      <div className="content-header">
        <Typography variant="h4" className="main-title">
          記念日
        </Typography>
        <Button className="add-anniversaries-button" onClick={() => setIsOpenCreateAnniversaryModal(true)} size="large" variant="contained" color="primary">
          + 記念日を追加
        </Button>
      </div>
      <div className="content-area">
        <AnniversariesListSortByMonth anniversaries={anniversaries} parentReload={getAnniversaries} />
      </div>
      
    </div>
  );
};

export default AnniversariesPage;
