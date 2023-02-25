import styles from "./About.module.scss";
const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.title}>
        <h2>
          About
          <br />
          Beautiful
          <br />
          News
        </h2>
        <img
          src="https://i.postimg.cc/HL31znSs/about-beautiful-news.jpg"
          alt="Beautiful News About"
        />
      </div>
    </div>
  );
};

export default About;
