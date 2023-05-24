const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex items-center space-x-3">
      <img
        className="w-[118px] h-[104px]"
        style={{ borderRadius: "0px 200px 200px 200px" }}
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase text-[#151515] text-xl">
          {name} ------------------
        </h3>
        <p className="text-[#737373] text-base">{recipe}</p>
      </div>
      <p className="text-[#BB8506] text-xl">${price}</p>
    </div>
  );
};

export default MenuItem;
