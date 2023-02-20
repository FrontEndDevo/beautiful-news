import classes from "./Categories.module.scss";
import { TOP_HEADLINES } from "../Headlines/Headlines";
import Channel from "./Channel/Channel";

const Categories = () => {
  const allChannels = TOP_HEADLINES.map((headlineObj) => (
    <Channel
      key={headlineObj.headline}
      headlineName={headlineObj.headline}
      headlineImg={headlineObj.img}
    />
  ));
  return (
    <div className={classes.categories}>
      <h3>Beautiful News Channels to watch</h3>
      <ul className={classes.channels}>
        {allChannels}
        <Channel
          headlineName="everything"
          headlineImg="https://images.pexels.com/photos/3944383/pexels-photo-3944383.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
      </ul>
    </div>
  );
};

export default Categories;
