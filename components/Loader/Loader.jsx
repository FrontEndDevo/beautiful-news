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

  /*
  this calculation process detects the position the user stands in,
  and shows the loader in front of him directly.
  */
  const loaderLeftProperty = document.body.scrollHeight - window.scrollY - 900;
  return (
    <div
      className={styles.loader}
      style={{ bottom: `${loaderLeftProperty}px` }}
    >
      <Lottie options={loaderOptions} height={300} width={300} />
    </div>
  );
};

export default Loader;
