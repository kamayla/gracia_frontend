/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import './anniversariesPage.scss';
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import AddAnniversaryModal from '../../components/AddAnniversaryModal';
import AnniversariesListSortByMonth from './AnniversariesListSortByMonth';
import LoadingScreen from '../../components/LoadingScreen';

import AnniversariesApi from '../../api/anniversaries'

const AnniversariesPage = () => {
  const [isOpenCreateAnniversaryModal, setIsOpenCreateAnniversaryModal] = useState(false);
  const [anniversaries, setAnniversaries] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAnniversaries()
  }, []);

  const getAnniversaries = () => {
    setIsLoading(true);
    AnniversariesApi.listSortByMonth().then((res) => {
      setAnniversaries(res.data);
      setIsLoading(false);
    })
  }
  return (
    <div className="top-page-wrapper">
      <AddAnniversaryModal open={isOpenCreateAnniversaryModal} changeIsOpen={setIsOpenCreateAnniversaryModal} />
      <LoadingScreen open={isLoading} />
      <div className="content-header">
        <Typography variant="h4" className="main-title">
          記念日一覧
        </Typography>
      </div>
      {
        !isLoading && (
          <div className="content-area">
            {
              Object.keys(anniversaries).length > 0 ?
                <AnniversariesListSortByMonth anniversaries={anniversaries} parentReload={getAnniversaries} /> :
                (
                  <div className="empty-content">
                    <Typography variant="h4">
                      Nothing!!
                    </Typography>
                    <Typography variant="h6">
                      記念日がまだ登録されていません。
                    </Typography>
                  </div>
                )
            }
          </div>
        )}
      
    </div>
  );
};

export default AnniversariesPage;
