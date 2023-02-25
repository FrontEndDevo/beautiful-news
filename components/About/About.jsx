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
      <div className={styles.description}>
        <p>
          Beautiful News is a content platform that publishes one positive story
          every day of the year. We are dedicated to unearthing inspiring,
          uplifting, and authentic voices that reflect the good in humanity, as
          well as the beauty of destinations and our natural world.
        </p>
        <p>
          Beautiful News launched in South Africa on 1 November 2016. Since
          inception, we’ve shared positive micro-documentary content at 4:14pm,
          in recognition of the moment that Nelson Mandela was released from
          prison. In honour of his legacy, we are reframing our world for the
          betterment of nature and humankind.
        </p>
        <p>
          We gather our stories by keeping a pulse on individuals and
          organisations that are making a positive impact through their ideas,
          actions, initiatives and contributions. This diverse set of
          inspirational narratives collectively showcases humanity’s inherent
          goodness.
        </p>
        <p>
          Beautiful News offers a platform to amplify their message because we
          believe that together, we are stronger. It’s these stories that will
          unite us as we create a community committed to positive action and
          change.
        </p>
      </div>
    </div>
  );
};

export default About;
