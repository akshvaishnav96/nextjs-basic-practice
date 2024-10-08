import React from "react";
import Link from "next/link";
import RedirectBackBtn from "../components/RedirectBackBtn";
import Image from "next/image";
import { Suspense } from "react";
import ShowMsg from "@/components/ShowMsg";
export default function notFound() {
  return (
    <>
      <Suspense>
        <ShowMsg />
      </Suspense>
      <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="relative">
            <div className="absolute">
              <div className="">
                <h1 className="my-2 text-gray-800 font-bold text-2xl">
                  Looks like you&apos;ve found the doorway to the great nothing
                </h1>
                <p className="my-2 text-gray-800">
                  Sorry about that! Please visit our hompage to get where you
                  need to go.
                </p>
                <RedirectBackBtn />
              </div>
            </div>
            <div>
              <Image
                src="https://i.ibb.co/G9DC8S0/404-2.png"
                width={500}
                height={500}
                alt="image not found"
              />
            </div>
          </div>
        </div>
        <div>
          <Image
            src="https://i.ibb.co/ck1SGFJ/Group.png"
            width={500}
            height={500}
             alt="image not found"
          />
        </div>
      </div>
      <footer>
        askjd
      </footer>
    </>
  );
}
