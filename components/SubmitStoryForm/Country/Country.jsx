import classes from "./Country.module.scss";
const Country = (props) => {
  const { code, name, dialling_code: isoCode, index } = props;
  return (
    <li className={classes.country} onClick={props.chooseThisCountry}>
      <img
        src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${code.toUpperCase()}.svg`}
        alt={name}
      />
      <p>
        {name} ({code})
      </p>
      <span>{isoCode}</span>
    </li>
  );
};

export default Country;
