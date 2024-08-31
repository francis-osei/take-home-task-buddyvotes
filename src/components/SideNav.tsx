import SideNavItem from "./SideNavItem";

export default function SideNav() {
  return (
    <ul className="px-[1.7rem] bg-[#FDFDFD]">
      <SideNavItem icon="icon-edit-square" item="Admissions" />
      <SideNavItem icon="icon-paper" item="Newsletters" isActive={true} />
      <SideNavItem icon="icon-users" item="Subscribes" />
      <SideNavItem icon="icon-combined-shape" item="Analytics" />
      <SideNavItem icon="icon-logout" item="logout" />
    </ul>
  );
}
