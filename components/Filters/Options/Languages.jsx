import React from "react";
import Dropdown from "../../../shared/Dropdown/Dropdown";
import { setLanguage } from "../../../store/Filters/language-slice";
import { useDispatch } from "react-redux";
const storiesLanguages = [
  "en",
  "ar",
  "de",
  "es",
  "fr",
  "he",
  "it",
  "nl",
  "no",
  "pt",
  "ru",
  "sv",
  "ud",
  "zh",
];

const Languages = React.memo(() => {
  const dispatch = useDispatch();

  // Set the language in the redux store.
  const selectOptionHandler = (option) => dispatch(setLanguage(option));

  return (
    <Dropdown
      options={storiesLanguages}
      label="Language"
      getSelectedOption={selectOptionHandler}
    />
  );
});

export default Languages;
