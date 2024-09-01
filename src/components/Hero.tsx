import Image from "next/image";
import Number from "./Number";

export default function Hero() {
  return (
    <div className="relative w-full h-[91.3rem]">
      <Image
        src="/page/shallow-focus-shot-african-child-learning-school.jpg" // Replace with your image path
        alt="Hero Background"
        layout="fill"
        objectFit="cover" 
        quality={100} 
        className="z-0"
      />

      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="center flex flex-col ml-[2rem] gap-[1.2rem] pt-[20.3rem] pb-[35.6rem]">
        <p className=" font-sora font-bold text-[5rem] text-white leading-[6.3rem] max-w-[61.9rem]">
          Join us on this exciting journey of discovery and become a hero in
          your own story.
        </p>
        <div className="flex gap-[.2rem]">
          <Number number={1} />
          <Number number={2} />
          <Number number={3} />
          <Number number={4} />
        </div>
      </div>
    </div>
  );
}
