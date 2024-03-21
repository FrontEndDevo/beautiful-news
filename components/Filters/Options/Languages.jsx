import React from "react";
import Dropdown from "../../../shared/Dropdown/Dropdown";
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
  return (
    <Dropdown
      options={storiesLanguages}
      label="Language"
      getSelectedOption={(option) => console.log(option)}
    />
  );
});

export default Languages;
