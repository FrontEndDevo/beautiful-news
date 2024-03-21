import React from "react";
import Dropdown from "../../../shared/Dropdown/Dropdown";
import { useDispatch } from "react-redux";
import { setPageSize } from "../../../store/Filters/pages-slice";

const pageSizes = Array.from({ length: 10 }, (_, i) => (i + 1) * 10);

const PageSize = React.memo(() => {
  const dispatch = useDispatch();

  // Set the page size in the redux store.
  const selectOptionHandler = (option) => dispatch(setPageSize(option));

  return (
    <Dropdown
      options={pageSizes}
      label="page size"
      getSelectedOption={selectOptionHandler}
    />
  );
});

export default PageSize;
