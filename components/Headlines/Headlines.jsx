import styles from "./Headlines.module.scss";
const Headlines = () => {
  return (
    <div className={styles.headlines}>
      <h2>
        Re-framing
        <br />
        the world
      </h2>
        <div className={styles.categories}></div>
    </div>
  );
};

export default Headlines;
