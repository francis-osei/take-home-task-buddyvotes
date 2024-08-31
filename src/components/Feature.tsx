import Button from "./Button";
import FeatureCard from "./FeatureCard";

export default function Feature() {
  return (
    <section className="flex flex-col  px-10 gap-[3.7rem] items-center py-[7.2rem]">
      <div className="flex flex-col gap-[.9rem] items-center">
        <h2 className="font-sora font-semibold text-[2.4rem] leading-[3.024rem]">
          Why your ward should be here
        </h2>
        <p className="font-gilroy font-normal text-[1.6rem] leading-[2.4rem] text-[#474464]">
          Providing an exceptional educational experience for success
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-[4.4rem] mb-[1.5rem]">
        <FeatureCard
          icon="/icons/png/graduation-hat.png"
          title="Outstanding Faculty"
          content="Our teachers are highly trained and passionate about education. They are committed to ensuring that your child receives the best possible support and guidance throughout their academic journey."
        />
        <FeatureCard
          icon="/icons/png/book-stack.png"
          title="Global Curriculum"
          content="Our international curriculum is designed to equip students with the skills and knowledge they need to thrive in a globalized world. We offer a wide range of subjects and programs that are tailored to meet the unique needs of each individual student.."
        />
        <FeatureCard
          icon="/icons/png/office-building.png"
          title="State-of-the-Art Facilities"
          content="Our school is equipped with modern and innovative facilities, including science and computer labs, libraries, sports grounds, and more. These facilities provide students with the tools they need to excel in their studies and develop their talents."
        />
      </div>
      <Button text={"Enroll your ward now"} />
    </section>
  );
}
