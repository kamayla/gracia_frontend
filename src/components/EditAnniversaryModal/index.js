import React, { useState, useEffect } from "react";
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
import CircularProgress from '@material-ui/core/CircularProgress';
import moment from 'moment';

import AnniversariesApi from '../../api/anniversaries'
import './editAnniversaryModal.scss';

const EditAnniversaryModal = ({ open, changeIsOpen, anniversary, parentReload }) => {
  const [kind, setKind] = useState('');
  const [date, setDate] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const onClose = () => {
    changeIsOpen(false);
  };

  const onSubmit = () => {
    setIsSending(true)
    AnniversariesApi.edit(anniversary.id, {
      date: moment(date).format('YYYY/MM/DD'),
      kind,
    }).then(() => {
      parentReload()
      setIsSending(false)
      onClose();
    })
  }

  const deleteItem = () => {
    setIsSending(true)
    AnniversariesApi.del(anniversary.id).then(() => {
      parentReload()
      setIsSending(false)
      onClose();
    })
  }

  useEffect(() => {
    setKind(anniversary.kind);
    setDate(new Date(anniversary.date));
  }, []);
  return (
    <CustomModal open={open} onClose={onClose} modalTitle={"記念日の更新"}>
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
              <MenuItem value={'出産祝い'}>出産祝い</MenuItem>
              <MenuItem value={'結婚祝い'}>結婚祝い</MenuItem>
              <MenuItem value={'結婚記念日'}>結婚記念日</MenuItem>
              <MenuItem value={'就職祝い'}>就職祝い</MenuItem>
              <MenuItem value={'退職祝い'}>退職祝い</MenuItem>
              <MenuItem value={'入学祝い'}>入学祝い</MenuItem>
              <MenuItem value={'卒業祝い'}>卒業祝い</MenuItem>
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
            <Button
              className="button positive-button"
              onClick={() => onSubmit()}
              size="large"
              variant="contained"
              color="primary"
              disabled={isSending}
            >
              {isSending ? <CircularProgress size={24} /> : <span>記念日を更新</span>}
            </Button>
          </div>
          <div className="button-wrapper">
            <Button
              className="button"
              onClick={() => deleteItem()}
              size="large"
              variant="contained"
              color="secondary"
              disabled={isSending}
            >
              {isSending ? <CircularProgress size={24} /> : <span>記念日を削除</span>}
            </Button>
          </div>
        </div>
      </div>
    </CustomModal>
  );
};

EditAnniversaryModal.propTypes = {
  open: PropTypes.bool.isRequired,
  changeIsOpen: PropTypes.func.isRequired,
  parentReload: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default EditAnniversaryModal;
