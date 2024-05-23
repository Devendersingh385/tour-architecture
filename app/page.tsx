import Image from "next/image";
import Navbar from "./ui/header/navbar";
import Footer from "./ui/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="bg-[#5452f5] bg-[url('/banner-hero.avif')] bg-center bg-no-repeat bg-cover min-h-[480px] py-[70px] relative mt-[68px]">
        <div className="grid text-center lg:mb-0 lg:max-w-screen-xl mx-auto lg:grid-cols-2 lg:text-left">
          <div>
            <h1 className="text-[48px] leading-[59px] font-bold text-white">
              Adventure Awaits: <br className="lg:block hiddne" /> Gear Up with{" "}
              <br className="lg:block hiddne" /> Tour Architecture!
            </h1>
            <p className="text-white text-lg">
              Gear Up for Adventure with Tour Architecture: Rent or Buy
              Top-Quality Hiking Accessories Today!"
            </p>
          </div>
          <div>
          </div>
        </div>
      </div>    
      <Footer />         
    </main>
  );
}
