import React from "react";
import PropTypes from "prop-types";
import CustomModal from "../CustomModal";
import "./dearDetailModal.scss";
import TabsComponent from "../TabsComponent";
import DearEditForm from './DearEditForm'
import AnniversariesList from './AnniversariesList'

const DearDetailModal = ({ open, changeIsOpen, dear, parentReload }) => {
  const onClose = () => {
    changeIsOpen(false);
  };
  return (
    <CustomModal open={open} onClose={onClose} modalTitle={`${dear ? dear.name : ''} さん`}>
      <TabsComponent
        items={[
          {
            label: "詳細",
            component: <DearEditForm dear={dear} changeIsOpen={changeIsOpen} parentReload={parentReload} />,
          },
          {
            label: "記念日",
            component: <AnniversariesList dear={dear} changeIsOpen={changeIsOpen} parentReload={parentReload} />,
          }
        ]}
      />
    </CustomModal>
  );
};

DearDetailModal.propTypes = {
  open: PropTypes.bool.isRequired,
  changeIsOpen: PropTypes.func.isRequired,
  parentReload: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default DearDetailModal;
