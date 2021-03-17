import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CustomModal from "../CustomModal";
import { Button, TextField } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import DearsApi from "../../api/dears";
import './editDearModal.scss';

const EditDearModal = ({ dear, open, changeIsOpen, parentReload }) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState(null);
  const [segment, setSegment] = useState('');
  const onClose = () => {
    changeIsOpen(false);
  };
  const deleteDear = () => {
    DearsApi.del(dear.id).then((res) => {
      console.log(res.data);
      parentReload();
      onClose();
    })
  }
  const editDear = () => {
    DearsApi.edit({
      name,
      gender,
      age,
      segment,
    }, dear.id).then((res) => {
      parentReload();
      onClose();
    })
  }
  useEffect(() => {
    if (dear) {
      setName(dear.name);
      setGender(dear.gender);
      setAge(dear.age);
      setSegment(dear.segment);
    }
  }, [dear]);
  return (
    <CustomModal open={open} onClose={onClose} modalTitle={`${dear.name} さん`}>
      <div className="edit-dear-modal-wrapper">
        <div className="form">
          <div className="text-field-wrapper">
            <TextField
              className="text-field"
              label="お相手のお名前"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="text-field-wrapper">
            <InputLabel id="gender-label">お相手の性別</InputLabel>
            <Select
              className="select-field"
              labelId="gender-label"
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <MenuItem value={'男性'}>男性</MenuItem>
              <MenuItem value={'女性'}>女性</MenuItem>
            </Select>
          </div>
          <div className="text-field-wrapper">
            <InputLabel id="age-label">お相手の年齢</InputLabel>
            <Select
              className="select-field"
              labelId="age-label"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            >
              <MenuItem value={10}>10代</MenuItem>
              <MenuItem value={20}>20代</MenuItem>
              <MenuItem value={30}>30代</MenuItem>
              <MenuItem value={40}>40代</MenuItem>
              <MenuItem value={50}>50代</MenuItem>
              <MenuItem value={60}>60代</MenuItem>
              <MenuItem value={70}>70代</MenuItem>
              <MenuItem value={80}>80代</MenuItem>
            </Select>
          </div>
          <div className="text-field-wrapper">
            <InputLabel id="segment-label">お相手はどのような方ですか？</InputLabel>
            <Select
              className="select-field"
              labelId="segment-label"
              id="segment"
              value={segment}
              onChange={(e) => setSegment(e.target.value)}
            >
              <MenuItem value={'彼女'}>彼女</MenuItem>
              <MenuItem value={'彼氏'}>彼氏</MenuItem>
            </Select>
          </div>
          <div className="button-wrapper">
            <Button className="button positive-button" onClick={() => editDear()} size="large" variant="contained" color="primary">大切な人を更新</Button>
          </div>
          <div className="button-wrapper">
            <Button className="button" onClick={() => deleteDear()} size="large" variant="contained" color="secondary">大切な人を削除</Button>
          </div>
        </div>
      </div>
    </CustomModal>
  );
};

EditDearModal.propTypes = {
  open: PropTypes.bool.isRequired,
  changeIsOpen: PropTypes.func.isRequired,
};

export default EditDearModal;
