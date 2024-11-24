import React from "react";
import { BiBook } from "react-icons/bi";
function Courses() {
  return (
    <div className="bg-white text-black">
      {/* <div className=''>
            <h1 className=''>Courses</h1>
            </div> */}
      <div className="w-[100vw] sm:ml-[100px] h-full sm:w-[40%] ml-5 text-black flex flex-col justify-center ">
        <h1 className="sm:text-[40px] text-[30px] font-semibold">
          Explore Courses by Category
        </h1>
        <h1 className="w-[80vw] ml-auto mr-auto text-[19px] ">
          Discover a ideal range of courses covering a variety of subjects,
          taught by expert instructors
        </h1>
      </div>
      <div>
        <section className="h-fit w-[80vw] flex justify-evenly flex-wrap ml-auto mr-auto mt-10">
          <div className="w-[380px] bg-slate-100 flex h-[130px] m-5 ">
            <div className="w-[32%] h-[100%] bg-white border-slate-100 border-x-[15px] border-y-[15px] flex justify-center items-center">
              {/* <BiBook size={26} className="bg-white "/>  */}
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="100" height="100" rx="5" fill="white" />
                <path
                  d="M48.3334 64.0001H51.6934C52.9734 64.0001 53.8 63.0934 53.56 61.9867L53.0133 59.5735H47.0133L46.4667 61.9867C46.2267 63.0267 47.1334 64.0001 48.3334 64.0001Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M53.0134 59.5602L55.3201 57.5069C56.6134 56.3602 56.6667 55.5601 55.6401 54.2668L51.5734 49.1069C50.7201 48.0269 49.3201 48.0269 48.4667 49.1069L44.4001 54.2668C43.3734 55.5601 43.3734 56.4002 44.7201 57.5069L47.0267 59.5602"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M50.0134 48.8269V52.2003"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M50.6933 40.6667H49.3599C48.6266 40.6667 48.0266 40.0667 48.0266 39.3334V38.0001C48.0266 37.2667 48.6266 36.6667 49.3599 36.6667H50.6933C51.4266 36.6667 52.0266 37.2667 52.0266 38.0001V39.3334C52.0266 40.0667 51.4266 40.6667 50.6933 40.6667Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M38.3599 52.8934H39.6933C40.4266 52.8934 41.0266 52.2934 41.0266 51.5601V50.2267C41.0266 49.4934 40.4266 48.8933 39.6933 48.8933H38.3599C37.6266 48.8933 37.0266 49.4934 37.0266 50.2267V51.5601C37.0266 52.2934 37.6266 52.8934 38.3599 52.8934Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M61.6401 52.8934H60.3067C59.5734 52.8934 58.9734 52.2934 58.9734 51.5601V50.2267C58.9734 49.4934 59.5734 48.8933 60.3067 48.8933H61.6401C62.3734 48.8933 62.9734 49.4934 62.9734 50.2267V51.5601C62.9734 52.2934 62.3734 52.8934 61.6401 52.8934Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M48.0267 38.7468C42.9467 39.3468 39 43.6535 39 48.8935"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M60.9999 48.8935C60.9999 43.6668 57.0799 39.3735 52.0266 38.7468"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="w-[68%] h-[100%] bg-slate-100 text-left flex flex-col justify-center  p-2">
              <h1 className="font-semibold text-lg">Design and Development</h1>
              <h1 className="text-[18px]">50+ Courses Available</h1>
            </div>
          </div>
          <div className="w-[380px] bg-slate-100 flex h-[130px] m-5 ">
            <div className="w-[32%] h-[100%] bg-white border-slate-100 border-x-[15px] border-y-[15px] flex justify-center items-center">
              {/* <BiBook size={26} className="bg-white "/>  */}
              <svg
                width="101"
                height="100"
                viewBox="0 0 101 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.666626"
                  width="100"
                  height="100"
                  rx="5"
                  fill="white"
                />
                <path
                  d="M37.3333 47.3332V52.6665C37.3333 55.3332 38.6666 56.6665 41.3333 56.6665H43.24C43.7333 56.6665 44.2266 56.8132 44.6533 57.0665L48.5466 59.5065C51.9066 61.6132 54.6666 60.0799 54.6666 56.1199V43.8799C54.6666 39.9065 51.9066 38.3865 48.5466 40.4932L44.6533 42.9332C44.2266 43.1865 43.7333 43.3332 43.24 43.3332H41.3333C38.6666 43.3332 37.3333 44.6665 37.3333 47.3332Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                />
                <path
                  d="M58.6666 44.6667C61.04 47.8267 61.04 52.1734 58.6666 55.3334"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M61.1066 41.3333C64.96 46.4666 64.96 53.5333 61.1066 58.6666"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="w-[68%] h-[100%] bg-slate-100 text-left flex flex-col justify-center  p-2">
              <h1 className="font-semibold text-xl">Marketing</h1>
              <h1 className="text-[20px]">50+ Courses Available</h1>
            </div>
          </div>
          <div className="w-[380px] bg-slate-100 flex h-[130px] m-5 ">
            <div className="w-[32%] h-[100%] bg-white border-slate-100 border-x-[15px] border-y-[15px] flex justify-center items-center">
              {/* <BiBook size={26} className="bg-white "/>  */}
              <svg
                width="101"
                height="100"
                viewBox="0 0 101 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.333313"
                  width="100"
                  height="100"
                  rx="5"
                  fill="white"
                />
                <path
                  d="M38.3333 57.9734L41.7333 57.9867C42.9466 57.9867 44.08 57.3867 44.7466 56.3867L53.2667 43.6134C53.9333 42.6134 55.0666 42.0001 56.28 42.0134L62.3467 42.0401"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M59.6666 60.6401L62.3333 57.9734"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M46.1867 45.4933L44.7466 43.4933C44.0666 42.5466 42.9733 41.9867 41.8133 42L38.3333 42.0133"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M51.6266 54.5066L53.2533 56.5999C53.9333 57.4799 55 57.9999 56.12 57.9999L62.3467 57.9732"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M62.3333 42.0268L59.6666 39.3601"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="w-[68%] h-[100%] bg-slate-100 text-left flex flex-col justify-center  p-2">
              <h1 className="font-semibold text-xl">Development</h1>
              <h1 className="text-[20px]">50+ Courses Available</h1>
            </div>
          </div>
          <div className="w-[380px] bg-slate-100 flex h-[130px] m-5 ">
            <div className="w-[32%] h-[100%] bg-white border-slate-100 border-x-[15px] border-y-[15px] flex justify-center items-center">
              {/* <BiBook size={26} className="bg-white "/>  */}
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="100" height="100" rx="5" fill="white" />
                <path
                  d="M50 59.3334C54.4133 59.3334 58 55.7467 58 51.3334V44.6667C58 40.2534 54.4133 36.6667 50 36.6667C45.5867 36.6667 42 40.2534 42 44.6667V51.3334C42 55.7467 45.5867 59.3334 50 59.3334Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M38 48.6667V51.3334C38 57.9601 43.3733 63.3334 50 63.3334C56.6267 63.3334 62 57.9601 62 51.3334V48.6667"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M46.1467 43.9732C48.52 43.1066 51.1067 43.1066 53.48 43.9732"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M47.3734 47.9733C48.9734 47.5333 50.6667 47.5333 52.2667 47.9733"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="w-[68%] h-[100%] bg-slate-100 text-left flex flex-col justify-center  p-2">
              <h1 className="font-semibold text-xl">Communication</h1>
              <h1 className="text-[20px]">50+ Courses Available</h1>
            </div>
          </div>
          <div className="w-[380px] bg-slate-100 flex h-[130px] m-5 ">
            <div className="w-[32%] h-[100%] bg-white border-slate-100 border-x-[15px] border-y-[15px] flex justify-center items-center">
              {/* <BiBook size={26} className="bg-white "/>  */}
              <svg
                width="101"
                height="100"
                viewBox="0 0 101 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.666626"
                  width="100"
                  height="100"
                  rx="5"
                  fill="white"
                />
                <path
                  d="M52.6666 49.9999C52.6666 54.2399 49.24 57.6666 45 57.6666C40.76 57.6666 37.3333 54.2399 37.3333 49.9999C37.3333 45.7599 40.76 42.3333 45 42.3333"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M47.9999 50C47.9999 45.5867 51.5866 42 55.9999 42C60.4133 42 63.9999 45.5867 63.9999 50C63.9999 54.4133 60.4133 58 55.9999 58"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="w-[68%] h-[100%] bg-slate-100 text-left flex flex-col justify-center  p-2">
              <h1 className="font-semibold text-xl">Digital Marketing</h1>
              <h1 className="text-[20px]">50+ Courses Available</h1>
            </div>
          </div>
          <div className="w-[380px] bg-slate-100 flex h-[130px] m-5 ">
            <div className="w-[32%] h-[100%] bg-white border-slate-100 border-x-[15px] border-y-[15px] flex justify-center items-center">
              {/* <BiBook size={26} className="bg-white "/>  */}
              <svg
                width="101"
                height="100"
                viewBox="0 0 101 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.333313"
                  width="100"
                  height="100"
                  rx="5"
                  fill="white"
                />
                <path
                  d="M57.3734 47.9334L62.3333 42.9734L57.3734 38.0134"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M38.3333 42.9734H62.3333"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M43.2933 52.0667L38.3333 57.0267L43.2933 61.9867"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M62.3333 57.0269H38.3333"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="w-[68%] h-[100%] bg-slate-100 text-left flex flex-col justify-center  p-2">
              <h1 className="font-semibold text-xl">Self Development </h1>
              <h1 className="text-[20px]">50+ Courses Available</h1>
            </div>
          </div>
          <div className="w-[380px] bg-slate-100 flex h-[130px] m-5 ">
            <div className="w-[32%] h-[100%] bg-white border-slate-100 border-x-[15px] border-y-[15px] flex justify-center items-center">
              {/* <BiBook size={26} className="bg-white "/>  */}
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="100" height="100" rx="5" fill="white" />
                <path
                  d="M44.6666 63.3333H55.3333C60.6933 63.3333 61.6533 61.1867 61.9333 58.5733L62.9333 47.9067C63.2933 44.6533 62.36 42 56.6666 42H43.3333C37.64 42 36.7066 44.6533 37.0666 47.9067L38.0666 58.5733C38.3466 61.1867 39.3066 63.3333 44.6666 63.3333Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M44.6667 42V40.9333C44.6667 38.5733 44.6667 36.6666 48.9334 36.6666H51.0667C55.3334 36.6666 55.3334 38.5733 55.3334 40.9333V42"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M52.6666 51.3333V52.6667C52.6666 52.68 52.6666 52.68 52.6666 52.6933C52.6666 54.1467 52.6533 55.3333 50 55.3333C47.36 55.3333 47.3333 54.16 47.3333 52.7067V51.3333C47.3333 50 47.3333 50 48.6666 50H51.3333C52.6666 50 52.6666 50 52.6666 51.3333Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M62.8667 48.6666C59.7867 50.9066 56.2667 52.24 52.6667 52.6933"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M37.4933 49.0266C40.4933 51.0799 43.88 52.3199 47.3333 52.7066"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="w-[68%] h-[100%] bg-slate-100 text-left flex flex-col justify-center  p-2">
              <h1 className="font-semibold text-xl">Business</h1>
              <h1 className="text-[20px]">50+ Courses Available</h1>
            </div>
          </div>
          <div className="w-[380px] bg-slate-100 flex h-[130px] m-5 ">
            <div className="w-[32%] h-[100%] bg-white border-slate-100 border-x-[15px] border-y-[15px] flex justify-center items-center">
              {/* <BiBook size={26} className="bg-white "/>  */}
              <svg
                width="101"
                height="100"
                viewBox="0 0 101 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.666626"
                  width="100"
                  height="100"
                  rx="5"
                  fill="white"
                />
                <path
                  d="M64 56.32V40.2267C64 38.6267 62.6933 37.44 61.1066 37.5734H61.0266C58.2266 37.8134 53.9733 39.24 51.6 40.7334L51.3733 40.88C50.9866 41.12 50.3466 41.12 49.96 40.88L49.6266 40.68C47.2533 39.2 43.0133 37.7867 40.2133 37.56C38.6266 37.4267 37.3333 38.6267 37.3333 40.2134V56.32C37.3333 57.6 38.3733 58.8 39.6533 58.96L40.04 59.0134C42.9333 59.4 47.4 60.8667 49.96 62.2667L50.0133 62.2934C50.3733 62.4934 50.9466 62.4934 51.2933 62.2934C53.8533 60.88 58.3333 59.4 61.24 59.0134L61.68 58.96C62.96 58.8 64 57.6 64 56.32Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M50.6666 41.3199V61.3199"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M44.9999 45.3199H41.9999"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M45.9999 49.3199H41.9999"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="w-[68%] h-[100%] bg-slate-100 text-left flex flex-col justify-center  p-2">
              <h1 className="font-semibold text-xl">Finance</h1>
              <h1 className="text-[20px]">50+ Courses Available</h1>
            </div>
          </div>
          <div className="w-[380px] bg-slate-100 flex h-[130px] m-5 ">
            <div className="w-[32%] h-[100%] bg-white border-slate-100 border-x-[15px] border-y-[15px] flex justify-center items-center">
              {/* <BiBook size={26} className="bg-white " /> */}
              <svg
                width="101"
                height="100"
                viewBox="0 0 101 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.333313"
                  width="100"
                  height="100"
                  rx="5"
                  fill="white"
                />
                <path
                  d="M39 58V43.3333C39 38 40.3333 36.6666 45.6666 36.6666H55C60.3333 36.6666 61.6666 38 61.6666 43.3333V56.6666C61.6666 56.8533 61.6666 57.04 61.6533 57.2266"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M42.8 54H61.6666V58.6667C61.6666 61.24 59.5733 63.3333 57 63.3333H43.6666C41.0933 63.3333 39 61.24 39 58.6667V57.8C39 55.7067 40.7066 54 42.8 54Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M45 43.3334H55.6666"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M45 48H51.6666"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="w-[68%] h-[100%] bg-slate-100 text-left flex flex-col justify-center  p-2">
              <h1 className="font-semibold text-xl">Consulting</h1>
              <h1 className="text-[20px]">50+ Courses Available</h1>
            </div>
          </div>
          {/* <div className="w-[320px] bg-slate-100 flex h-[160px] ">
            <div className="w-[50%] h-[100%] bg-white border-slate-100 border-[40px] flex justify-center items-center">
               <BiBook size={26} className="bg-white "/> 
            </div>
            <div  className="w-[50%] h-[100%] bg-slate-100 flex text-start flex-col justify-center items-center ml-2">
              <h1 className="font-semibold text-xl w-fit mr-auto">Marketing</h1> 
              <h1>50+ Courses Available</h1> 
            </div>
          </div>
          <div className="w-[320px] bg-slate-100 flex h-[160px] ">
            <div className="w-[50%] h-[100%] bg-white border-slate-100 border-[40px] flex justify-center items-center">
               <BiBook size={26} className="bg-white "/> 
            </div>
            <div  className="w-[50%] h-[100%] bg-slate-100 flex text-start flex-col justify-center items-center ml-2">
              <h1 className="font-semibold text-xl w-fit mr-auto">Development</h1> 
              <h1>50+ Courses Available</h1> 
            </div>
          </div>
          <div className="w-[320px] bg-slate-100 flex h-[160px] ">
            <div className="w-[50%] h-[100%] bg-white border-slate-100 border-[40px] flex justify-center items-center">
               <BiBook size={26} className="bg-white "/> 
            </div>
            <div  className="w-[50%] h-[100%] bg-slate-100 flex text-start flex-col justify-center items-center ml-2">
              <h1 className="font-semibold text-xl w-fit mr-auto">Communication</h1> 
              <h1>50+ Courses Available</h1> 
            </div>
          </div>
          <div className="w-[320px] bg-slate-100 flex h-[160px] ">
            <div className="w-[50%] h-[100%] bg-white border-slate-100 border-[40px] flex justify-center items-center">
               <BiBook size={26} className="bg-white "/> 
            </div>
            <div  className="w-[50%] h-[100%] bg-slate-100 text-left flex flex-col justify-center items-center p-2">
              <h1 className="font-semibold text-xl">Design and Development</h1> 
              <h1>50+ Courses Available</h1> 
            </div>
          </div> */}
        </section>
      </div>
    </div>
  );
}

export default Courses;
