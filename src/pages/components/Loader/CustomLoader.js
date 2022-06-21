import React from "react";
import Lottie from "react-lottie";

const CustomLoader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("@src/assets/lotify/loader.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="fallback-spinner app-loader">
      <Lottie options={defaultOptions} height={100} width={100} />
    </div>
  );
};

export default CustomLoader;
