import Logo from "./Logo";
import Nav from "./Nav";

export default function Header() {
  return (
    <div className=" flex justify-center items-center mt-[3.9rem] mb-[3.3rem] mx-auto w-full">
      <div className="max-[1216px]:gap-[10rem] flex gap-[34.2rem]">
        <Logo />
        <div className="flex gap-[4rem] max-[972px]:hidden">
          <Nav />
          <svg className="flex items-center w-[2.4rem] h-[2.4rem]">
            <use xlinkHref={`/icons/svg/sprite.svg#icon-search`}></use>
          </svg>
        </div>
      </div>
    </div>
  );
}
