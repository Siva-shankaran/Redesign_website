import { useEffect, useState } from "react";

function ScrollProgress() {

  const [scroll, setScroll] = useState(0);

  useEffect(() => {

    const handleScroll = () => {

      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const current =
        (window.scrollY / total) * 100;

      setScroll(current);

    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <div
      className="fixed top-0 left-0 h-1 bg-orange-500 z-[9999]"
      style={{ width: `${scroll}%` }}
    ></div>

  );

}

export default ScrollProgress;