import React, { useState, forwardRef, useImperativeHandle } from "react";
import { DataGrid } from "@material-ui/data-grid";
import PropTypes from "prop-types";

const DataGridComponent = ({ columns, paginateFunc, showDetail }, ref) => {
  const [isLoading, setIsLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(0);
  const [total, setTotal] = useState(0);
  const handlePageChange = (params) => {
    getRows(params.page + 1);
  };

  const handleRowSelected = (params) => {
    showDetail(params.data);
  };

  /**
   * このようにuseImperativeHandleで返されたオブジェクトに含まれる関数が外部で使えるようになる。
   */
  useImperativeHandle(ref, () => {
    return {
      handlePageChange,
    };
  });

  React.useEffect(() => {
    // todo useEffectの挙動の理解が甘いので後にしっかりと把握する。
    (async () => {
      await getRows();
    })();
  }, []);

  const getRows = (page = 1) => {
    setIsLoading(true);
    setRows([]);
    paginateFunc(page).then((res) => {
      setTotal(res.data.pagination.count);
      setCurrentPage(res.data.pagination.page);
      setRows(res.data.data);
      setPerPage(res.data.pagination.perPage);
      setIsLoading(false);
    });
  };

  return (
    <div style={{ height: 650, width: "100%", background: "#ffffff" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pagination
        pageSize={perPage}
        rowCount={total}
        currentPage={currentPage}
        paginationMode="server"
        onPageChange={handlePageChange}
        onRowSelected={handleRowSelected}
        loading={isLoading}
        page={currentPage - 1}
      />
    </div>
  );
};

DataGridComponent.propTypes = {
  columns: PropTypes.array.isRequired,
  paginateFunc: PropTypes.func.isRequired,
  showDetail: PropTypes.func.isRequired,
};

export default forwardRef(DataGridComponent);
