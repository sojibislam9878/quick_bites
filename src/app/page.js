import { Review } from "@/components/review/Review";
import Image from "next/image";

import React from "react"
// pages/_app.js or pages/_app.tsx
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  // useEffect(() => {
  //   const slider = new Glide(".glide-08", {
  //     type: "carousel",
  //     focusAt: 1,
  //     animationDuration: 4000,
  //     autoplay: 4500,
  //     autoplay: true,
  //     rewind: true,
  //     perView: 2,
  //     gap: 48,
  //     classes: {
  //       nav: {
  //         active: "[&>*]:bg-wuiSlate-700",
  //       },
  //     },
  //     breakpoints: {
  //       1024: {
  //         perView: 2,
  //       },
  //       640: {
  //         perView: 1,
  //       },
  //     },
  //   }).mount()

  //   return () => {
  //     slider.destroy()
  //   }
  // }, [])

  return (
    <div className="">
      <div> 
      fdsaadsf
      <Review></Review>
      
      </div>
    </div>
  );
}
