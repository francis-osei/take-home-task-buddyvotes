import NavItem from "./NavItem";

export default function Nav() {
  return (
    <ul className="flex gap-[4rem]">
      <NavItem lable="Home" isActive={true} />
      <NavItem lable="About Us" />
      <NavItem lable="Gallery" />
      <NavItem lable="Team" />
      <NavItem lable="Admission" />
      <NavItem lable="Newsletter" />
    </ul>
  );
}
