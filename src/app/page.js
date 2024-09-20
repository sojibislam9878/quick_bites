import Image from "next/image";
import Hero from "./component/Hero";
import Review from "./Review/Review";

export default function aboutus() {
  return (
    <div className="pt-1">
    <Hero/>
    <Review/>
    </div>
  );
}