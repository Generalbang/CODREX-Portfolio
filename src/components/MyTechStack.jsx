import React from "react";

function MyTechStack() {
  return (
    <div className="grid mx-auto">
      <div className="text-3xl font-bold">My Tech Stack</div>
      <div className="pr-8 pl-8 pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mx-auto uppercase text-2xl text-bold tech">
          <div className="p-4 flex flex-col items-center justify-center text-center">
            <img src="/svg/html5.svg" alt="" />
            <div>html5</div>
          </div>
          <div className="p-4 flex flex-col items-center justify-center text-center">
            <img src="/svg/css3.svg" alt="" />
            <div>css3</div>
          </div>
          <div className="p-4 flex flex-col items-center justify-center text-center">
            <img src="/svg/js.svg" alt="" />
            <div>javascript</div>
          </div>
          <div className="p-4 flex flex-col items-center justify-center text-center">
            <img src="/svg/react.svg" alt="" />
            <div>react.js</div>
          </div>

          <div className="p-4 flex flex-col items-center justify-center text-center">
            <img src="/svg/git-alt.svg" alt="" />
            <div>git</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTechStack;
