import React from "react";

const Loading = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-[50px] w-[50px] border-t-2 border-b-2 border-blue-600"></div>
        <p className="ml-4">Loading...</p>
      </div>
    </>
  );
};

export default Loading;
