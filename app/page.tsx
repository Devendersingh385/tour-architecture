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
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Camping - 3 Person
                    </h5>
                  </a>
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
