import React from "react";
import BackgroundBeams from "components/common/animation/bg-animation";

const AuthTemplate = ({ children }) => {
  return (
    <>
      <div class="bg-neutral-950">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex justify-center items-center py-3">
            {children}
          </div>
          <div className="hidden lg:flex md:h-[60rem] xl:h-[48rem] overflow-hidden w-full rounded-l-[3rem] bg-gray-900 relative items-start justify-start antialiased">
            <div className="p-12">
              <h1 className="relative z-10 text-lg md:text-4xl  bg-clip-text text-transparent bg-gradient-to-b from-slate-200 to-slate-600 font-sans font-bold">
                Get Started
              </h1>
              <p></p>
              <p className="text-neutral-500 max-w-lg mx-auto my-2 text-lg relative z-10">
                Create an account to experience our powerful CRM tool.
              </p>
            </div>
            <img
              src="/candle-stick.jpg"
              className="w-[100%] bottom-0 translate-y-24 rounded-[3.5rem] absolute hidden lg:block"
            />
            <BackgroundBeams />
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthTemplate;
