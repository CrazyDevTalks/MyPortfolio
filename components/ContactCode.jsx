import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'itscrazydev.netlify.app',
    href: 'https://itscrazydev.netlify.app',
  },
  {
    social: 'email',
    link: 'crazydev0206@gmail.com',
    href: 'mailto:crazydev0206@gmail.com',
  },
  {
    social: 'github',
    link: 'CrazyDevTalks',
    href: 'https://github.com/CrazyDevTalks',
  },
  {
    social: 'linkedin',
    link: 'linkedin.com/in/vadym-pliushch-b226882b9/',
    href: 'https://www.linkedin.com/in/vadym-pliushch-b226882b9/',
  },
  // {
  //   social: 'twitter',
  //   link: 'OleksiichukD',
  //   href: 'https://twitter.com/OleksiichukD',
  // },
  // {
  //   social: 'telegram',
  //   link: 'danylo0206',
  //   href: 'https://t.me/danylo0206',
  // },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
