export default function AchievementItem({
  figure,
  item,
}: {
  figure: string;
  item: string;
}) {
  return (
    <div className=" flex flex-col items-center justify-center font-sora font-semibold text-[5rem]">
      <span>{figure}</span>
      <span className="font-gilroy font-medium text-[2rem] leading-[2.35rem]">
        {item}
      </span>
    </div>
  );
}
