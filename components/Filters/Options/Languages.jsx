import Dropdown from "./Dropdown";
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

const Languages = () => {
  return (
    <Dropdown
      options={storiesLanguages}
      label="Language"
      getSelectedOption={(option) => console.log(option)}
    />
  );
};

export default Languages;
