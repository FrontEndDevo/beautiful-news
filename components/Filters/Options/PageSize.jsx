import Dropdown from "./Dropdown";

const pageSizes = Array.from({ length: 10 }, (_, i) => (i + 1) * 10);

const PageSize = () => {
  console.log(pageSizes);
  return (
    <Dropdown
      options={pageSizes}
      label="page size"
      getSelectedOption={(option) => console.log(option)}
    />
  );
};

export default PageSize;
