import Image from "next/image";
import Banner from "../component/Restaurants&Promotions/Banner";
import Promotion from "../component/promotion/Promotion";
import Review from "../component/Review/Review";
import WhyChooseUs from "../component/WhyChooseUs/WhyChooseUse.jsx";

import Blog from "../component/Blog/Blog"

export default function Home() {
  return (
    <div className=" pt-4">
    <Banner/>
    <Promotion/>
    <WhyChooseUs/>
    <Review/>
    <Blog/>
    </div>
  );
}