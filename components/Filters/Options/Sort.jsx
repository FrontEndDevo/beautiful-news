import React from "react";
import Dropdown from "../../../shared/Dropdown/Dropdown";
import { setSortOption } from "../../../store/Filters/sort-slice";
import { useDispatch } from "react-redux";
const sortOptions = ["publishedAt", "relevancy", "popularity"];

const Sort = React.memo(() => {
  const dispatch = useDispatch();

  // Set the sort option in the redux store.
  const selectOptionHandler = (option) => dispatch(setSortOption(option));

  return (
    <Dropdown
      options={sortOptions}
      label="Sort by"
      getSelectedOption={selectOptionHandler}
    />
  );
});

export default Sort;
