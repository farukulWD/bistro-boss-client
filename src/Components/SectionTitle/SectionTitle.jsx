const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto md:w-5/12 text-center my-10">
      <p className="text-[#d99904] my-2">---{subHeading}---</p>
      <h2 className="text-4xl uppercase w-11/12 mx-auto border-y-4 py-3">
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;
