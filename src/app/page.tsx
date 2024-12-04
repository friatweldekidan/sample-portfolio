import Head from 'next/head';
import About from "./components/About";
import Portfolio from "./components/Portfolio";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Friat Weldekidan Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-sans">    
        <About />
        <Portfolio />
      </main>
    </>
  );
};

export default Home;