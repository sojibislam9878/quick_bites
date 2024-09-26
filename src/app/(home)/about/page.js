import Image from "next/image";
import Marque from "../../component/Restaurants&Promotions/Marque";

export default function AboutPage() {
  return (
    <>
      <section className="bg-white  pt-[120px]">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white w-[460px] ">
              Nothing to worry about with QuickBites
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 w-[460px]">
              From checkout to global sales tax compliance, companies around the
              world use Flowbite to simplify their payment stack.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Speak to Sales
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-[50px] ">
            <img
              src="https://bslthemes.com/html/quickeat/assets/img/photo-9.jpg"
              alt="mockup"
              className="rounded-[50px] rotate-45"
            />
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900 my-5">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="mt-8">
            <img
              className="w-full rounded-lg"
              src="https://bslthemes.com/html/quickeat/assets/img/illustration-5.png"
              alt="office content 1"
            />
          </div>
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our mission is to save your time
            </h2>
            <p className="mb-4">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick, but big
              enough to deliver the scope you want at the pace you need. Small
              enough to be simple and quick, but big enough to deliver the scope
              you want at the pace you need.
            </p>
            <p>
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900 mb-10">
        <div className="container mx-auto px-4 md:px-10">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="p-7 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-yellow-400">
              <a href="#" className="">
                <img
                  className="rounded-t-lg p-2"
                  src="https://bslthemes.com/html/quickeat/assets/img/service-icon-2.svg"
                  alt=""
                />
              </a>
              <div className="">
                <a href="#">
                  <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Free Delivery
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-8 ">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </div>

            <div className="p-7 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-yellow-400">
              <a href="#">
                <img
                  className="rounded-t-lg p-2"
                  src="https://bslthemes.com/html/quickeat/assets/img/service-icon-3.svg"
                  alt=""
                />
              </a>
              <div className="">
                <a href="#">
                  <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Save Your Time
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </div>

            <div className="p-7 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-yellow-400">
              <a href="#">
                <img
                  className="rounded-t-lg p-2"
                  src="https://bslthemes.com/html/quickeat/assets/img/service-icon-5.svg"
                  alt=""
                />
              </a>
              <div className="">
                <a href="#">
                  <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Regular Discounts
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </div>

            <div className="p-7 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-yellow-400">
              <a href="#">
                <img
                  className="rounded-t-lg p-2"
                  src="https://bslthemes.com/html/quickeat/assets/img/service-icon-7.svg"
                  alt=""
                />
              </a>
              <div className="">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Variety Food
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[url('https://bslthemes.com/html/quickeat/assets/img/background.png')] bg-cover bg-center dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="lg:col-span-6 col-span-12 flex justify-center items-center rounded-[50px]">
            <img
              src="https://bslthemes.com/html/quickeat/assets/img/photo-10.png"
              alt="mockup"
              className="rounded-[50px]"
            />
          </div>
          <div className="mr-auto place-self-center lg:col-span-6 col-span-12">
            <div className="flex my-10">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white w-[460px]">
                Service shows good taste.
              </h1>
              <p className="max-w-2xl mb-6  text-black-500 lg:mb-8 md:text-lg text-lg font-semibold dark:text-gray-400 w-[460px]">
                <span className="text-[#F29F05] font-bold text-6xl">976 </span>
                Satisfied Customers
              </p>
            </div>
            <div className="flex  bg-white p-8 rounded-lg shadow-md w-[600px] justify-between">
              <div className="flex ">
                <h1 className="text-[#F29F05] font-bold text-6xl">12 </h1>
                <div className="flex flex-col text-left ml-4">
                  <p className="text-lg font-semibold">Best</p>
                  <p className="text-lg font-semibold">Restaurants</p>
                </div>
              </div>

              <div className="flex ">
                <h1 className="text-[#F29F05] font-bold text-6xl">1k + </h1>
                <div className="flex flex-col text-left  ml-4">
                  <p className="text-lg font-semibold">Food</p>
                  <p className="text-lg font-semibold">Delivered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center">
                <h4 className="text-6xl text-black-400 text-center font-bold">Our trusted partners</h4>
            </div>
            <Marque/>
            
        </div>
      </section>
      <div className="lg:max-w-7xl sm:max-w-2xl max-sm:max-w-sm mx-auto mt-4">
        <div className="mb-14 text-center">
          <h4 className="text-6xl text-black-400 text-center font-bold">
            Our chef
          </h4>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 max-md:justify-center mt-12">
          <div className="grid grid-cols-3 items-center bg-gray-100 p-4 rounded-lg relative">
            <div className="col-span-2 min-h-[190px]">
              <img
                src="https://readymadeui.com/team-1.webp"
                className="rounded-lg"
              />
            </div>

            <div className="bg-white rounded-lg p-4 absolute right-4 shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] ">
              <h4 className="text-gray-800 text-sm font-bold">John Doe</h4>
              <p className="text-[10px] text-gray-500 mt-0.5">United State</p>
              <p className="text-gray-800 mt-2 text-xs">Software Engineer</p>
            </div>
          </div>

          <div className="grid grid-cols-3 items-center bg-gray-100 p-4 rounded-lg relative">
            <div className="col-span-2 min-h-[190px]">
              <img
                src="https://readymadeui.com/team-2.webp"
                className="rounded-lg"
              />
            </div>

            <div className="bg-white rounded-lg p-4 absolute right-4 shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] ">
              <h4 className="text-gray-800 text-sm font-bold">Mark Adair</h4>
              <p className="text-[10px] text-gray-500 mt-0.5">United State</p>
              <p className="text-gray-800 mt-2 text-xs">Software Engineer</p>
            </div>
          </div>

          <div className="grid grid-cols-3 items-center bg-gray-100 p-4 rounded-lg relative">
            <div className="col-span-2 min-h-[190px]">
              <img
                src="https://readymadeui.com/team-3.webp"
                className="rounded-lg"
              />
            </div>

            <div className="bg-white rounded-lg p-4 absolute right-4 shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] ">
              <h4 className="text-gray-800 text-sm font-bold">Simon Konecki</h4>
              <p className="text-[10px] text-gray-500 mt-0.5">United State</p>
              <p className="text-gray-800 mt-2 text-xs">Software Engineer</p>
            </div>
          </div>

          <div className="grid grid-cols-3 items-center bg-gray-100 p-4 rounded-lg relative">
            <div className="col-span-2 min-h-[190px]">
              <img
                src="https://readymadeui.com/team-4.webp"
                className="rounded-lg"
              />
            </div>

            <div className="bg-white rounded-lg p-4 absolute right-4 shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] ">
              <h4 className="text-gray-800 text-sm font-bold">Simon Konecki</h4>
              <p className="text-[10px] text-gray-500 mt-0.5">United State</p>
              <p className="text-gray-800 mt-2 text-xs">Software Engineer</p>
            </div>
          </div>

          <div className="grid grid-cols-3 items-center bg-gray-100 p-4 rounded-lg relative">
            <div className="col-span-2 min-h-[190px]">
              <img
                src="https://readymadeui.com/team-5.webp"
                className="rounded-lg"
              />
            </div>

            <div className="bg-white rounded-lg p-4 absolute right-4 shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] ">
              <h4 className="text-gray-800 text-sm font-bold">Alen</h4>
              <p className="text-[10px] text-gray-500 mt-0.5">United State</p>
              <p className="text-gray-800 mt-2 text-xs">Software Developer</p>
            </div>
          </div>

          <div className="grid grid-cols-3 items-center bg-gray-100 p-4 rounded-lg relative">
            <div className="col-span-2 min-h-[190px]">
              <img
                src="https://readymadeui.com/team-6.webp"
                className="rounded-lg"
              />
            </div>

            <div className="bg-white rounded-lg p-4 absolute right-4 shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] ">
              <h4 className="text-gray-800 text-sm font-bold">Sophia</h4>
              <p className="text-[10px] text-gray-500 mt-0.5">United State</p>
              <p className="text-gray-800 mt-2 text-xs">Web Designer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5">
        <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-6xl md:text-7xl font-bold mb-5 text-black-600">
                What people <br></br>are saying.
              </h1>
              <h3 className="text-xl mb-5 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <div className="text-center mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>
            <div className="-mx-3 md:flex items-start">
              <div className="px-3 md:w-1/3">
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=1" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Kenzie Edgar.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos sunt ratione dolor exercitationem minima quas itaque
                      saepe quasi architecto vel! Accusantium, vero sint
                      recusandae cum tempora nemo commodi soluta deleniti.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=2" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Stevie Tifft.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>
                      Lorem ipsum, dolor sit amet, consectetur adipisicing elit.
                      Dolore quod necessitatibus, labore sapiente, est,
                      dignissimos ullam error ipsam sint quam tempora vel.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-3 md:w-1/3">
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=3" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Tommie Ewart.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Vitae, obcaecati ullam excepturi dicta error deleniti
                      sequi.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=4" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Charlie Howse.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto inventore voluptatum nostrum atque, corrupti,
                      vitae esse id accusamus dignissimos neque reprehenderit
                      natus, hic sequi itaque dicta nisi voluptatem! Culpa,
                      iusto.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-3 md:w-1/3">
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=5" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Nevada Herbertson.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nobis, voluptatem porro obcaecati dicta, quibusdam sunt
                      ipsum, laboriosam nostrum facere exercitationem pariatur
                      deserunt tempora molestiae assumenda nesciunt alias eius?
                      Illo, autem!
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=6" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Kris Stanton.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatem iusto, explicabo, cupiditate quas totam!
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative  bg-[#e4c86a] bg-cover bg-center">
        <div classNameName="absolute inset-0 bg-yellow-500 bg-opacity-40 backdrop-blur-sm"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="px-6 py-6 md:px-12 lg:flex lg:items-center lg:px-16">
            <div className="lg:flex-1 xl:w-0">
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Email Newsletter
              </h2>
              <p className="mt-3 max-w-3xl text-lg leading-6 text-white">
                Sign up for our email newsletter to stay up to date.
              </p>
            </div>
            <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
              <form className="sm:flex" id="revue-form" target="_blank">
                <input
                  type="email"
                  autocomplete="email"
                  required=""
                  className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-0"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-black px-5 py-3 text-base font-medium text-white shadow hover:bg-black-400 focus:outline-none focus:ring-0 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-3 text-sm text-white">
                We will never send any spam emails. Promise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
