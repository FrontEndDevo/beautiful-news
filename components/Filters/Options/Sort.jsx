import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../../../shared/Dropdown/Dropdown";
const sortOptions = ["publishedAt", "relevancy", "popularity"];

const Sort = () => {
  return (
    <Dropdown
      options={sortOptions}
      label="Sort by"
      getSelectedOption={(option) => console.log(option)}
    />
  );
};

export default Sort;
