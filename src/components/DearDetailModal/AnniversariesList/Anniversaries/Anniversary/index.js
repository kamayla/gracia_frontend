import React, { useState, useEffect } from "react";
import moment from 'moment';
import './anniversary.scss';
import { Button } from "@material-ui/core";
import EditAnniversaryModal from '../../../../EditAnniversaryModal';
import calcLeftDays from '../../../../../modules/calcLeftDays';
import AnniversaryImage from '../../../../AnniversaryImage';

const Anniversary = ({ value, parentReload }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const date = moment(value.date);
  const days = calcLeftDays(value.date);
  return (
    <div className="anniversary-wrapper">
      <EditAnniversaryModal open={isOpenModal} changeIsOpen={setIsOpenModal} anniversary={value} parentReload={parentReload} />
      <div className="image-area">
        <AnniversaryImage kind={value.kind} />
      </div>
      <div className="info-area">
        <div className="content-area">
          <h3 className="card-title">{value.kind}</h3>
          <div className="days-area">
            <p className="date">{date.format('MM月DD日')}</p>
            <p>あと<span className="days">{days}</span>日</p>
          </div>
        </div>
        <div className="button-area">
          <Button onClick={() => setIsOpenModal(true)}>編集</Button>
        </div>
      </div>
    </div>
  );
}

export default Anniversary;