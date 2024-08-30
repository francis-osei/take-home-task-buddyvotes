import Logo from "./Logo";
import Nav from "./Nav";

export default function Header() {
  return (
    <div className="flex justify-center items-center mt-[3.9rem] mb-[3.3rem] mx-auto w-full">
      <div className="flex gap-[34.2rem]">
        <Logo />
        <Nav />
      </div>
    </div>
  );
}
