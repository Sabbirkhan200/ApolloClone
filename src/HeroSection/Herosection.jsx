import React from "react";

const Herosection = () => {
  return (
    <div className=" bg-orange-200 h-full justify-end">
      <div class="grid grid-cols-2 gap-2  ">
        <div className="">
          <button className=" bg-yellow-300  rounded-full py-2 px-5  font-semibold ">
            Sign up
          </button>
          <p className=" text-6xl font-bold ">
            Sign up for Apollo — <br />
            Free Forever
          </p>
          <p className="text-2xl">
            Find, contact, and close your ideal buyers with over <br />
            260M contacts and streamlined engagement
            <br />
            workflows powered by AI.
          </p>
          <div className="rating flex">
            <input
              type="radio"
              name="rating"
              value="5"
              id="star5"
              className="hidden"
            />
            <label for="star5" className="rating-star">
              &#9733;
            </label>

            <input
              type="radio"
              name="rating"
              value="4"
              id="star4"
              className="hidden"
            />
            <label for="star4" className="rating-star">
              &#9733;
            </label>

            <input
              type="radio"
              name="rating"
              value="3"
              id="star3"
              className="hidden"
            />
            <label for="star3" className="rating-star">
              &#9733;
            </label>

            <input
              type="radio"
              name="rating"
              value="2"
              id="star2"
              className="hidden"
            />
            <label for="star2" className="rating-star">
              &#9733;
            </label>

            <input
              type="radio"
              name="rating"
              value="1"
              id="star1"
              className="hidden"
            />
            <label for="star1" className="rating-star">
              &#9733;
            </label>
            <p>4.8/5 based on 5,133 reviews | GDPR Compliant</p>
          </div>
          <label className="relative block flex ">
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-80 h-15 border border-slate-300 rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search..."
              type="text"
              name="search"
            />{" "}
            <button className=" bg-black text-white py-2 px-4  rounded-r-lg">
              sabbir
            </button>
          </label>
        </div>
        <div className=" ">02</div>
      </div>
      <p>
        By signing up, I agree to Apollo's{" "}
        <a className=" text-lg">Terms of Service and Privacy Policy.</a>{" "}
      </p>
      <div className=" space-x-3">
     
        <button className=" bg-amber-300 py-3 px-2 font-semibold rounded-md outline ">
          sing up with google
        </button>
        <button className=" bg-amber-300 py-3 px-2 font-semibold rounded-md outline ">
          sing up with microsoft
        </button>
      </div>
    </div>
  );
};

export default Herosection;
