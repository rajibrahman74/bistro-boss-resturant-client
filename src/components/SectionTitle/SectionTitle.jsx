const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="my-8 md:w-4/12 mx-auto">
      <p className="text-[#D99904] text-lg italic text-center mb-4">{subHeading}</p>
      <div className="text-4xl text-center uppercase border-y-4 border-[#E8E8E8] py-5">
        {heading}
      </div>
    </div>
  );
};

export default SectionTitle;