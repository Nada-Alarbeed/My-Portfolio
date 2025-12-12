import { useLottie } from "lottie-react";
import errorAnimation from "../assets/ERROR.json";
import { Link } from "react-router-dom";
const Error = () => {
  const options = {
    animationData: errorAnimation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white">
      <div className="w-3/4 md:w-1/2">{View}</div>
   <button className="bg-blue-50 text-black rounded-full w-fit  px-4 py-2 "><Link to={'/'}>BACK</Link></button>
    </div>
  );
};

export default Error;