import Image from "next/image";
import Button from "./Button";

export default function Stories() {
  return (
    <div className="relative h-[59.2rem] pt-[13.6rem]">
      <div className=" flex flex-col justify-center gap-[5rem] items-center">
        <h2 className="font-sora font-semibold text-[4rem] leading-[5.4rem] max-w-[65.7rem] text-center">
          Enroll your ward to join
          <br />
          over 3000+ successful students
        </h2>
        <Button text="Enroll your ward now" link="/dashboard" />
      </div>

      <div className="absolute min-[1600px]:hidden max-[851px]:hidden  top-[10rem] left-[10rem] w-[15.1rem] h-[15.1rem]">
        <Image
          src="/page/Ellipse-1e1.jpg"
          layout="responsive"
          width={151}
          height={151}
          alt=""
        />
      </div>
      <div className="absolute min-[1600px]:hidden max-[707px]:hidden top-[26rem] left-[25rem] w-[9rem] h-[9rem]">
        <Image
          src="/page/Ellipse-1e2.jpg"
          layout="responsive"
          width={90}
          height={90}
          alt=""
        />
      </div>
      <div className="absolute min-[1600px]:hidden max-[911px]:hidden  top-[30rem] left-[41rem] w-[9rem] h-[9rem]">
        <Image
          src="/page/Ellipse-3e3.jpg"
          layout="responsive"
          width={90}
          height={90}
          alt=""
        />
      </div>
      <div className="absolute min-[1600px]:hidden max-[1219px]:hidden top-[32rem] left-[55rem] w-[15.8rem] h-[15.8rem]">
        <Image
          src="/page/Ellipse-4e4.jpg"
          layout="responsive"
          width={320}
          height={320}
          alt=""
        />
      </div>
      <div className="absolute min-[1600px]:hidden max-[1219px]:hidden top-[32rem] right-[55rem] w-[15.8rem] h-[15.8rem]">
        <Image
          src="/page/Ellipse-4e5.jpg"
          layout="responsive"
          width={320}
          height={320}
          alt=""
        />
      </div>
      <div className="absolute min-[1600px]:hidden max-[911px]:hidden top-[30rem] right-[41rem] w-[9rem] h-[9rem]">
        <Image
          src="/page/Ellipse-3e6.jpg"
          layout="responsive"
          width={90}
          height={90}
          alt=""
        />
      </div>
      <div className="absolute min-[1600px]:hidden max-[707px]:hidden top-[26rem] right-[25rem] w-[9rem] h-[9rem]">
        <Image
          src="/page/Ellipse-2e7.jpg"
          layout="responsive"
          width={90}
          height={90}
          alt=""
        />
      </div>
      <div className="absolute min-[1600px]:hidden max-[851px]:hidden top-[10rem] right-[10rem] w-[15.1rem] h-[15.1rem]">
        <Image
          src="/page/Ellipse-1e8.jpg"
          layout="responsive"
          width={151}
          height={151}
          alt=""
        />
      </div>
    </div>
  );
}
