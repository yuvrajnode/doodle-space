import React from "react";

function Background() {
  return (
    <div>
      <div className="absolute top-10 sm:top-40 left-1/4 z-0 m-auto size-1/4 bg-[#00f0ff] mt-96 sm:mt-0 opacity-[0.04] blur-[180px] rounded-full" />
      <div className="absolute top-10 sm:top-60 left-1/2 z-0 m-auto size-1/4 bg-[#7b61ff] mt-96 sm:mt-0 opacity-[0.05] blur-[180px] rounded-full" />
      <div className="absolute top-10 sm:top-80 left-1/12 z-0 m-auto size-1/4 bg-[#00f0ff] mt-96 sm:mt-0 opacity-[0.03] blur-[200px] rounded-full" />
      <div className="absolute top-10 sm:top-60 right-1/12 z-0 m-auto size-1/4 bg-[#ff3dff] mt-96 sm:mt-0 opacity-[0.03] blur-[200px] rounded-full" />
    </div>
  );
}

export default Background;
