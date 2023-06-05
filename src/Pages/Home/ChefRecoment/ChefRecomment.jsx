import Button from "../../../Components/Buttons/Button";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import img1 from "../../../assets/home/chef-service.jpg";

const ChefRecommend = () => {
  return (
    <div>
      <section>
        <SectionTitle
          subHeading="Should Try"
          heading="CHEF RECOMMENDS"
        ></SectionTitle>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="card bg-base-100 rounded-none shadow-xl">
            <figure className="">
              <img src={img1} alt="Shoes" className="w-[424px] h-[300px]" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Caeser Salad</h2>
              <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div className="card-actions">
                <Button btnText="add to card" />
              </div>
            </div>
          </div>
          <div className="card rounded-none bg-base-100 shadow-xl">
            <figure className="">
              <img src={img1} alt="Shoes" className="w-[424px] h-[300px]" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <Button btnText="add to card" />
              </div>
            </div>
          </div>
          <div className="card bg-base-100 rounded-none shadow-xl">
            <figure className="">
              <img src={img1} alt="Shoes" className="w-[424px] h-[300px]" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <Button btnText="add to card" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChefRecommend;
