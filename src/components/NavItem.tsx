export default function NavItem({
  lable,
  isActive,
}: {
  lable: string;
  isActive?: boolean;
}) {
  return (
    <li className="font-gilroy text-[1.6rem] leading-[1.86rem] font-normal">
      <a className={`${isActive && "font-bold"} cursor-pointer`}>{lable}</a>
    </li>
  );
}
