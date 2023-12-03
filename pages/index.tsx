import type { NextPage } from "next";
import "slick-carousel/slick/slick.css";
import Head from "next/head";
import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Offers from "../components/Offers";
import Works from "../components/Works";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
import ScrollBtn from "../components/ScrollBtn";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Satya Nayak | Profile</title>
        <link rel="icon" href="/smallLogo.ico" />
      </Head>
 <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
      <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
          >
            <LeftSide />
          </motion.div>
          <div className="h-[88vh] mx-auto p-4">
            <Banner />
            <AboutMe />
            <Offers />
            <Contact />
            <Footer />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
          >
        </motion.div>
 </div>    


    ==========================

      <div className="font-bodyFont">
        <Banner />
        <AboutMe />
        <Offers />
        {/* <Works /> */}
        {/* <Testimonial /> */}
        <Contact />
      </div>
      <ScrollBtn />
    </div>
  );
};

export default Home;
