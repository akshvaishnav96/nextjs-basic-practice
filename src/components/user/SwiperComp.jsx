"use client"

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation, Controller } from "swiper/modules";


export default function swiper({sliderPerView,spaceBetween,autoplay=true,delay=2500}) {
    autoplay ? {
        delay: 2500,
        disableOnInteraction: false,
      } : ""
  return (
    
    <Swiper
    slidesPerView={3}
    spaceBetween={30}
    autoplay={autoplay}
    pagination={{
      clickable: true,
      type: "bullets",
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper"
  >
    <SwiperSlide>
      {" "}
      <div className="rounded overflow-hidden shadow-lg">
        <div className="relative">
          <a href="#">
            <img
              className="w-full"
              src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
              alt="Sunset in the mountains"
            />
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
          </a>
          <a href="#!">
            <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              Photos
            </div>
          </a>

          <a href="!#">
            <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              <span className="font-bold">27</span>
              <small>March</small>
            </div>
          </a>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="rounded overflow-hidden shadow-lg">
        <div className="relative">
          <a href="#">
            <img
              className="w-full"
              src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
              alt="Sunset in the mountains"
            />
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
          </a>
          <a href="#!">
            <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              Photos
            </div>
          </a>

          <a href="!#">
            <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              <span className="font-bold">27</span>
              <small>March</small>
            </div>
          </a>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="rounded overflow-hidden shadow-lg">
        <div className="relative">
          <a href="#">
            <img
              className="w-full"
              src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
              alt="Sunset in the mountains"
            />
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
          </a>
          <a href="#!">
            <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              Photos
            </div>
          </a>

          <a href="!#">
            <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              <span className="font-bold">27</span>
              <small>March</small>
            </div>
          </a>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="rounded overflow-hidden shadow-lg">
        <div className="relative">
          <a href="#">
            <img
              className="w-full"
              src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
              alt="Sunset in the mountains"
            />
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
          </a>
          <a href="#!">
            <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              Photos
            </div>
          </a>

          <a href="!#">
            <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              <span className="font-bold">27</span>
              <small>March</small>
            </div>
          </a>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="rounded overflow-hidden shadow-lg">
        <div className="relative">
          <a href="#">
            <img
              className="w-full"
              src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
              alt="Sunset in the mountains"
            />
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
          </a>
          <a href="#!">
            <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              Photos
            </div>
          </a>

          <a href="!#">
            <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              <span className="font-bold">27</span>
              <small>March</small>
            </div>
          </a>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="rounded overflow-hidden shadow-lg">
        <div className="relative">
          <a href="#">
            <img
              className="w-full"
              src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
              alt="Sunset in the mountains"
            />
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
          </a>
          <a href="#!">
            <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              Photos
            </div>
          </a>

          <a href="!#">
            <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              <span className="font-bold">27</span>
              <small>March</small>
            </div>
          </a>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="rounded overflow-hidden shadow-lg">
        <div className="relative">
          <a href="#">
            <img
              className="w-full"
              src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
              alt="Sunset in the mountains"
            />
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
          </a>
          <a href="#!">
            <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              Photos
            </div>
          </a>

          <a href="!#">
            <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              <span className="font-bold">27</span>
              <small>March</small>
            </div>
          </a>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="rounded overflow-hidden shadow-lg">
        <div className="relative">
          <a href="#">
            <img
              className="w-full"
              src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
              alt="Sunset in the mountains"
            />
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
          </a>
          <a href="#!">
            <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              Photos
            </div>
          </a>

          <a href="!#">
            <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              <span className="font-bold">27</span>
              <small>March</small>
            </div>
          </a>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="rounded overflow-hidden shadow-lg">
        <div className="relative">
          <a href="#">
            <img
              className="w-full"
              src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
              alt="Sunset in the mountains"
            />
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
          </a>
          <a href="#!">
            <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              Photos
            </div>
          </a>

          <a href="!#">
            <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              <span className="font-bold">27</span>
              <small>March</small>
            </div>
          </a>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
  )
}
