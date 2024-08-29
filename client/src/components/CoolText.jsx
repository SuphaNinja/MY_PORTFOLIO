const produceSpans = (text, animation) => {
  return text.split("").map((letter, index) => (
    <span
      key={index}
      className={`bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent inline-block transform-style-3d origin-bottom ${animation}`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ));
};

const Position = () => {
  return (
    <div className="relative cursor-default font-medium text-white text-[16px] xs:text-[20px] sm:text-[30px] md:text-[36px] 2xl:text-[66px] leading-[32px] 2xl:leading-[40px] w-full flex justify-center items-center">
      <div className="absolute flex flex-col items-center">
        <div
          className="absolute left-1/2 transform -translate-x-1/2 top-[10%] sm:top-[8%] md:top-[5%] lg:top-[3%] 2xl:top-0 flex justify-center"
          aria-label="Frontend Developer"
        >
          {produceSpans("Frontend Developer", "animate-textRotate1")}
        </div>
        <div
          className="absolute left-1/2 transform -translate-x-1/2 top-[25%] sm:top-[22%] md:top-[18%] lg:top-[15%] 2xl:top-[10%] flex justify-center"
          aria-label="Backend Developer"
        >
          {produceSpans("Backend Developer", "animate-textRotate2")}
        </div>
      </div>
    </div>
  );
};

export default Position;