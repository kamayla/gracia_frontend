import React, { useState } from "react";
import PropTypes from "prop-types";
import CustomModal from "../CustomModal";
import { Button, TextField } from "@material-ui/core";

import './addAnniversaryModal.scss';

const AddAnniversaryModal = ({ open, changeIsOpen }) => {
  const [name, setName] = useState('');
  const onClose = () => {
    changeIsOpen(false);
  };
  return (
    <CustomModal open={open} onClose={onClose} modalTitle={"記念日追加"}>
      <div className="add-anniversary-modal-wrapper">
        <div className="form">
          <div className="text-field-wrapper">
            <TextField
              className="text-field"
              label="name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
      </div>
    </CustomModal>
  );
};

AddAnniversaryModal.propTypes = {
  open: PropTypes.bool.isRequired,
  changeIsOpen: PropTypes.func.isRequired,
  parentReload: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default AddAnniversaryModal;
