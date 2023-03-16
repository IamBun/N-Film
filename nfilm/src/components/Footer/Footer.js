import classes from "./footer.module.css";
import { FOOTER_DATA } from "../const/CONST";
import { useEffect, useState } from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
const Footer = () => {
  const [data, setData] = useState();

  useEffect(() => {
    setData(FOOTER_DATA);
  }, []);

  return (
    <div className={classes.footer}>
      <h3>Questions? Contact us.</h3>
      {data && (
        <>
          <ul className={classes.column}>
            {data.map((ele, index) => {
              return <li key={index}>{ele}</li>;
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default Footer;
