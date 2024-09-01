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
    <div className="flex flex-wrap item-center justify-between gap-y-6 pb-[1.6rem] max-w-[69.1rem] border-b-[0.2rem] border-[#DCE0E4]">
      <div className="max-w-[45.8rem]">
        <span className="mb-[.7rem] font-sora font-bold text-[2.2rem] leading-[2.8rem]">
          {title}
        </span>
        <div>
          <p className="font-gilroy font-normal text-[1.6rem] leading-[2.4rem]">
            {content}
          </p>
        </div>
        <div className="flex items-center mt-[1.5rem] gap-[1.2rem] px-[1.4rem] py-[.5rem] w-max rounded-[3.7rem] bg-[#ECECEC] ">
          <svg className="w-[2rem] h-[2rem]">
            <use xlinkHref="/icons/svg/sprite.svg#icon-settings"></use>
          </svg>
          <svg className="w-[1rem] h-[.6rem]">
            <use xlinkHref="/icons/svg/sprite.svg#icon-arrow-down"></use>
          </svg>
        </div>
      </div>
      <div className="w-[16.4rem] h-[11.8rem]">
        <img src={`${photo}`} className="rounded-[.4rem]" />
      </div>
    </div>
  );
}
