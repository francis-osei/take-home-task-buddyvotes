export default function SideNavItem({
  item,
  icon,
  isActive,
}: {
  item: string;
  icon: string;
  isActive?: boolean;
}) {
  return (
    <li
      className={`flex gap-[2rem] rounded-full py-[.8rem] px-[2rem]  hover:bg-[#E6DFFC] cursor-pointer 
        ${isActive && "bg-[#E6DFFC]"}`}
    >
      <svg className="flex items-center w-[2rem] h-[2rem]">
        <use xlinkHref={`/icons/svg/sprite.svg#${icon}`}></use>
      </svg>
      <a
        href="#"
        className="font-gilroy font-medium text-[1.6rem] leading-[2.4rem]"
      >
        {item}
      </a>
    </li>
  );
}
