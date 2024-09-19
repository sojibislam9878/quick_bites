import Image from "next/image";
import Hero from "./component/Hero";
import Promotions from "./component/Restaurants&Promotions/Promotions";
import PromotionBanner from "./component/Restaurants&Promotions/PromotionBanner";


export default function Home() {
  return (
    <div className="">
    <Hero/>



    <Promotions/>
    <PromotionBanner/>
    
    </div>
  );
}