import Header from '../Components/Header/Header';
import About from '../Components/About/About';
import Footer from '../Components/Footer/Footer';
import Projects from '../Components/Projects/Projects';
import Hero from '../Components/Hero/Hero';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About/>
      <Projects/>
      <Footer/>
    </>
  );
};

export default Home;