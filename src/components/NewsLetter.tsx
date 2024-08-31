import Button from "./Button";
import NewsLetterCard from "./NewLetterCard";

export default function NewsLetter() {
  return (
    <section className="flex flex-col justify-center  px-10 gap-[3.2rem]  items-center pt-[9.1rem] pb-[8.6rem] bg-[#F4F6F8]">
      <div className="flex flex-col items-center gap-[.6rem]">
        <h3 className="font-sora font-semibold text-[2.4rem] leading-[3.024rem]">
          Latest Newsletter
        </h3>
        <p className="font-gilroy font-normal text-[1.6rem] leading-[2.4rem] text-[#474464]">
          Stay up-to-date with the latest news and events at our school
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-[4rem] mb-[1.7rem]">
        <NewsLetterCard
          photo="/images/newsletter/happy-black-boy-smiling.jpg"
          title="New school fees release ahead of next academic year"
          alt="happy-black-boy-smiling"
        />
        <NewsLetterCard
          photo="/images/newsletter/young-african-american-girl-reading-a-book.jpg"
          title="New school fees release ahead of next academic year"
          alt="young-african-american-girl-reading-a-book"
        />
        <NewsLetterCard
          photo="/images/newsletter/black-kid-picking-a-book-from-the-shelf.jpg"
          title="New school fees release ahead of next academic year"
          alt="black-kid-picking-a-book-from-the-shelf"
        />
      </div>
      <Button text="Read More" />
    </section>
  );
}
