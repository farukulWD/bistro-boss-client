import { Parallax } from "react-parallax";

const Cover = ({ img, title, description }) => {
  return (
    <div>
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
      >
        <div className="hero h-[700px] min-h-screen" style={{}}>
          <div className=""></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{title}</h1>
              <p className="mb-5">{description}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;
