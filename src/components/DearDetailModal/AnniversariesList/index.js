import React, { useState, useEffect } from "react";
import Anniversaries from './Anniversaries'
import './anniversariesList.scss';
import { Button } from "@material-ui/core";

import AddAnniversaryModal from '../../AddAnniversaryModal';
import AnniversariesApi from '../../../api/anniversaries'


const AnniversariesList = ({ dear, changeIsOpen, parentReload }) => {
  const [isOpenAddAnniversaryModal, setIsOpenAddAnniversaryModal] = useState(false);
  const [anniversaries, setAnniversaries] = useState([]);
  const onClose = () => {
    changeIsOpen(false);
  };

  const reloadAnniversaries = () => {
    AnniversariesApi.listByDearId(dear.id).then((res) => {
      setAnniversaries(res.data);
    })
  }

  useEffect(() => {
    setAnniversaries(dear.anniversaries)
    reloadAnniversaries();
  }, [])

  return (
    <div className="anniversaries-list-wrapper">
      <AddAnniversaryModal open={isOpenAddAnniversaryModal} changeIsOpen={setIsOpenAddAnniversaryModal} dear={dear} parentReload={reloadAnniversaries} />
      <div className="anniversaries-list">
        <Anniversaries anniversaries={anniversaries} parentReload={reloadAnniversaries} />
      </div>
      <div className="button-wrapper">
        <Button
          className="button positive-button"
          onClick={() => setIsOpenAddAnniversaryModal(true)}
          size="large"
          variant="contained"
          color="primary"
        >
          + 記念日を追加
        </Button>
      </div>
    </div>
  );
};

export default AnniversariesList;
