import Image from "next/image";
import Banner from "../component/Restaurants&Promotions/Banner";
import Promotion from "../component/promotion/Promotion";
import Review from "../component/Review/Review";
import WhyChooseUs from "../component/WhyChooseUs/WhyChooseUse.jsx";
// import GoogleMap from "../component/googleMap/GoogleMap.jsx"
import Blog from "../component/Blog/Blog"
import BloogLetter from "../component/Blog/BloogLetter";
import PopularFoodItem from "../component/popularFoodItem/PopularFoodItem"
import Section from "../component/favoritefoodSection/Section";
import FeaturedRestaurant from "../component/featuredRestaurant/FeaturedRestaurant";

export default function Home() {
  return (
    <div >
    <Banner/>
    <Blog/>
    <Section></Section>
    <FeaturedRestaurant/>
    <PopularFoodItem/>
    <Promotion/>
    <WhyChooseUs/>
    <Review/>
  
   {/* <GoogleMap/> */}
   <BloogLetter/>
    </div>
  );
}