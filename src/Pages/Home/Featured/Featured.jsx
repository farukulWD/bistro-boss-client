import Button from "../../../Components/Buttons/Button";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredIMG from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div>
      <section
        className="bg-fixed text-white pt-8 my-20 bg-slate-500 "
        style={{
          backgroundImage: `url(${featuredIMG})`,
        }}
      >
        <SectionTitle subHeading="Check it out" heading="From our menu" />
        <div className="md:flex justify-center items-center bg-opacity-60 pb-20 pt-12 px-36">
          <div>
            <img src={featuredIMG} alt="" />
          </div>
          <div className="text-left md:ml-10">
            <p>Aug 20, 2029</p>
            <p className="uppercase">Where can i get some?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              expedita hic dolorem, iusto vel suscipit nam excepturi debitis
              magnam nostrum! Ut eum dignissimos culpa doloremque eligendi
              consectetur blanditiis laboriosam fugiat ea quia similique quam
              nisi reprehenderit numquam magnam nemo vitae cupiditate, atque
              maiores dicta minus pariatur. Perspiciatis nobis vero quas?
            </p>
            <button className="btn text-white btn-outline border-0  border-b-4 mt-3">
              Read more
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featured;
