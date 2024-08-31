import Button from "./Button";

export default function Stories() {
  return (
    <div className="relative h-[59.2rem] pt-[13.6rem]">
      <div className=" flex flex-col justify-center gap-[5rem] items-center">
        <h2 className="font-sora font-semibold text-[4rem] leading-[5.4rem] w-[65.7rem] text-center">
          Enroll your ward to join
          <br />
          over 3000+ successful students
        </h2>

        <Button text="Enroll your ward now" />
      </div>

      <div className="absolute hide-img  top-[10rem] left-[10rem] w-[15.1rem] h-[15.1rem]">
        <img src="/page/Ellipse-1e1.jpg" alt="" />
      </div>
      <div className="absolute hide-img top-[26rem] left-[25rem] w-[9rem] h-[9rem]">
        <img src="/page/Ellipse-1e2.jpg" alt="" />
      </div>
      <div className="absolute hide-img  top-[30rem] left-[41rem] w-[9rem] h-[9rem]">
        <img src="/page/Ellipse-3e3.jpg" alt="" />
      </div>
      <div className="absolute hide-img top-[32rem] left-[55rem] w-[15.8rem] h-[15.8rem]">
        <img src="/page/Ellipse-4e4.jpg" alt="" />
      </div>
      <div className="absolute hide-img top-[32rem] right-[55rem] w-[15.8rem] h-[15.8rem]">
        <img src="page/Ellipse-4e5.jpg" alt="" />
      </div>
      <div className="absolute hide-img top-[30rem] right-[41rem] w-[9rem] h-[9rem]">
        <img src="/page/Ellipse-3e6.jpg" alt="" />
      </div>
      <div className="absolute hide-img top-[26rem] right-[25rem] w-[9rem] h-[9rem]">
        <img src="/page/Ellipse-2e7.jpg" alt="" />
      </div>
      <div className="absolute hide-img top-[10rem] right-[10rem] w-[15.1rem] h-[15.1rem]">
        <img src="/page/Ellipse-1e8.jpg" alt="" />
      </div>
    </div>
  );
}
