import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Harwin Dan is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="Harwin Dan, Harwin, Dan, blockchain developer ,web developer portfolio, Harwin web developer, Harwin developer, mern stack, Harwin Dan portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Harwin Dan's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://i.ibb.co/RyMfW03/Screenshot-1.png" />
      <meta property="og:url" content="https://itscrazydev.netlify.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Harwin Dan',
};
