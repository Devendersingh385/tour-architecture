"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="border-t border-gray-300 lg:pt-16 pt-12 text-sm pb-12 lg:px-0 px-[20px] bg-black/[.06] dark:bg-gray-800 dark:border-gray-700 mt-0">
        <div className="max-w-screen-xl mx-auto xl:px-0 lg:px-8 md:px-6 px-0">
          <div className="lg:pb-10 pb-8">
            <Link href="#" tabIndex={-1} className="mb-8 block">
              <h2 className="text-[42px] font-bold">Tour Architecture</h2>
            </Link>
          </div>
            
          <div className="pt-8 flex justify-between items-center border-t-[1px] border-solid border-[#EAECF0]">
              <p className="text-lg-base text-xs font-normal text-[#888888]">
              Copyright © {new Date().getFullYear()} Tour Architecture Inc.
              </p>     
          </div>
        </div>
      </footer>
    </>
  );
}
