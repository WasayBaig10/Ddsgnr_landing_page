import React from "react";
import { Button } from "@/components/ui/button";

function Main() {
  return (
    <div>
      <section className="h-[85vh] w-[100vw] flex flex-col sm:flex-row items-center justify-center bg-white">
        <div className="w-[80vw] sm:ml-[100px] h-full sm:w-[40%] ml-[0px] text-black flex flex-col justify-center">
          <h1 className="sm:text-[40px] text-[30px] font-semibold">
            Learn new skills
          </h1>
          <h1 className="sm:text-[40px] text-[30px] font-semibold">
            online with ease
          </h1>
          <h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
            dolore esse facilis laborum voluptatibus omnis non
          </h1>
          <div className="w-[50%] flex justify-around sm:mt-2 mt-4">
            {/* <button className="bg-black h-12 w-40 text-slate-50 hover:bg-slate-600 rounded-md">
              Start learning now
            </button> */}
            <Button className="bg-black h-12 w-40 text-slate-50 hover:bg-slate-600 rounded-md">
              Start Learning now
            </Button>
            <Button
              variant={"secondary"}
              className="border border-black h-12 w-36 rounded-md ml-4 bg-white text-black hover:text-slate-50 hover:bg-black"
            >
              Explore courses
            </Button> 
            {/* <button className='border border-black h-12 w-36 rounded-md ml-4 hover:bg-black hover:text-slate-50'>Explore courses</button> */}
          </div>
        </div>
        <div className="h-fit w-[50%] border border-black">
        <img src="image.png" className="h-fit w-fit bg-contain bg-center bg-no-repeat text-black"/>
        </div>
      </section>
    </div>
  );
}

export default Main;
