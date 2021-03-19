import React, { useState, useEffect } from "react";
import Avatar from '@material-ui/core/Avatar';
import moment from 'moment';
import './anniversary.scss';
import { Button } from "@material-ui/core";
import EditAnniversaryModal from '../../../../EditAnniversaryModal';

const Anniversary = ({ value, parentReload }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const date = moment(value.date);
  const now = moment();
  const thisYearAnniversaryDate = moment(new Date(now.year(), date.month(), date.date()));
  const diff = now < thisYearAnniversaryDate ? thisYearAnniversaryDate.diff(now) : thisYearAnniversaryDate.add(1, 'years').diff(now);
  const duration = moment.duration(diff);
  const days = Math.floor(duration.asDays());
  return (
    <div className="anniversary-wrapper">
      <EditAnniversaryModal open={isOpenModal} changeIsOpen={setIsOpenModal} anniversary={value} parentReload={parentReload} />
      <div className="image-area">
        <Avatar src="https://testimageippei.s3-ap-northeast-1.amazonaws.com/001-birthday.jpg" />
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