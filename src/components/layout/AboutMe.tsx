import Image from "next/image";
import User from "../../assets/userW.png";
import Link from "next/link";

export function AboutMe() {
  return (
    <main className="py-12 xs:py-40 xl:py-0 xl:h-screen flex items-center justify-between" data-aos="fade-down">
      <div className="w-[58%] space-y-12 2xl:space-y-16">
        <h1 className="text-5xl xs:text-7xl 2xl:text-9xl font-bold">
          My <br /> Portfolio
        </h1>
        <div className="flex flex-col items-start space-y-3 2xl:space-y-4">
          <h2 className="text-lg xs:text-2xl 2xl:text-4xl font-bold">Aboute me</h2>
          <p className="text-xs xs:text-base 2xl:text-2xl">
            Hello! I´m José, a front-end developer passionate about creating
            engaging web experiences. With strong skills in HTML, CSS, and
            JavaScript, along with knowledge in React and Vue.js, I´m constantly
            seeking to enhance my projects with a focus on usability and
            accessibility. I´m an enthusiastic collaborator, always in search of
            challenges and professional growth. Let´s create something amazing
            together!
          </p>
          <Link href="https://github.com/JoseAlmiroNeto" target="_blank" className="bg-white text-black text-sm 2xl:text-base p-1 2xl:px-3 2xl:py-2 rounded" >
            Learn More
          </Link>
        </div>
      </div>

      <Image
        src={User}
        alt="user"
        className="w-1/3 max-h-full object-contain"
      />
    </main>
  );
}
