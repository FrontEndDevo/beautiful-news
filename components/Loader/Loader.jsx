import styles from "./Loader.module.scss";
import Lottie from "react-lottie";
import * as loaderAnimation from "../../assets/animations/loader.json";
const Loader = () => {
  const loaderOptions = {
    loop: true,
    autoplay: true,
    animationData: loaderAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={styles.loader}>
      <Lottie options={loaderOptions} height={300} width={300} />
    </div>
  );
};

export default Loader;
