import Image from "next/image";
import ParentComponent from "@/app/ParentComponent";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10 sm:mx-auto sm:w-full sm:max-w-md">
        <ParentComponent />
      </div>
  </div>
  )
}

export default Hero