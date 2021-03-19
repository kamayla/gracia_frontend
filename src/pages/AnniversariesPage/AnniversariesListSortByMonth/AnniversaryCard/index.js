import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import moment from 'moment';
import './anniversaryCard.scss';
import { Button } from "@material-ui/core";
import EditAnniversaryModal from '../../../../components/EditAnniversaryModal';
import calcLeftDays from '../../../../modules/calcLeftDays';
import AnniversaryImage from '../../../../components/AnniversaryImage';

const AnniversaryCard = ({ anniversary, parentReload }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const date = moment(anniversary.date);
  const days = calcLeftDays(anniversary.date);
  return (
    <div className="anniversary-wrapper">
      <EditAnniversaryModal open={isOpenModal} changeIsOpen={setIsOpenModal} anniversary={anniversary} parentReload={parentReload} />
      <div className="image-area">
        <AnniversaryImage kind={anniversary.kind} />
      </div>
      <div className="info-area">
        <div className="content-area">
          <h3 className="card-title">{anniversary.dear_name}</h3>
          <div className="days-area">
            <p className="date">{date.format('MM月DD日')}</p>
            <p className="days-wrapper">あと<span className="days">{days}</span>日</p>
            <p className="kind">({anniversary.kind})</p>
          </div>
        </div>
        <div className="button-area">
          <Button onClick={() => setIsOpenModal(true)}>編集</Button>
        </div>
      </div>
    </div>
  );
}

export default AnniversaryCard;