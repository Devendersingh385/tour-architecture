import Image from "next/image";
import Navbar from "./ui/header/navbar";
import Footer from "./ui/footer";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <div className="bg-[#5452f5] bg-[url('/banner-hero.avif')] bg-center bg-no-repeat bg-cover min-h-[480px] py-[70px] relative mt-[68px]">
          <div className="grid text-center lg:mb-0 lg:max-w-screen-xl mx-auto lg:grid-cols-2 lg:text-left">
            <div>
              <h1 className="text-[48px] leading-[59px] font-bold text-white">
                Adventure Awaits: <br className="lg:block hidden" /> Gear Up
                with
                <br className="lg:block hidden" /> Tour Architecture!
              </h1>
              <p className="text-white text-lg">
                Gear Up for Adventure with Tour Architecture: Rent or Buy
                Top-Quality Hiking Accessories Today
              </p>
            </div>
            <div></div>
          </div>
        </div>
        <div className=" py-10 relative">
          <div className="text-center lg:max-w-screen-xl mx-auto lg:grid-cols-1 lg:text-left mb-8">
            <h2 className="text-[42px] font-bold">Our Products</h2>
            <p>
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
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white min-h-[64px]">
                      Camping - 2 Person
                    </h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="">
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white min-h-[64px]">
                      Camping - 3 Person
                    </h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="">
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white min-h-[64px]">
                      Sleeping Bag 0-5 degree
                    </h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="">
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white min-h-[64px]">
                      Camping Sleeping Bag10°
                    </h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="">
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white min-h-[64px]">
                      Camping Stove (Portable)
                    </h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="">
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white min-h-[64px]">
                      Butane Canister
                    </h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="">
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white min-h-[64px]">
                      FORCLAZ Battery Head Torch
                    </h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="">
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white min-h-[64px]">
                      GENERIC LED TOURCH
                    </h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className=" py-10 relative">
            <div className="grid text-center gap-4 lg:mb-0 lg:max-w-screen-xl mx-auto lg:grid-cols-1 lg:text-left">
              <h2 className="text-[42px] font-bold">Why Choose Us</h2>
            </div>
            <div className="grid text-center gap-6 lg:mb-0 lg:max-w-screen-xl mx-auto lg:grid-cols-3 lg:text-left">
              <div className="">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-[32px] h-full">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="/quality-assurance.png"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Quality Products
                      </h5>
                    </a>
                    <p>
                      We do a strict quality-check for every product, as
                      ensuring quality product matters to us.
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-[32px] h-full">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="/shopping-bag.png"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        One-stop rental solution
                      </h5>
                    </a>
                    <p>
                      All equipment rental solution is under one roof on VikNick
                      Services.
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-[32px] h-full">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="/shopping-bag.png"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        One-stop rental solution
                      </h5>
                    </a>
                    <p>
                      All equipment rental solution is under one roof on VikNick
                      Services.
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-[32px] h-full">
                  <a href="#" className="mb-4 block">
                    <img
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
                    <p>
                      All equipment rental solution is under one roof on VikNick
                      Services.
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-[32px] h-full">
                  <a href="#" className="mb-4 block">
                    <img
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
                    <p>
                      All equipment rental solution is under one roof on VikNick
                      Services.
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-[32px] h-full">
                  <a href="#" className="mb-4 block">
                    <img
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
                    <p>
                      All equipment rental solution is under one roof on VikNick
                      Services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
