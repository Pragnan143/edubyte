import { CreditCard } from "@mui/icons-material";
import React from "react";

const Checkoutpage = () => {
  const [code, setCode] = React.useState("");
  const [checker, setChecker] = React.useState("");
  function couponchecker() {
    code === "A50" ? setChecker("true") : setChecker("false");
  }

  function Calculator(x) {
    var price = x;
    var discount = 3500;
    var finalprice = price - discount;
    return finalprice;
  }

  return (
    <div className="bg-violet-100 ]">
      <div className="lg:mx-32 h-screen flex lg:flex-row flex-col justify-start w-full lg:w-[80rem]">
        <div className=" mt-10 w-full p-10 drop-shadow-xl mx-auto lg:mx-0 font-bold text-xl flex flex-col gap-12">
          <h2>Order Summary</h2>
          <div className="lg:w-[96%]  h-[15rem] bg-white lg:p-5 justify-between flex gap-5 rounded-lg">
            <div className="lg:w-1/3 w-full h-full lg:h-[12.5rem] rounded-lg bg-black">
              <img
                src=""
                alt=""
                className="h-full w-full overflow-hidden"
              ></img>
            </div>
            <div className="w-2/3 hidden lg:flex justify-between">
              <div className=" flex gap-6 py-5 ">
                <p className="font-bold text-md ">
                  Data Structures and Algorithms
                </p>
              </div>
              <div className="flex w-24 gap-2 pt-5 flex-col">
                <p className="text-gray-400 font-normal text-md">Price</p>
                <p className="text-gray-400 font-normal text-md">
                  <strike
                    className="transition-all duration-150 delay-100"
                    style={
                      checker === "true"
                        ? { display: "flex" }
                        : { display: "none" }
                    }
                  >
                    ₹ 5000
                  </strike>
                </p>
                <p className="text-black font-normal text-md ">
                  ₹{checker === "true" ? 2000 : 5000}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center drop-shadow-xl rounded-md justify-center mx-auto  lg:ml-10 lg:mt-40  flex-col bg-white  lg:w-[24rem] w-[21.25rem] h-[27rem] gap-7">
          <h4 className="font-semibold mt-2"> Checkout Details</h4>
          <div className="flex w-56 text-gray-400 justify-between gap-5">
            <h5 className=" font-normal ">Course Price -</h5>
            <p>₹ 5000</p>
          </div>
          <div className="flex gap-5  text-gray-400 w-56 justify-between">
            <h5 className="font-normal  ">Discount -</h5>
            <p className="pl-12"> ₹{checker === "true" ? 2000 : 5000}</p>
          </div>
          <hr className="text-gray-300 w-3/4"></hr>
          <div className="flex gap-5 w-[13.85rem]  justify-between">
            <h3 className="font-semibold text-gray-900">You Pay -</h3>
            <p>₹{checker === "true" ? Calculator() : 5000}</p>
          </div>
          <div className="flex flex-col gap-2 w-[13.85rem] text-violet-500 ">
            <p>Have a coupon code ?</p>
            <div className="flex gap-3  ">
              <input
                type="text"
                onChange={(e) => setCode(e.target.value)}
                placeholder="Coupon Code "
                className=" h-6 p-1 w-3/4 font-light text-md text-black border-violet-200 border-2  "
              />
              <button
                onClick={() => couponchecker()}
                className="h-6 w-1/4 pointer font-normal text-sm  "
              >
                Apply
              </button>
            </div>
            {checker === "true" ? (
              <div className="font-light text-sm text-green-400">
                Your Copoun Verified !
              </div>
            ) : (
              <div className="font-light text-sm text-red-600">
                Enter a Valid Copoun Code
              </div>
            )}
          </div>

          <button className="w-[16rem] flex gap-5 items-center justify-center h-[3.5rem] rounded-md  bg-violet-800 ">
            <CreditCard /> Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkoutpage;
