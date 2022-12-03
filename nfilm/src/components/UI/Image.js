import { useState } from "react";
const Image = (props) => {
  const [_fallBack, setFallBack] = useState("");

  const handerError = () => {
    if (props.fallback) {
      setFallBack(props.fallback);
    }
  };

  return (
    <img
      // loading="lazy"
      style={{ overflow: "hidden" }}
      src={_fallBack || props.src}
      className={props.className}
      alt={props.alt}
      onError={handerError}
      onClick={props.onClick}
    />
  );
};

export default Image;
