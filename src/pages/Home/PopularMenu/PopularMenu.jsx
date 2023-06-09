import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="my-12">
      <SectionTitle
        subHeading="---Check it out---"
        heading="FROM OUR MENU"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-7 mx-auto mt-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <span className="flex justify-center items-center mt-12">
        <button className="uppercase text-[#1F2937] font-semibold w-56 h-16 rounded-lg border-b-[3px] border-[#1F2937]">
          View Full Menu
        </button>
      </span>
    </section>
  );
};

export default PopularMenu;