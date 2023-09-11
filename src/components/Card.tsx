import heroImage from "../assets/images/illustration-hero.svg";

function Card() {
  return (
    <div className="border-2xl w-full ">
      <img src={heroImage} alt="Hero" />
    </div>
  )
}

export default Card