import banner from "../../assets/1.png";
import "./banner.css";

const Banner = () => {
  return (
    <div>
      <section className="sectionBanner">
        <img src={banner} className="imgBanner" alt="" />
      </section>
    </div>
  );
};
export default Banner;
