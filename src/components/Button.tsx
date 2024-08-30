export default function Button({ text }: { text: string }) {
  return (
    <button className="font-gilroy font-semibold text-[1.8rem] py-[.7rem] px-[1.6rem] rounded-[1rem] leading-[4.2rem] text-white bg-black">
      {text}
    </button>
  );
}
