import data from "../Data/Data";
import Card from "./Card/Card";
import "../Component/Animated.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export const Animated = () => {
  useGSAP(() => {
    gsap.from(".left", {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power3.out",
    });
  }, []);
  useGSAP(() => {
    gsap.from(".Right", {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "power3.out",
    });
  }, []);
  return (
    <div className="container">
      {data.map((datas, index) => {
        return <Card key={index} datas={datas} />;
      })}
    </div>
  );
};
