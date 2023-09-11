import heroImage from "../assets/images/illustration-hero.svg";
import PlanComponent from "./PlanComponent";

function Card() {
  return (
    <div className="z-10 max-w-md rounded-2xl bg-white shadow-xl">
      <img src={heroImage} alt="Hero" className="rounded-t-2xl" />
      <div className="xs:px-4 mt-2 flex flex-col gap-y-6 p-6 text-center sm:px-10">
        <div className="flex flex-col gap-y-6 px-4">
          <h1 className="text-2xl font-black">Order Summary</h1>
          <p className="text-userTextGrey">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
        </div>
        <PlanComponent />
        <button
          type="button"
          className="w-full rounded-2xl bg-userBrightBlue py-4 font-bold text-white shadow-xl hover:opacity-80"
        >
          Proceed to Payment
        </button>
        <button
          type="button"
          className="text-userTextGrey font-black hover:text-black"
        >
          Cancel Order
        </button>
      </div>
    </div>
  );
}

export default Card;
