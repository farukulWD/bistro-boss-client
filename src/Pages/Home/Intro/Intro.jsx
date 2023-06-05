import bgImg from "../../../assets/home/chef-service.jpg";

const Intro = () => {
  return (
    <div>
      <div
        className="hero md:py-16"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-5xl md:px-28 md:py-16 bg-white text-black">
            <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, libero accusamus laborum deserunt ratione dolor
              officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
              nihil iusto ducimus incidunt quibusdam nemo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
