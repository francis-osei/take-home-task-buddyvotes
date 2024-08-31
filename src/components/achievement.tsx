import AchievementItem from "./achievementItem";

export default function Achievement() {
  return (
    <section className="flex justify-center gap-[16.5rem] py-[12.8rem] text-white bg-[#006E90]">
      <h2 className="font-sora font-semibold leading-[5.04rem] text-[4rem] w-[43.4rem] ">
        Join the winning school now
      </h2>
      <div className="flex gap-[7rem]">
        <AchievementItem figure="3000+" item="Enrolled Students" />
        <AchievementItem figure="30" item="Staff" />
        <AchievementItem figure="1000" item="  Global Alumini" />
      </div>
    </section>
  );
}
