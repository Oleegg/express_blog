import { Link } from "react-router-dom";
import i1 from "../../ui/icons/pictures/rent-bike.jpg";
import i2 from "../../ui/icons/pictures/service.jpg";
import i3 from "../../ui/icons/pictures/service-2.jpg";

const images = [
  { url: i1, title: "Rental of bicycles and child seats", link: "" },
  { url: i2, title: "Bicycle and scooter repair", link: "" },
  { url: i3, title: "Bike tuning and maintenance", link: "" },
];

export const SLIDERS = images.map((el, i) => (
  <div key={i}>
    <img src={el.url} alt={el.title} className="slide-image" />
    <Link
      to={el.link}
      className={
        i === 0 || i === 2
          ? "slide-title title-right"
          : i === 1
          ? "slide-title title-top-left"
          : "slide-title"
      }
    >
      {el.title}
    </Link>
  </div>
));
