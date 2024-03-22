import React from "react";
import Dropdown from "../../../shared/Dropdown/Dropdown";
import { useDispatch } from "react-redux";
import { setSortBy } from "../../../store/filters-slice";
const sortOptions = ["publishedAt", "relevancy", "popularity"];

const Sort = React.memo(() => {
  const dispatch = useDispatch();

  // Set the sort option in the redux store.
  const selectOptionHandler = (option) => dispatch(setSortBy(option));

  return (
    <Dropdown
      options={sortOptions}
      label="Sort by"
      getSelectedOption={selectOptionHandler}
    />
  );
});

export default Sort;
