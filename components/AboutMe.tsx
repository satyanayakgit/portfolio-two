import AboutList from "./AboutList";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="w-full h-full bg-black text-white py-28 px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-6 md:gap-16">
        <h1 className="text-3xl uppercase font-semibold text-center">
          A Story about me.
        </h1>
        <p className="text-xl md:text-3xl font-medium md:leading-relaxed text-textColor">
          I'm{" "}
          <span className="font-bold tracking-wider text-white">
            Satya Nayak
          </span>{" "}
          and I'm a freelance{" "}
          <span className="font-bold text-white">Blockchain Engineer</span>. I
          am a passionate and versatile full stack engineer with a deep love for
          creating innovative and efficient solution. With Bachelor's degree in
          Computer Science, I've been navigating the ever evolving world of
          technology for nearly two decades. I enjoy my time finding the right
          problem and developing an elegant solution to that. I keep a watchful
          eye on emerging technologies and trends to stay ahead of the curve and
          apply the latest tools and techniques to my work.

          My past experience includes working with complanies like TCS, Infosys, IBM, Accenture, 
          Mphasis and Maybank.
        </p>
        <div className="w-[700px] grid grid-cols-1 md:grid-cols-2 gap-8">
          <AboutList title="Web Development" />
          <AboutList title="Blockchain Development" />
          <AboutList title="DAPPs Develoment" />
          <AboutList title="NFT Development" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
