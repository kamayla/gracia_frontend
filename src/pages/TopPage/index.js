/* eslint-disable react/prop-types */
import React, { useState } from "react";
import './topPage.scss';
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

import AddAnniversaryModal from '../../components/AddAnniversaryModal';

const TopPage = () => {
  const [isOpenCreateAnniversaryModal, setIsOpenCreateAnniversaryModal] = useState(false);
  return (
    <div className="top-page-wrapper">
      <AddAnniversaryModal open={isOpenCreateAnniversaryModal} changeIsOpen={setIsOpenCreateAnniversaryModal} />
      <Typography variant="h4">
        記念日
      </Typography>
      <Button className="add-anniversaries-button" onClick={() => setIsOpenCreateAnniversaryModal(true)} size="large" variant="contained" color="primary">
        + 記念日を追加
      </Button>
    </div>
  );
};

export default TopPage;
