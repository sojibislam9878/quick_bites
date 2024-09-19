import Image from "next/image";
import Hero from "./component/Hero";
import Review from "./Review/Review";

export default function Home() {
  return (
    <div className="">
    <Hero/>
    <Review/>
    </div>
  );
}
