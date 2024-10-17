import Image from "next/image";
import Banner from "../component/Restaurants&Promotions/Banner";
import Promotion from "../component/promotion/Promotion";
import Review from "../component/Review/Review";
import WhyChooseUs from "../component/WhyChooseUs/WhyChooseUse.jsx";
import Blog from "../component/Blog/Blog"
import BloogLetter from "../component/Blog/BloogLetter";
import GoogleMap from "../component/googleMap/GoogleMap";
import Counter from "./counter/page";

export default function Home() {
  return (
    <div className=" pt-4">
    <Banner/>
    <Promotion/>
    <WhyChooseUs/>
    <Review/>
    <Blog/>
   {/* <GoogleMap/> */}
   <BloogLetter/>
    </div>
  );
}