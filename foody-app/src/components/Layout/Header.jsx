import classes from "./Header.module.css";
import HeaderFallBackImage from "../../assets/hero/HeaderImage.jpg";
import HeaderImageOptJPG from "../../assets/hero/HeaderImage.jpg";
import HeaderImageWEBP from "../../assets/hero/HeaderImage.jpg";
import HeaderImageOptWEBP from "../../assets/hero/HeaderImageOpt.webp";

const Header = ({ logo }) => {
  return (
    <div className="container">
      <header className={classes.header}>
        <h1 className={classes.logo}>{logo}</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <picture>
          <source
            type="image/webp"
            srcSet={`${HeaderImageOptWEBP} 1x, ${HeaderImageWEBP} 2x`}
          />
          <source
            type="image/jpeg"
            srcSet={`${HeaderImageOptJPG} 1x, ${HeaderFallBackImage} 2x`}
          />
          <img src={HeaderFallBackImage} alt="header hero (a Table of Food)" />
        </picture>
      </div>
    </div>
  );
};

export default Header;
