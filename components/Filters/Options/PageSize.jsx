import Dropdown from "../../../shared/Dropdown/Dropdown";

const pageSizes = Array.from({ length: 10 }, (_, i) => (i + 1) * 10);

const PageSize = () => {
  return (
    <Dropdown
      options={pageSizes}
      label="page size"
      getSelectedOption={(option) => console.log(option)}
    />
  );
};

export default PageSize;
