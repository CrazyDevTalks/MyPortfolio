import styles from '../styles/About.module.css';
const AboutPage = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>🚀 Blockchain Fullstack Developer 🌐</h1>
        <p className={styles.text}>
          Greetings! I'm Harwin Dan, a seasoned Blockchain Fullstack Developer with a passion for
          architecting and implementing cutting-edge solutions in the decentralized world.
        </p>
        <p className={styles.text}>
          💼 Over the past 7 years, I've successfully navigated the complexities of blockchain
          development, specializing in Ethereum and Hyperledger. My expertise extends to crafting
          secure and scalable distributed applications and smart contracts.
        </p>
        <p className={styles.text}>
          🔧 On the frontend, I excel in harnessing the power of React to deliver seamless and
          intuitive user interfaces. My commitment to creating exceptional user experiences is
          reflected in every project.
        </p>
        <p className={styles.text}>
          ⚙️ Simultaneously, on the backend, I orchestrate intricate architectures and implement
          smart contracts, ensuring the seamless integration of blockchain functionalities with
          traditional server-side technologies.
        </p>
        <p className={styles.text}>
          🌐 My commitment to staying abreast of industry trends ensures that I bring innovative
          solutions to the table. I'm particularly excited about Algo Trading which has been built by Angular Universal that promotes AI trading.
        </p>
        <p className={styles.text}>
          🚀 Let's collaborate on turning your blockchain aspirations into reality! Whether it's
          architecting decentralized solutions, optimizing smart contracts, or discussing the
          latest advancements in the blockchain space, I'm ready to bring my expertise to your
          projects.
        </p>
        <p className={styles.text}>
          📬 Feel free to reach out for discussions on innovative projects, potential
          collaborations, or anything related to blockchain development. Looking forward to connecting
          with like-minded professionals!
        </p>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
