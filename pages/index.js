// import Loading from "../components/layout/Loading";
import HeroArea from "../components/Elements/Home1/HeroArea";
import ServicesArea2 from "../components/Elements/Home1/ServicesArea2";
import AboutArea from "../components/Elements/Home1/AboutArea";
import PricingArea from "../components/Elements/Home1/PricingArea";
import TestimonialArea from "../components/Elements/Home1/TestimonialArea";
import FeaturesArea from "../components/Elements/Home1/FeaturesArea";
import CTAArea from "../components/Elements/Home1/CTAArea";
import Layout1 from "../components/Layout/Layout1";
import BlogArea2 from "../components/Elements/Home2/BlogArea2";
import BlogArea3 from "../components/Elements/Home3/BlogArea3";
import ServicesArea3 from "../components/Elements/Home1/ServicesArea3";
import AboutArea2 from "../components/Elements/Home1/AboutArea2";
import AboutArea3 from "../components/Elements/Home3/AboutArea3";


export default function Home() {
  return (
    <>
      {/* <Loading/> */}
      <Layout1>
        {/* Main-Body Started */}        
        <HeroArea />
        <AboutArea3/>
        <ServicesArea3 />
        <AboutArea />
        <TestimonialArea />
        <BlogArea2/>
        <CTAArea />

        {/* Main-Body Ended */}
      </Layout1>

    </>
  )
}
