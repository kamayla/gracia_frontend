/* eslint-disable react/prop-types */
import React, { useState } from "react";
import './dearsPage.scss';
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import AddDearModal from '../../components/AddDearModal';

const DearsPage = () => {
  const [isOpenAddDearsModal, setIsOpenAddDearsModal] = useState(false);
  return (
    <div className="dears-page-wrapper">
      <AddDearModal open={isOpenAddDearsModal} changeIsOpen={setIsOpenAddDearsModal} />
      <Typography variant="h4">
        大切な人
      </Typography>
      <Button className="add-dears-button" onClick={() => setIsOpenAddDearsModal(true)} size="large" variant="contained" color="primary">
        + 大切な人を追加
      </Button>
    </div>
  );
};

export default DearsPage;
