import Layout from '../components/Layout';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Apemap from '../components/Apemap';
import Exploremap from '../components/Exploremap';
import Feature from '../components/Feature';
import Footer from '../components/Footer';
import Faq from '../components/Faq';
import About from '../components/About';
import Watermark from '../components/Watermark';
import SocialMedia from '../components/SocialMedia';
import Join from '../components/Join';
import Timeline from '../components/Timeline';

const Index = () => {
  return (
    <Layout pageTitle="APE-LOST">
      <Header />
      <Hero />
      <Watermark/>
      <Feature/>
      <Apemap/>
      <Exploremap />
      <Timeline />
      <Faq />
      <About />
      <Join />
      <SocialMedia />
      <Footer />
    </Layout>
  )
}

export default Index;
