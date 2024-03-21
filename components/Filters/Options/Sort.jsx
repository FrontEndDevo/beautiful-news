import React from "react";
import Dropdown from "../../../shared/Dropdown/Dropdown";
const sortOptions = ["publishedAt", "relevancy", "popularity"];

const Sort = React.memo(() => {
  return (
    <Dropdown
      options={sortOptions}
      label="Sort by"
      getSelectedOption={(option) => console.log(option)}
    />
  );
});

export default Sort;
