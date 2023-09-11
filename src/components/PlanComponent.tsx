import musicIcon from "../assets/images/icon-music.svg";

function PlanComponent() {
  return (
    <div className="bg-userPlanBG xs:px-2 flex items-center justify-between rounded-2xl px-4 py-5">
      <div className="xs:gap-x-2 flex gap-x-6 rounded-full">
        <img src={musicIcon} alt="Music icon" />
        <div>
          <p className="font-black">Annual Plan</p>
          <p className="text-userDesaturatedBlue">$59.99/year</p>
        </div>
      </div>
      <div>
        <button
          type="button"
          className="font-bold text-userBrightBlue underline hover:no-underline hover:opacity-80"
        >
          Change
        </button>
      </div>
    </div>
  );
}

export default PlanComponent;
