const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16 bg-gradient-to-r from-blue-100 to-purple-200">

      {/* Left Content */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <p className="text-gray-600 font-medium">
          The Leader in Online Learning
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 leading-tight">
          Join Today & <br /> Start Learning
        </h1>

        <p className="text-gray-600">
          The best place to discover new learning resources, books, and courses.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center md:justify-start">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Get Started
          </button>

          <button className="border border-gray-400 px-6 py-2 rounded-full hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src="/hero.png"   // put your image in public folder
          alt="learning"
          className="w-[400px] md:w-[500px] object-contain"
        />
      </div>

    </section>
  );
};

export default Hero;