import Link from "./Link";

export default function QuickLink() {
  return (
    <div className=" flex flex-col gap-[1.5rem] w-[17.7rem]">
      <span className="font-semibold text-[2rem]">Quick Links</span>
      <div className="grid grid-rows-4 grid-flow-col gap-x-[3.9rem] gap-y-[.5rem]">
        <Link link="Home" />
        <Link link="About Us" />
        <Link link="Career" />
        <Link link="Newsletter" />
        <Link link="Team" />
        <Link link="Gallery" />
        <Link link="Contact" />
        <Link link="FAQs" />
      </div>
    </div>
  );
}
