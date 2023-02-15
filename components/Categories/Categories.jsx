import classes from "./Categories.module.scss";
import { TOP_HEADLINES } from "../Headlines/Headlines";
import Channel from "./Channel/Channel";

const Categories = () => {
  const allChannels = TOP_HEADLINES.map((headlineObj) => (
    <Channel
      headlineName={headlineObj.headline}
      headlineImg={headlineObj.img}
    />
  ));
  return (
    <div className={classes.channels}>
      <h3>Beautiful News Channels to watch</h3>
      <ul className={classes.categories}>{allChannels}</ul>
    </div>
  );
};

export default Categories;
