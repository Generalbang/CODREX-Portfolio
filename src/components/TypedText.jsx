import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: ["Frontend Developer","Backend Developer", "dreamer", "problem solver"],
      typeSpeed: 70,
      backSpeed: 40,
      loop: true,
      backDelay: 1500,
    });

    return () => typed.current.destroy(); // cleanup on unmount
  }, []);

  return (
    <h1>
      I’m a <span ref={el} />
    </h1>
  );
};

export default TypedText;
