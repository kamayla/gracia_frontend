import React, { useState } from "react";
import PropTypes from "prop-types";
import CustomModal from "../CustomModal";
import { Button, TextField } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import moment from 'moment';

import AnniversariesApi from '../../api/anniversaries'
import './addAnniversaryModal.scss';

const AddAnniversaryModal = ({ open, changeIsOpen, dear, parentReload }) => {
  const [kind, setKind] = useState('');
  const [date, setDate] = useState(null);
  const onClose = () => {
    changeIsOpen(false);
  };

  const onSubmit = () => {
    console.log(moment(date).format('YYYY/MM/DD'))
    AnniversariesApi.store({
      date: moment(date).format('YYYY/MM/DD'),
      kind,
      dear_id: dear.id,
    }).then(() => {
      parentReload()
      onClose();
    })
  }
  return (
    <CustomModal open={open} onClose={onClose} modalTitle={"記念日追加"}>
      <div className="add-anniversary-modal-wrapper">
        <div className="form">
          <div className="text-field-wrapper">
            <InputLabel id="kind-label">記念日の種類</InputLabel>
            <Select
              className="select-field"
              labelId="kind-label"
              id="kind"
              value={kind}
              onChange={(e) => setKind(e.target.value)}
            >
              <MenuItem value={'誕生日'}>誕生日</MenuItem>
              <MenuItem value={'記念日'}>記念日</MenuItem>
            </Select>
          </div>
          <div className="text-field-wrapper">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="記念日の日付"
                  format="yyyy/MM/dd"
                  value={date}
                  onChange={(date) => setDate(date)}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
              />
            </MuiPickersUtilsProvider>
          </div>
          <div className="button-wrapper">
            <Button className="button positive-button" onClick={() => onSubmit()} size="large" variant="contained" color="primary">記念日を追加</Button>
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
