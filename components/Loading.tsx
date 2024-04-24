import React from "react";

const Loading = ({ text }: { text: string }) => {
  return (
    <div className="h-screen w-full flex_center fixed top-0 z-50 left-0 bg-white">
      {text}
    </div>
  );
};

export default Loading;
