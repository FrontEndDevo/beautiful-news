import styles from "./LoaderSpinner.module.scss";
const LoaderSpinner = () => {
  return (
    <div className={styles.spinner} role="status">
      <span>Loading...</span>
    </div>
  );
};

export default LoaderSpinner;
