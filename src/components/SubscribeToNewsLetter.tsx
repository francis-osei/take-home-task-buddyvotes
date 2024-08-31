export default function SubscribeToNewsLetter() {
  return (
    <div className="flex items-center pl-[1.3rem] py-[.5rem] pr-[.2rem] bg-white rounded-full w-[33.6rem]">
      <input
        type="text"
        placeholder="Subscribe to newsletter"
        className="text-black outline-none placeholder:text-[#05060F] rounded-full w-[90%]"
      />
      <div className=" flex items-center justify-center w-[3.6rem] h-[3.6rem] bg-[#05060F] rounded-full">
        <svg className="w-[2.4rem] h-[2.4rem]">
          <use xlinkHref="/icons/svg/sprite.svg#icon-send"></use>
        </svg>
      </div>
    </div>
  );
}
