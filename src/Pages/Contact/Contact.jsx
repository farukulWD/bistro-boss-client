import Cover from "../Shared/Cover/Cover";
import img from "../../assets/contact/banner.jpg";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { HiOutlinePhoneOutgoing } from "react-icons/hi";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div>
      <Cover
        img={img}
        title={"Contact"}
        description={"Would you like to try a dish?"}
      ></Cover>
      <section className="mb-10">
        <SectionTitle
          subHeading="Visit Us"
          heading="OUR LOCATION"
        ></SectionTitle>
        <div className="flex md:px-20 justify-around gap-6">
          <div className="card w-full shadow-xl">
            <div className="bg-[#d1a054] rounded-sm flex justify-center">
              <h2 className="text-white py-3  text-xl">
                <HiOutlinePhoneOutgoing></HiOutlinePhoneOutgoing>
              </h2>
            </div>
            <div className="card-body text-center bg-[#f3f3f3] mx-8">
              <h2 className="card-title justify-center">Phone</h2>
              <p>+38 (012) 34 56 789</p>
            </div>
          </div>
          <div className="card w-full shadow-xl">
            <div className="bg-[#d1a054] rounded-sm flex justify-center">
              <h2 className="text-white py-3  text-xl">
                <HiOutlinePhoneOutgoing></HiOutlinePhoneOutgoing>
              </h2>
            </div>
            <div className="card-body text-center bg-[#f3f3f3] mx-8">
              <h2 className="card-title justify-center">Phone</h2>
              <p>+38 (012) 34 56 789</p>
            </div>
          </div>
          <div className="card w-full shadow-xl">
            <div className="bg-[#d1a054] rounded-sm flex justify-center">
              <h2 className="text-white py-3  text-xl">
                <HiOutlinePhoneOutgoing></HiOutlinePhoneOutgoing>
              </h2>
            </div>
            <div className="card-body text-center bg-[#f3f3f3] mx-8">
              <h2 className="card-title justify-center">Phone</h2>
              <p>+38 (012) 34 56 789</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <SectionTitle
          subHeading={"Send Us a Message"}
          heading={"CONTACT FORM"}
        ></SectionTitle>
        <ContactForm></ContactForm>
      </section>
    </div>
  );
};

export default Contact;
