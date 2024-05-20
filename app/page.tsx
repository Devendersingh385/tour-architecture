import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="bg-[#5452f5] bg-[url('/banner-hero.avif')] bg-center bg-no-repeat bg-cover min-h-[480px] py-[70px] relative mt-[68px]">
        <div className="grid text-center lg:mb-0 lg:max-w-screen-xl mx-auto lg:grid-cols-2 lg:text-left">
          <div className="">
            <h1 className="text-[48px] leading-[59px] font-bold text-white">
              Adventure Awaits: <br className="lg:block hiddne" /> Gear Up with{" "}
              <br className="lg:block hiddne" /> Tour Architecture!
            </h1>
            <p className="text-white text-lg">
              Gear Up for Adventure with Tour Architecture: Rent or Buy
              Top-Quality Hiking Accessories Today!"
            </p>
          </div>
          <div className="">
            {/* <Image
              alt="dsds"
              src={"/banner-hero.avif"}
              width={500}
              height={500}
            /> */}
          </div>
        </div>
      </div>
      <div className=" py-10 relative">
        <div className="text-center lg:max-w-screen-xl mx-auto lg:grid-cols-1 lg:text-left mb-8">
          <h2 className="text-[42px] font-bold ">Our Products</h2>
          <p className="text-base font-normal">
            Elevate your camping game with our top-notch accessories for a
            memorable outdoor adventure.
          </p>
        </div>
        <div className="grid text-center gap-6 lg:mb-0 lg:max-w-screen-xl mx-auto lg:grid-cols-4 lg:text-left">
          <div className="">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full">
              <a href="#">
                <Image
                  className="rounded-t-lg"
                  src="/two-person.avif"
                  alt=""
                  width={500}
                  height={300}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Camping - 2 Person
                  </h5>
                </a>
                {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a> */}
              </div>
            </div>
          </div>
          <div className="">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full">
              <a href="#">
                <Image
                  className="rounded-t-lg"
                  src="/three-person.avif"
                  alt=""
                  width={500}
                  height={300}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Camping - 3 Person
                  </h5>
                </a>
                {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a> */}
              </div>
            </div>
          </div>
          <div className="">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full">
              <a href="#">
                <Image
                  className="rounded-t-lg"
                  src="/sleeping-bag.webp"
                  alt=""
                  width={500}
                  height={300}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Sleeping Bag 0-5 degree
                  </h5>
                </a>
                 
              </div>
            </div>
          </div>
          <div className="">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full">
              <a href="#">
                <Image
                  className="rounded-t-lg"
                  src="/Sleeping-bag-simple.webp"
                  alt=""
                  width={500}
                  height={300}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Camping Sleeping Bag10°
                  </h5>
                </a>
               
              </div>
            </div>
          </div>
          <div className="">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full">
              <a href="#">
                <Image
                  className="rounded-t-lg"
                  src="/gas.webp"
                  alt=""
                  width={500}
                  height={300}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Camping Stove (Portable)
                  </h5>
                </a>
               
              </div>
            </div>
          </div>
          <div className="">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full">
              <a href="#">
                <Image
                  className="rounded-t-lg"
                  src="/Butane-Canister.webp"
                  alt=""
                  width={500}
                  height={300}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Butane Canister
                  </h5>
                </a>
                
              </div>
            </div>
          </div>
          <div className="">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full">
              <a href="#">
                <Image
                  className="rounded-t-lg"
                  src="/Battery-Head-Torch.webp"
                  alt=""
                  width={500}
                  height={300}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    FORCLAZ Battery Head Torch
                  </h5>
                </a>
                
              </div>
            </div>
          </div>
          <div className="">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full">
              <a href="#">
                <Image
                  className="rounded-t-lg"
                  src="/tourch.webp"
                  alt=""
                  width={500}
                  height={300}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    GENERIC LED TOURCH
                  </h5>
                </a>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-10 relative">
        <div className="text-center lg:mb-0 lg:max-w-screen-xl mx-auto lg:text-left mb-8">
          <h2 className="text-[42px] font-bold mb-6">Why Choose Us</h2>
        </div>
        <div className="grid text-center gap-6 lg:mb-0 lg:max-w-screen-xl mx-auto lg:grid-cols-3 lg:text-left">
          <div className="">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-[32px] h-full">
              <a href="#" className="mb-4 block">
                <Image
                  className="rounded-t-lg"
                  src="/quality-assurance.png"
                  alt=""
                  width={80}
                  height={80}
                />
              </a>
              <div className="p-0">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Quality Products
                  </h5>
                </a>
                <p>We do a strict quality-check for every product, as ensuring quality product matters to us.</p>               
              </div>
            </div>
          </div> 
          <div className="">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-[32px] h-full">
              <a href="#" className="mb-4 block">
                <Image
                  className="rounded-t-lg"
                  src="/shopping-bag.png"
                  alt=""
                  width={80}
                  height={80}
                />
              </a>
              <div className="">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  One-stop rental solution
                  </h5>
                </a>
                <p>All equipment rental solution is under one roof on VikNick Services.</p>               
              </div>
            </div>
          </div>       
          <div className="">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-[32px] h-full">
              <a href="#" className="mb-4 block">
                <Image
                  className="rounded-t-lg"
                  src="/profit-growth.png"
                  alt=""
                  width={80}
                  height={80}
                />
              </a>
              <div className="">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Convenient rentals
                  </h5>
                </a>
                <p>All equipment rental solution is under one roof on VikNick Services.</p>               
              </div>
            </div>
          </div>       
          <div className="">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-[32px] h-full">
              <a href="#" className="mb-4 block">
                <Image
                  className="rounded-t-lg"
                  src="/profit-growth.png"
                  alt=""
                  width={80}
                  height={80}
                />
              </a>
              <div className="">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Economical solutions
                  </h5>
                </a>
                <p>All equipment rental solution is under one roof on VikNick Services.</p>               
              </div>
            </div>
          </div>       
          <div className="">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-[32px] h-full">
              <a href="#" className="mb-4 block">
                <Image
                  className="rounded-t-lg"
                  src="/customer-service.png"
                  alt=""
                  width={80}
                  height={80}
                />
              </a>
              <div className="">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Customer support
                  </h5>
                </a>
                <p>All equipment rental solution is under one roof on VikNick Services.</p>               
              </div>
            </div>
          </div>       
          <div className="">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-[32px] h-full">
              <a href="#" className="mb-4 block">
                <Image
                  className="rounded-t-lg"
                  src="/traveling.png"
                  alt=""
                  width={80}
                  height={80}
                />
              </a>
              <div className="">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Door to door delivery
                  </h5>
                </a>
                <p>All equipment rental solution is under one roof on VikNick Services.</p>               
              </div>
            </div>
          </div>       
        </div>
      </div>      
    </main>
  );
}
