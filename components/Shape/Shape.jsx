import styles from "./Shape.module.scss";
const Shape = (props) => {
  return (
    <div className={styles.shape}>
      <div className={styles.icon}>{props.children}</div>
    </div>
  );
};

export default Shape;
