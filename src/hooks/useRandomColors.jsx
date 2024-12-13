import  { useEffect, useState } from "react";

const useRandomColors = () => {
  const [textColor, setTextColor] = useState("");
  const [bgColor, setBgColor] = useState("");

  const changeColor = () => {
    const colorClasses = ["text-palette1", "text-palette2", "text-palette3"]; // Tailwind classes
    const colorClassesBG = ["bg-[#292524]", "bg-[#273f44]", "bg-[#1e1e1e]"]; // Tailwind classes
    const randomColor =
      colorClasses[Math.floor(Math.random() * colorClasses.length)];
    const randomBgColor =
      colorClassesBG[Math.floor(Math.random() * colorClassesBG.length)];
    setTextColor(randomColor);
    setBgColor(randomBgColor);
  };

  useEffect(() => {
    changeColor(); // Change color on first render
  }, []);

  return { textColor, bgColor };
};

export default useRandomColors;
