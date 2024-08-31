export default function Button({ text }: { text: string }) {
  return (
    <button className="flex items-center gap-[.4rem] font-gilroy font-semibold text-[1.8rem] py-[.7rem] px-[1.6rem] rounded-[1rem] leading-[4.2rem] text-white bg-black">
      {text}
      <svg className="flex items-center w-[1.7rem] h-[1.5rem]">
        <use xlinkHref={`/icons/svg/sprite.svg#icon-arrow-right`}></use>
      </svg>
    </button>
  );
}
