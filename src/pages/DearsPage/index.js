/* eslint-disable react/prop-types */
import React, { useState, useRef } from "react";
import './dearsPage.scss';
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import AddDearModal from '../../components/AddDearModal';
import EditDearModal from '../../components/EditDearModal';
import DataGridComponent from "../../components/DataGridComponent";
import { list } from "../../api/dears";

const DearsPage = () => {
  const [isOpenAddDearsModal, setIsOpenAddDearsModal] = useState(false);
  const [isOpenEditDearsModal, setIsOpenEditDearsModal] = useState(false);
  const [selectedDear, setSelectedDear] = useState(null);
  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "name", headerName: "名前", width: 150 },
    { field: "age", headerName: "年齢", width: 150 },
    { field: "segment", headerName: "セグメント", width: 150 },
  ];
  const dataGridRef = useRef(); // このRefを子コンポーネントのrefに与えることで、この変数から子コンポーネントの操作が可能になる。
  const showDetail = (data) => {
    setSelectedDear(data);
    setIsOpenEditDearsModal(true);
  };
  const dataGridReload = () => {
    dataGridRef.current.handlePageChange({ page: 0 }); // このようにcurrentの中に子コンポーネントで外部公開設定されたfuncが使用できる。
  };
  return (
    <div className="dears-page-wrapper">
      <AddDearModal open={isOpenAddDearsModal} changeIsOpen={setIsOpenAddDearsModal} parentReload={dataGridReload} />
      <EditDearModal dear={selectedDear} open={isOpenEditDearsModal} changeIsOpen={setIsOpenEditDearsModal} parentReload={dataGridReload} />
      <div className="content-header">
        <Typography variant="h4" className="main-title">
          大切な人
        </Typography>
        <Button className="add-dears-button" onClick={() => setIsOpenAddDearsModal(true)} size="large" variant="contained" color="primary">
          + 大切な人を追加
        </Button>
      </div>
      
      <DataGridComponent ref={dataGridRef} columns={columns} paginateFunc={list} showDetail={showDetail} />
    </div>
  );
};

export default DearsPage;
