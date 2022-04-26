import Layout from '../components/Layout';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Apemap from '../components/Apemap';
import Feature from '../components/Feature';
import Footer from '../components/Footer';
import Faq from '../components/Faq';
import About from '../components/About';
import Join from '../components/Join';

const Index = () => {
  return (
    <Layout pageTitle="Metabaes">
      <Header />
      <Hero />
      <Feature/>
      <Apemap/>
      <Faq />
      <About />
      <Join />
      <Footer />
    </Layout>
  )
}

export default Index;
