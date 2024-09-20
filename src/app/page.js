import Image from "next/image";
import Hero from "./component/Hero";
import Promotions from "./component/Restaurants&Promotions/Promotions";
import PromotionBanner from "./component/Restaurants&Promotions/PromotionBanner";
import Review from "./component/Review/Review";


export default function Home() {
  return (
    <div className="">
    <Hero/>
    <Promotions/>
    <PromotionBanner/>
    <Review/>
    
    </div>
  );
}