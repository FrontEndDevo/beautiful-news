import classes from "./Keyword.module.scss";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { setKeyword } from "../../../../store/filters-slice";

const Keyword = React.memo(() => {
  const dispatch = useDispatch();

  const changeKeywordHandler = (e) => {
    dispatch(setKeyword(e.target.value.trim()));
  };

  return (
    <div className={classes.keyword}>
      <input
        type="text"
        name="keyword"
        id="keyword"
        placeholder="e.g. Google"
        onChange={changeKeywordHandler}
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
  );
});

export default Keyword;
