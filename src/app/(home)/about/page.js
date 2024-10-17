// import Image from "next/image";
// import Marque from "../../component/Restaurants&Promotions/Marque";
// import BannerPage from "@/app/(dashboard)/component/about/BannerPage";
// import Mission from "@/app/(dashboard)/component/about/Mission";
// import Facility from "@/app/(dashboard)/component/about/Facility";
// import Benificiar from "@/app/(dashboard)/component/about/Benificiar";

// export default function AboutPage() {
//   return (
//     < >
//     <BannerPage/>
//     <Mission/>
//      <Facility/>
//      <Benificiar/>
  
//       <section className="py-24 ">
//         <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
//             <div className="mb-14 text-center">
//                 <h4 className="text-6xl text-black-400 text-center font-bold">Our trusted partners</h4>
//             </div>
//             <Marque/>
            
//         </div>
//       </section>
//       <div className="lg:max-w-6xl  mx-auto mt-4">
//         <div className="mb-14 text-center">
//           <h4 className="text-6xl text-black-400 text-center font-bold">
//             Our chef
//           </h4>
//         </div>
//         <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 max-md:justify-center mt-12">
//           <div className="grid grid-cols-3 items-center bg-gray-100 p-4 rounded-lg relative">
//             <div className="col-span-2 min-h-[190px]">
//               <Image height={200} width={200} alt="hello"
//                 src="https://readymadeui.com/team-1.webp"
//                 className="rounded-lg"
//               />
//             </div>

//             <div className="bg-white rounded-lg p-4 absolute right-4 shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] ">
//               <h4 className="text-gray-800 text-sm font-bold">John Doe</h4>
//               <p className="text-[10px] text-gray-500 mt-0.5">United State</p>
//               <p className="text-gray-800 mt-2 text-xs">Software Engineer</p>
//             </div>
//           </div>

//           <div className="grid grid-cols-3 items-center bg-gray-100 p-4 rounded-lg relative">
//             <div className="col-span-2 min-h-[190px]">
//               <Image height={400} width={400} alt="hello10"
//                 src="https://readymadeui.com/team-2.webp"
//                 className="rounded-lg"
//               />
//             </div>

//             <div className="bg-white rounded-lg p-4 absolute right-4 shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] ">
//               <h4 className="text-gray-800 text-sm font-bold">Mark Adair</h4>
//               <p className="text-[10px] text-gray-500 mt-0.5">United State</p>
//               <p className="text-gray-800 mt-2 text-xs">Software Engineer</p>
//             </div>
//           </div>

//           <div className="grid grid-cols-3 items-center bg-gray-100 p-4 rounded-lg relative">
//             <div className="col-span-2 min-h-[190px]">
//               <Image height={200} width={200} alt="hello12"
//                 src="https://readymadeui.com/team-3.webp"
//                 className="rounded-lg"
//               />
//             </div>

//             <div className="bg-white rounded-lg p-4 absolute right-4 shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] ">
//               <h4 className="text-gray-800 text-sm font-bold">Simon Konecki</h4>
//               <p className="text-[10px] text-gray-500 mt-0.5">United State</p>
//               <p className="text-gray-800 mt-2 text-xs">Software Engineer</p>
//             </div>
//           </div>

//           <div className="grid grid-cols-3 items-center bg-gray-100 p-4 rounded-lg relative">
//             <div className="col-span-2 min-h-[190px]">
//               <Image height={200} width={200} alt="hello15"
//                 src="https://readymadeui.com/team-4.webp"
//                 className="rounded-lg"
//               />
//             </div>

//             <div className="bg-white rounded-lg p-4 absolute right-4 shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] ">
//               <h4 className="text-gray-800 text-sm font-bold">Simon Konecki</h4>
//               <p className="text-[10px] text-gray-500 mt-0.5">United State</p>
//               <p className="text-gray-800 mt-2 text-xs">Software Engineer</p>
//             </div>
//           </div>

//           <div className="grid grid-cols-3 items-center bg-gray-100 p-4 rounded-lg relative">
//             <div className="col-span-2 min-h-[190px]">
//               <Image height={200} width={200} alt="hello13"
//                 src="https://readymadeui.com/team-5.webp"
//                 className="rounded-lg"
//               />
//             </div>

//             <div className="bg-white rounded-lg p-4 absolute right-4 shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] ">
//               <h4 className="text-gray-800 text-sm font-bold">Alen</h4>
//               <p className="text-[10px] text-gray-500 mt-0.5">United State</p>
//               <p className="text-gray-800 mt-2 text-xs">Software Developer</p>
//             </div>
//           </div>

//           <div className="grid grid-cols-3 items-center bg-gray-100 p-4 rounded-lg relative">
//             <div className="col-span-2 min-h-[190px]">
//               <Image height={200} width={200} alt="hello2"
//                 src="https://readymadeui.com/team-6.webp"
//                 className="rounded-lg"
//               />
//             </div>

//             <div className="bg-white rounded-lg p-4 absolute right-4 shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] ">
//               <h4 className="text-gray-800 text-sm font-bold">Sophia</h4>
//               <p className="text-[10px] text-gray-500 mt-0.5">United State</p>
//               <p className="text-gray-800 mt-2 text-xs">Web Designer</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className=" bg-gray-50 flex items-center justify-center py-5">
//         <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
//           <div className="w-full max-w-6xl mx-auto">
//             <div className="text-center max-w-xl mx-auto">
//               <h1 className="text-6xl md:text-7xl font-bold mb-5 text-black-600">
//                 What people <br></br>are saying.
//               </h1>
//               <h3 className="text-xl mb-5 font-light">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               </h3>
//               <div className="text-center mb-10">
//                 <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
//                 <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
//                 <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
//                 <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
//                 <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
//               </div>
//             </div>
//             <div className="-mx-3 md:flex items-start">
//               <div className="px-3 md:w-1/3">
//                 <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
//                   <div className="w-full flex mb-4 items-center">
//                     <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
//                       <Image height={200} width={200} alt='hello3' src="https://i.pravatar.cc/100?img=1"  />
//                     </div>
//                     <div className="flex-grow pl-3">
//                       <h6 className="font-bold text-sm uppercase text-gray-600">
//                         Kenzie Edgar.
//                       </h6>
//                     </div>
//                   </div>
//                   <div className="w-full">
//                     <p className="text-sm leading-tight">
//                       <span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Quos sunt ratione dolor exercitationem minima quas itaque
//                       saepe quasi architecto vel! Accusantium, vero sint
//                       recusandae cum tempora nemo commodi soluta deleniti.
//                       <span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span>
//                     </p>
//                   </div>
//                 </div>
//                 <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
//                   <div className="w-full flex mb-4 items-center">
//                     <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
//                       <Image height={200} width={200} alt='hello4' src="https://i.pravatar.cc/100?img=2" />
//                     </div>
//                     <div className="flex-grow pl-3">
//                       <h6 className="font-bold text-sm uppercase text-gray-600">
//                         Stevie Tifft.
//                       </h6>
//                     </div>
//                   </div>
//                   <div className="w-full">
//                     <p className="text-sm leading-tight">
//                       <span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>
//                       Lorem ipsum, dolor sit amet, consectetur adipisicing elit.
//                       Dolore quod necessitatibus, labore sapiente, est,
//                       dignissimos ullam error ipsam sint quam tempora vel.
//                       <span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="px-3 md:w-1/3">
//                 <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
//                   <div className="w-full flex mb-4 items-center">
//                     <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
//                       <Image height={200} width={200} alt='hello6' src="https://i.pravatar.cc/100?img=3"  />
//                     </div>
//                     <div className="flex-grow pl-3">
//                       <h6 className="font-bold text-sm uppercase text-gray-600">
//                         Tommie Ewart.
//                       </h6>
//                     </div>
//                   </div>
//                   <div className="w-full">
//                     <p className="text-sm leading-tight">
//                       <span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>
//                       Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                       Vitae, obcaecati ullam excepturi dicta error deleniti
//                       sequi.
//                       <span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span>
//                     </p>
//                   </div>
//                 </div>
//                 <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
//                   <div className="w-full flex mb-4 items-center">
//                     <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
//                       <Image width={200} height={200} alt='hello7' src="https://i.pravatar.cc/100?img=4" />
//                     </div>
//                     <div className="flex-grow pl-3">
//                       <h6 className="font-bold text-sm uppercase text-gray-600">
//                         Charlie Howse.
//                       </h6>
//                     </div>
//                   </div>
//                   <div className="w-full">
//                     <p className="text-sm leading-tight">
//                       <span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Architecto inventore voluptatum nostrum atque, corrupti,
//                       vitae esse id accusamus dignissimos neque reprehenderit
//                       natus, hic sequi itaque dicta nisi voluptatem! Culpa,
//                       iusto.
//                       <span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="px-3 md:w-1/3">
//                 <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
//                   <div className="w-full flex mb-4 items-center">
//                     <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
//                       <Image height={200} width={200} alt='hello8' src="https://i.pravatar.cc/100?img=5" />
//                     </div>
//                     <div className="flex-grow pl-3">
//                       <h6 className="font-bold text-sm uppercase text-gray-600">
//                         Nevada Herbertson.
//                       </h6>
//                     </div>
//                   </div>
//                   <div className="w-full">
//                     <p className="text-sm leading-tight">
//                       <span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Nobis, voluptatem porro obcaecati dicta, quibusdam sunt
//                       ipsum, laboriosam nostrum facere exercitationem pariatur
//                       deserunt tempora molestiae assumenda nesciunt alias eius?
//                       Illo, autem!
//                       <span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span>
//                     </p>
//                   </div>
//                 </div>
//                 <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
//                   <div className="w-full flex mb-4 items-center">
//                     <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
//                       <Image width={200} height={200} alt='hello8' src="https://i.pravatar.cc/100?img=6"  />
//                     </div>
//                     <div className="flex-grow pl-3">
//                       <h6 className="font-bold text-sm uppercase text-gray-600">
//                         Kris Stanton.
//                       </h6>
//                     </div>
//                   </div>
//                   <div className="w-full">
//                     <p className="text-sm leading-tight">
//                       <span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Voluptatem iusto, explicabo, cupiditate quas totam!
//                       <span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="relative  bg-[#e4c86a] bg-cover bg-center">
//         <div class
//         Name="absolute inset-0 bg-yellow-500 bg-opacity-40 backdrop-blur-sm"></div>
//         <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
//           <div className="px-6 py-6 md:px-12 lg:flex lg:items-center lg:px-16">
//             <div className="lg:flex-1 xl:w-0">
//               <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
//                 Email Newsletter
//               </h2>
//               <p className="mt-3 max-w-3xl text-lg leading-6 text-white">
//                 Sign up for our email newsletter to stay up to date.
//               </p>
//             </div>
//             <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
//               <form className="sm:flex" id="revue-form" target="_blank">
//                 <input
//                   type="email"
//                   autocomplete="email"
//                   required=""
//                   className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-0"
//                   placeholder="Enter your email"
//                 />
//                 <button
//                   type="submit"
//                   className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-black px-5 py-3 text-base font-medium text-white shadow hover:bg-black-400 focus:outline-none focus:ring-0 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
//                 >
//                   Subscribe
//                 </button>
//               </form>
//               <p className="mt-3 text-sm text-white">
//                 We will never send any spam emails. Promise.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
