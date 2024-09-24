import Image from "next/image";
import Hero from "./component/Hero";
import Promotions from "./component/Restaurants&Promotions/Promotions";
import PromotionBanner from "./component/Restaurants&Promotions/PromotionBanner";
import Review from "./component/Review/Review";

import Banner from "./component/Restaurants&Promotions/Banner";



export default function Home() {
  return (
    <div className=" pt-4">
    {/* <Hero/> */}
    <Banner/>
    <Promotions/>
    <PromotionBanner/>
    <Review/>
    
    </div>
  );
}