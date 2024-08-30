import Number from "./Number";

export default function Hero() {
  return (
    <div className="bg-[url('/page/shallow-focus-shot-african-child-learning-school.jpg')] bg-cover bg-center bg-no-repeat w-full h-[91.3rem]">
      <div className="flex flex-col gap-[1.2rem] pt-[20.3rem] pb-[35.6rem]  ml-[6.8rem]">
        <p className=" font-sora font-bold text-[5rem] text-white leading-[6.3rem] w-[61.9rem]">
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
