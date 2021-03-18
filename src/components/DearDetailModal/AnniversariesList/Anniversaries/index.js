import React, { useState, useEffect } from "react";
import Avatar from '@material-ui/core/Avatar';
import moment from 'moment';
import './anniversaries.scss';

const Anniversaries = ({ anniversaries }) => {
  const list = anniversaries.map((value, index) => {
    const date = moment(value.date);
    const now = moment();
    const thisYearAnniversaryDate = moment(new Date(now.year(), date.month(), date.date()));
    const diff = now < thisYearAnniversaryDate ? thisYearAnniversaryDate.diff(now) : thisYearAnniversaryDate.add(1, 'years').diff(now);
    const duration = moment.duration(diff);
    const days = Math.floor(duration.asDays());
    return (
      <div className="anniversary-wrapper" key={index}>
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
            編集
          </div>
        </div>
      </div>
    
    );
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
