export default function NewsLetterpost({
  title,
  content,
  photo,
}: {
  title: string;
  content: string;
  photo: string;
}) {
  return (
    <div className="flex item-center justify-between pb-[1.6rem] max-w-[69.1rem] border-b-[0.2rem] border-[#DCE0E4]">
      <div className="w-[45.8rem] min-w-[45.8rem]">
        <span className="mb-[.7rem] font-sora font-bold text-[2.2rem] leading-[2.8rem]">
          {title}
        </span>
        <div>
          <p className="font-gilroy font-normal text-[1.6rem] leading-[2.4rem]">
            {content}
          </p>
        </div>
      </div>
      <div className="w-[16.4rem] h-[11.8rem]">
        <img src={`${photo}`} className="rounded-[.4rem]" />
      </div>
    </div>
  );
}
