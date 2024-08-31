
export default function ContactInformationItem({
  icon,
  item,
}: {
  icon: string;
  item: string;
}) {
  return (
    <span className="flex items-center justify-start gap-[1.5rem]">
      <svg className="flex items-center w-[2.4rem] h-[2.4rem]">
        <use xlinkHref={`/icons/svg/sprite.svg#${icon}`}></use>
      </svg>
      <span className="leading-[1.856rem] ">{item}</span>
    </span>
  );
}
